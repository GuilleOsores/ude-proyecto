package logica;

import logica.colecciones.Partidas;
import logica.entidades.Partida;

public class Fachada {

	private Partidas partidas;
	
	public Fachada() {
		partidas = new Partidas();
	}
	
	public Fachada(Partidas partidas) {
		this.partidas = partidas;
	}
	
	public Partida crearPartida(String idSesion) {
		
		return null;
	}
	
	public Partida unirsePartida(String idSesion) {
		
		return null;
	}
	
	// public void Pescar(int)
	
}
