package logica;

import java.util.List;

public class Armas {
	
	private List<Arma> armas;

	public Armas() {
		
	}
	
	public void push(Arma arma) {
		armas.add(arma);
	}
	
}
