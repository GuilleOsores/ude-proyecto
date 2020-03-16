package logica;

import com.google.gson.JsonObject;

import java.io.FileInputStream;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import logica.colecciones.Jugadores;
import logica.colecciones.Vehiculos;
import logica.entidades.Jugador;
import logica.entidades.Partida;
import logica.entidades.Patrulla;
import logica.entidades.Pesquero;
import logica.entidades.Vehiculo;
import persistencia.DAOBarcos;
import persistencia.DAOJugadores;
import persistencia.DAOPartidas;

public class Fachada {
	
	private Partida partida;
	private static Fachada fachada;	
	private String bandoCreadorDePartida;
	private String nickCreadorDePartida;
	private DAOBarcos daoBarcos;
	private DAOPartidas daoPartidas;
	private DAOJugadores daoJugadores;
	
	private Fachada() {
		
		partida = null;
		
		try {
			Properties p = new Properties();
			p.load(new FileInputStream("config/config.properties"));
		
			String driver = p.getProperty("db_driver");
			String host = p.getProperty("db_server");
			String port = p.getProperty("db_port");
			String database = p.getProperty("db_database");
			
			String url = "jdbc:mysql://" + host + ":" + port + "/" + database;
			String user = p.getProperty("db_user");
			String password = p.getProperty("db_password");
			
			Class.forName(driver);
		
			daoBarcos = new DAOBarcos(url, user, password);
			daoJugadores = new DAOJugadores(url, user, password);
			daoPartidas = new DAOPartidas(url, user, password);
			
		} catch (Exception e) {
			System.out.println("Exception creando fachada");
			e.printStackTrace();
		}
		
	}
	
	public static Fachada getInstanceFachada() {
		if (fachada == null) {
			fachada = new Fachada();
		}
		return fachada;	
	}
	
	public void setPartida(Partida p) {
		Fachada f = getInstanceFachada();
		f.partida = p;
	}
	
	public JsonObject crearPartida(String nickName, String bando, int tamanioEscenarioX, int tamanioEscenarioY, int millasPesca, int tiempo, int cantPeces, int fishFished) throws Exception {
	
		JsonObject json = new JsonObject();
		
		if (!partida.getJugadores().isEmpty()) {
			throw new Exception("Ya existe una partida en curso.");
		}else {
			Vehiculo v1 = null, v2 = null;
			
			if (bando.equals("PATRULLA")) { 	
				
				v1 = new Patrulla("grande");
				v2 = new Patrulla("chica");	
				
			} else if (bando.equals("PESQUERO")) {
				
				v1 = new Pesquero("fabrica");
				v2 = new Pesquero("comun");
				
			}
			
			Vehiculos vehiculos = new Vehiculos();
			vehiculos.put(v1);	
			vehiculos.put(v2);	
			
			Jugador jugador = new Jugador(1, nickName, vehiculos, 0);
			
			Jugadores jugadores = partida.getJugadores();
			jugadores.put(jugador);
			
			partida.setJugadores(jugadores);
			partida.setTamanioEscenarioX(tamanioEscenarioX);
			partida.setTamanioEscenarioY(tamanioEscenarioY);
			partida.setMillasPesca(millasPesca);
			partida.setTiempo(tiempo);
			partida.setCantPeces(cantPeces);
			partida.setFishFished(fishFished);
			
			bandoCreadorDePartida = bando;
			nickCreadorDePartida = nickName;
			
			json.addProperty("mensaje", "OK");
		}

						
		return json;
	}

	public JsonObject unirsePartida(String nickName) throws Exception {
		JsonObject json = new JsonObject();
		
		if (partida.getJugadores().isEmpty()) {
			
			throw new Exception("No hay una partida creada.");	
			
		} else if (nickCreadorDePartida.equals(nickName)){
			
			throw new Exception("El nombre de jugador ya existe.");
			
		} else if (partida.getJugadores().cantidadDeJugadores() == 2) {
			
			throw new Exception("La partida est� completa.");
			
		} else {
			
			Vehiculo v1 = null, v2 = null;
			
		
			if (bandoCreadorDePartida.equals("PESQUERO")) { 	
				
				v1 = new Patrulla("grande");
				v2 = new Patrulla("chica");	
				
			} else {
				
				v1 = new Pesquero("fabrica");
				v2 = new Pesquero("comun");
				
			}
			
			Vehiculos vehiculos = new Vehiculos();
			vehiculos.put(v1);	
			vehiculos.put(v2);	
			
			Jugador jugador2 = new Jugador(2, nickName, vehiculos, 0);			
			
			Jugadores jugadores = partida.getJugadores();
			jugadores.put(jugador2);
			
			partida.setJugadores(jugadores);
				
			json.addProperty("mensaje", "OK");
		}
		
		return json;
	}
	
	public JsonObject getPartida() throws Exception {
		JsonObject json = new JsonObject();
		
		if (partida.getJugadores().isEmpty()) {
			throw new Exception("No hay una partida creada.");			
		}else {
			
			json.addProperty("width", partida.getTamanioEscenarioX());
			json.addProperty("height", partida.getTamanioEscenarioY());
			json.addProperty("millaLimite", partida.getMillasPesca());
			json.addProperty("time", partida.getTiempo());
			json.addProperty("fishFished", partida.getFishFished());
			json.addProperty("time", partida.getTiempo());
			
			json.add("jugadores", partida.getJugadores().getJugadoresToJson());
	
			json.addProperty("mensaje", "OK");
		}
		
		return json;
	}
	
	public int getTiempoPartida() {
		return partida.getTiempo();
	}
	
	public JsonObject finalizarPartida() throws Exception {
		JsonObject json = new JsonObject();
		
		if (partida.getJugadores().isEmpty()) {
			throw new Exception("No hay una partida creada.");			
		}else {
			fachada.dispose();		
			json.addProperty("mensaje", "OK");		
		}
		
		return json;
	}
	
	private void dispose() {
		fachada = null;
		partida = null;
		bandoCreadorDePartida = null;
		nickCreadorDePartida = null;	
	}
	
	// Guarda la instancia de la partida en la BD (Jugadores, Barcos y Partida)
	public void guardarPartida() throws SQLException {
		
		List<Jugador> jugadores = this.partida.getJugadores().jugadoresToList();
		
		for(Jugador j : jugadores) {
			
			daoJugadores.guardarJugador(j);
			
			List<Vehiculo> vehiculos = j.getVehiculos().vehiculosToList();
			
			for(Vehiculo v : vehiculos) {
				daoBarcos.guardarVehiculo(v, j.getId());
			}
		}
		
		daoPartidas.guardarPartida(this.partida);
				
		System.out.println("Partida guardada en BD");
	}
	
	public JsonObject cargarPartida() throws Exception {
	
		Partida partida = daoPartidas.getPartida();
		Jugadores jugadoresAux = daoJugadores.getJugadores();
		
		Jugadores jugadores = new Jugadores();
		
		for(Jugador j : jugadoresAux.jugadoresToList()) {
			j.setVehiculos(daoBarcos.getVehiculosJugador(j.getId()));
			jugadores.put(j);
		}
		
		partida.setJugadores(jugadores);
		
		this.partida = partida;
		
		return getPartida();
	}
	
}

