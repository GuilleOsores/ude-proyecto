package logica.colecciones;

import java.util.HashMap;

import logica.entidades.Partida;

public class Partidas {

	private HashMap<Integer, Partida> diccionario;
	
	public Partidas() {
		diccionario = new HashMap<Integer, Partida>();
	}
	
	public void put(Partida p) {
		diccionario.put(p.getId(), p);
	}
	
	public Partida get(int id) {
		return diccionario.get(id);
	}
	
	public void remove(int id) {
		diccionario.remove(id);
	}
	
}
