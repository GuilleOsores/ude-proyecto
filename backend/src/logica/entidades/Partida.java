package logica.entidades;

import logica.colecciones.Jugadores;

public class Partida {

	private int id;
	private Jugadores jugadores;
	// private Tormentas tormentas;
	private int tamanioEscenarioX;
	private int tamanioEscenarioY;
	private int millasPesca;
	private int tiempo;
	private int cantPeces;
	private int fishFished;
	
	public Partida() {
		jugadores = new Jugadores();
	}
	
	//ya no lo usamos.
	public Partida(int id, Jugadores jugadores /*, Tormentas tormentas*/,int tamanioEscenarioX, int tamanioEscenarioY, int millasPesca, int tiempo, int cantPesca, int fishFished) {
		this.id = id;
		// this.tormentas = tormentas;
		this.tamanioEscenarioX = tamanioEscenarioX;
		this.tamanioEscenarioY = tamanioEscenarioY;
		this.millasPesca = millasPesca;
		this.tiempo = tiempo;
		this.cantPeces = cantPeces;
		this.fishFished = fishFished;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Jugadores getJugadores() {
		return jugadores;
	}

	public void setJugadores(Jugadores jugadores) {
		this.jugadores = jugadores;
	}

	public int getTamanioEscenarioX() {
		return tamanioEscenarioX;
	}

	public void setTamanioEscenarioX(int tamanioEscenarioX) {
		this.tamanioEscenarioX = tamanioEscenarioX;
	}

	public int getTamanioEscenarioY() {
		return tamanioEscenarioY;
	}

	public void setTamanioEscenarioY(int tamanioEscenarioY) {
		this.tamanioEscenarioY = tamanioEscenarioY;
	}

	public int getMillasPesca() {
		return millasPesca;
	}

	public void setMillasPesca(int millasPesca) {
		this.millasPesca = millasPesca;
	}

	public int getTiempo() {
		return tiempo;
	}

	public void setTiempo(int tiempo) {
		this.tiempo = tiempo;
	}

	public int getCantPeces() {
		return cantPeces;
	}

	public void setCantPeces(int cantPeces) {
		this.cantPeces = cantPeces;
	}

	public int getFishFished() {
		return fishFished;
	}

	public void setFishFished(int fishFished) {
		this.fishFished = fishFished;
	}
	
	
	
}
