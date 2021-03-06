package logica;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import java.io.FileInputStream;
import java.io.InputStream;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import logica.colecciones.Jugadores;
import logica.colecciones.Tormentas;
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
		partida = new Partida();
		Properties p = new Properties();
		InputStream input = null;
		
		try {
			input = getClass().getClassLoader().getResourceAsStream("resources/config.properties");			
			p.load(input);
		
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
	
	public JsonObject crearPartida(String nickName, String bando, int tamanioEscenarioX, int tamanioEscenarioY, int millasPesca, int tiempo, int cantPeces, int fishFished, Tormentas tormentas) throws Exception {
	
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
			
			Jugador jugador = new Jugador(1, nickName, bando, vehiculos, 0);
			
			Jugadores jugadores = partida.getJugadores();
			jugadores.put(jugador);
			
			partida.setJugadores(jugadores);
			partida.setTamanioEscenarioX(tamanioEscenarioX);
			partida.setTamanioEscenarioY(tamanioEscenarioY);
			partida.setMillasPesca(millasPesca);
			partida.setTiempo(tiempo);
			partida.setCantPeces(cantPeces);
			partida.setFishFished(fishFished);
			partida.setTormentas(tormentas);
			
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
			
			if(partida.getJugadores().jugadoresToList().get(0).getNick().equals("") || partida.getJugadores().jugadoresToList().get(1).getNick().equals("")) {
				Jugadores jugadores = partida.getJugadores();
				Jugador j1 = new Jugador(1, nickCreadorDePartida, bandoCreadorDePartida, jugadores.get(nickCreadorDePartida).getVehiculos(), 0);
				Jugador j2 = new Jugador(2, nickName, bandoCreadorDePartida == "PESQUERO" ? "PATRULLA" : "PESQUERO", jugadores.get("").getVehiculos(), 0);
				
				Jugadores jugadoresNuevos = new Jugadores();
				jugadoresNuevos.put(j1);
				jugadoresNuevos.put(j2);
				
				partida.setJugadores(jugadoresNuevos);
				
				json.addProperty("mensaje", "OK");
			} else {
				throw new Exception("La partida esta completa.");
			}
					
		} else {
			
			Vehiculo v1 = null, v2 = null;
			
			String bandoUnirse = "";
		
			if (bandoCreadorDePartida.equals("PESQUERO")) { 	
				
				bandoUnirse = "PATRULLA";
				
				v1 = new Patrulla("grande");
				v2 = new Patrulla("chica");	
				
			} else {
				
				bandoUnirse = "PESQUERO";
				
				v1 = new Pesquero("fabrica");
				v2 = new Pesquero("comun");
				
			}
			
			Vehiculos vehiculos = new Vehiculos();
			vehiculos.put(v1);	
			vehiculos.put(v2);	
			
			Jugador jugador2 = new Jugador(2, nickName, bandoUnirse, vehiculos, 0);			
			
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
			json.addProperty("cantPeces", partida.getCantPeces());
			json.addProperty("fishFished", partida.getFishFished());
			json.addProperty("time", partida.getTiempo());
			
			json.add("tormentas", partida.getTormentas().getTormentasToJson());
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
	
	public void setPosicionBarco(String nickJugador, int idVehiculo, float x, float y, float rotacion) {
		
		this.partida.getJugadores().get(nickJugador).getVehiculos().get(idVehiculo).setX(x);
		this.partida.getJugadores().get(nickJugador).getVehiculos().get(idVehiculo).setX(y);
		this.partida.getJugadores().get(nickJugador).getVehiculos().get(idVehiculo).setInitialRotation(rotacion);
	}
	
	public void setCombustiblePatrulla(String nickJugador, int idVehiculo, float combustibleActual) {
		
		if (this.partida.getJugadores().get(nickJugador).getVehiculos().get(idVehiculo) instanceof Patrulla){
			((Patrulla)(this.partida.getJugadores().get(nickJugador).getVehiculos().get(idVehiculo))).setCombustible(combustibleActual);
		}
		
	}
	
	public void setPescaPesquero(String nickJugador, int idVehiculo, int cantPesca) {
		
		if (this.partida.getJugadores().get(nickJugador).getVehiculos().get(idVehiculo) instanceof Pesquero){
			((Pesquero)(this.partida.getJugadores().get(nickJugador).getVehiculos().get(idVehiculo))).setCantPesca(cantPesca);
		}
		
	}
	
	public void setPescaPartida(int cantPescado) {
		
		this.partida.setFishFished(cantPescado);
		
	}
	
	// Guarda la instancia de la partida en la BD (Jugadores, Barcos y Partida)
	public void guardarPartida() throws SQLException {
		
		daoPartidas.borrarPartidas();
		daoBarcos.borrarBarcos();
		daoJugadores.borrarJugadores();
		
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
	
	public void cargarPartida(String nickCargar, String bandoCargar) throws Exception {
	
		this.nickCreadorDePartida = nickCargar;
		this.bandoCreadorDePartida = bandoCargar;
		
		Partida partida = daoPartidas.getPartida();
		Jugadores jugadoresAux = daoJugadores.getJugadores();
		
		Jugadores jugadores = new Jugadores();
		
		for(Jugador j : jugadoresAux.jugadoresToList()) {
			
			if (j.getBando().equals(bandoCargar)) {
				j.setBando(bandoCargar);
				j.setNick(nickCargar);
			} else {
				j.setBando("");
				j.setNick("");
			}
			
			j.setVehiculos(daoBarcos.getVehiculosJugador(j.getId()));
			jugadores.put(j);
		}
		
		partida.setJugadores(jugadores);
		
		this.partida = partida;
	}
	
}

