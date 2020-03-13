package logica.colecciones;

import java.util.HashMap;

import com.google.gson.JsonArray;

import logica.entidades.Vehiculo;

public class Vehiculos {
	
	private HashMap<Integer, Vehiculo> diccionario;
	
	public Vehiculos() {
		diccionario = new HashMap<Integer, Vehiculo>();
	}
	
	public void put(Vehiculo v) {
		diccionario.put(v.getId(), v);
	}
	
	public Vehiculo get(int id) {
		return diccionario.get(id);
	}
	
	public JsonArray getVehiculosToJson() {	
		JsonArray jsonArray = new JsonArray();
		
		//implementar
		
		return jsonArray;
	}
	
}
