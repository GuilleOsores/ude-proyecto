package logica.colecciones;

import java.util.HashMap;

import logica.Vehiculo;

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
	
}
