package logica;

import java.util.HashMap;

public class VehiculosAuxiliares {

	private HashMap<Integer, VehiculoAuxiliar> diccionario;
	
	public VehiculosAuxiliares() {
		this.diccionario = new HashMap<Integer, VehiculoAuxiliar>();
	}
	
	public boolean isEmpty() {
		return diccionario.isEmpty();
	}
	
	public void put(VehiculoAuxiliar va) {
		diccionario.put(va.getId(), va);
	}
	
	public VehiculoAuxiliar get(int id) {
		return diccionario.get(id);
	}
	
}
