package logica.colecciones;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import logica.entidades.Jugador;

public class Jugadores {
	
	private Map<String, Jugador> diccionario;
	
	public Jugadores() {
		diccionario = new HashMap<String, Jugador>();
	}
	
	public void put(Jugador j) {
		diccionario.put(j.getNick(), j);
	}

	public Jugador get(String nick) {
		return diccionario.get(nick);
	}
	
	public boolean isEmpty(){
		return diccionario.isEmpty();
	}
	
	public int cantidadDeJugadores(){
		return diccionario.size();
	}
	
	public JsonArray getJugadoresToJson() {
		
		JsonArray jsonArray = new JsonArray();


		for (Entry<String, Jugador> jugador : diccionario.entrySet()) {
			JsonObject json = new JsonObject();
			
			json.addProperty("nick", this.get(jugador.getKey()).getNick());
			json.add("vehiculos", this.get(jugador.getKey()).getVehiculos().getVehiculosToJson());
			
			jsonArray.add(json);

		}
		
		return jsonArray;
	}
	
	// Funcion auxiliar para convertir el map en lista
	public List<Jugador> jugadoresToList() {
		ArrayList<Jugador> lista = new ArrayList<Jugador>();
		
		diccionario.forEach((k, v) -> lista.add(v));
		
		return lista;
	}
}

