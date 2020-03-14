package logica.entidades;

import java.io.FileInputStream;
import java.util.Properties;

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
	
	// Constructor para usar cuando se recupera de la BD
	public Partida(int id, int tiempo, int pecesRestantes) {
		
		try {
			Properties p = new Properties();
			p.load(new FileInputStream("config/config.properties"));	
			
			this.id = id;
			this.jugadores = new Jugadores();
			this.tamanioEscenarioX = Integer.parseInt(p.getProperty("width"));
			this.tamanioEscenarioY = Integer.parseInt(p.getProperty("height"));
			this.tiempo = tiempo;
			this.cantPeces = Integer.parseInt(p.getProperty("cantPeces"));
			this.fishFished = fishFished;
		
		} catch (Exception e) {
			System.out.println("Exception creando partida");
			e.printStackTrace();
		}		
		
	}
	
	//ya no lo usamos.
	public Partida(int id, Jugadores jugadores, int tamanioEscenarioX, int tamanioEscenarioY, int millasPesca, int tiempo, int cantPeces, int fishFished) {
		this.id = id;
		this.jugadores = jugadores;
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
