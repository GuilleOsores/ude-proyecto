package logica.colecciones;

import java.util.List;

import logica.Arma;

public class Armas {
	
	private List<Arma> armas;

	public Armas() {
		
	}
	
	public void push(Arma arma) {
		armas.add(arma);
	}
	
}
