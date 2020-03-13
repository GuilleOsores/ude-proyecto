package logica;

import com.google.gson.JsonObject;

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
	
	private Fachada() {
		partida = new Partida();
	}
	
	
	public static Fachada getInstanceFachada() {
		if (fachada == null) {
			fachada = new Fachada();
		}
		return fachada;	
	}
	
	public JsonObject crearPartida(String nickName, String bando, int tamanioEscenarioX, int tamanioEscenarioY, int millasPesca, int tiempo, int cantPeces, int fishFished) {
		JsonObject json = new JsonObject();
		String mensaje;
		
		if (!partida.getJugadores().isEmpty()) {
			mensaje = "Ya existe una partida en curso.";			
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
			
			mensaje = "OK";
		}

		json.addProperty("mensaje", mensaje);				
		return json;
	}

	public JsonObject unirsePartida(String nickName) {
		JsonObject json = new JsonObject();
		String mensaje;
		
		if (partida.getJugadores().isEmpty()) {
			mensaje = "No hay una partida creada.";			
		}else {
			
			Vehiculo v1 = null, v2 = null;
			
		
			if (bandoCreadorDePartida == "PESQUERO") { 	
				
				v1 = new Patrulla("grande");
				v2 = new Patrulla("chica");	
				
			}else {
				
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
				
			mensaje = "OK";
		}
		
		json.addProperty("mensaje", mensaje);
		return json;
	}
	
	public JsonObject getPartida() {
		JsonObject json = new JsonObject();
		String mensaje = null;
		
		if (partida.getJugadores().isEmpty()) {
			mensaje = "No hay una partida creada.";			
		}else {
			mensaje = "OK";
			
			//devolver partida to json, falta armarlo.
	
		}
		
		json.addProperty("mensaje", mensaje);
		return json;
	}
	
}
