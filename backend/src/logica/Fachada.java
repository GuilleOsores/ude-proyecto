package logica;

import com.google.gson.JsonObject;
import com.google.gson.Gson;

import logica.colecciones.Jugadores;
import logica.colecciones.Partidas;
import logica.colecciones.Vehiculos;
import logica.entidades.Jugador;
import logica.entidades.Partida;
import logica.entidades.Patrulla;
import logica.entidades.Pesquero;
import logica.entidades.Vehiculo;

public class Fachada {
	
	private Partida partida;
	private static Fachada fachada;	
	private String bandoCreadorDePartida;
	private String nickCreadorDePartida;
	
	private Fachada() {
		partida = new Partida();
	}
	
	
	public static Fachada getInstanceFachada() {
		if (fachada == null) {
			fachada = new Fachada();
		}
		return fachada;	
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
				
			}else if (bando.equals("PESQUERO")) {
				
				v1 = new Pesquero("fabrica");
				v2 = new Pesquero("comun");
				
			}
			
			Vehiculos vehiculos = new Vehiculos();
			vehiculos.put(v1);	
			vehiculos.put(v2);	
			
			Jugador jugador = new Jugador(nickName, vehiculos, 0);
			
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
			
		}else if(nickCreadorDePartida.equals(nickName)){
			
			throw new Exception("El nombre de jugador ya existe.");
			
		}else if(partida.getJugadores().cantidadDeJugadores() == 2){
			
			throw new Exception("La partida está completa.");
			
		}else {
			
			Vehiculo v1 = null, v2 = null;
			
		
			if (bandoCreadorDePartida.equals("PESQUERO")) { 	
				
				v1 = new Patrulla("grande");
				v2 = new Patrulla("chica");	
				
			}else {
				
				v1 = new Pesquero("fabrica");
				v2 = new Pesquero("comun");
				
			}
			
			Vehiculos vehiculos = new Vehiculos();
			vehiculos.put(v1);	
			vehiculos.put(v2);	
			
			Jugador jugador2 = new Jugador(nickName, vehiculos, 0);			
			
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
	
}
