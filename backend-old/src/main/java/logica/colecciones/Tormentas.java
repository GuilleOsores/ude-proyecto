package logica.colecciones;

import java.util.List;

import logica.entidades.Tormenta;

public class Tormentas {

	private List<Tormenta> tormentas;
	
	public Tormentas() {
		
	}
	
	public void add(Tormenta t) {
		tormentas.add(t);
	}
	
}