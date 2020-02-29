package logica;

import logica.colecciones.Partidas;

public class Fachada {

	private Partidas partidas;
	
	public Fachada() {
		partidas = new Partidas();
	}
	
	public Fachada(Partidas partidas) {
		this.partidas = partidas;
	}
	
	// public void Pescar(int)
	
}
