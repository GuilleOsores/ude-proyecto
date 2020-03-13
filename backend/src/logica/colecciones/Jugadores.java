package logica.colecciones;

import java.util.HashMap;

import logica.entidades.Jugador;

public class Jugadores {
	
	private HashMap<String, Jugador> diccionario;
	
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

}
