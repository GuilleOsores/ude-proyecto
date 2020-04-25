package logica.entidades;

import java.io.FileInputStream;
import java.io.InputStream;
import java.util.Properties;

import logica.colecciones.Jugadores;
import logica.colecciones.Tormentas;

public class Partida {

	private int id;
	private Jugadores jugadores;
	private Tormentas tormentas;
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
			InputStream input = null;
			
			input = getClass().getClassLoader().getResourceAsStream("resources/config.properties");			
			p.load(input);	
			
			this.id = id;
			this.jugadores = new Jugadores();
			this.tamanioEscenarioX = Integer.parseInt(p.getProperty("width"));
			this.tamanioEscenarioY = Integer.parseInt(p.getProperty("height"));
			this.millasPesca = Integer.parseInt(p.getProperty("millaLimite"));
			this.tiempo = tiempo;
			this.cantPeces = Integer.parseInt(p.getProperty("cantPeces"));
			this.fishFished = this.cantPeces - pecesRestantes;
		
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

	public Tormentas getTormentas() {
		return tormentas;
	}

	public void setTormentas(Tormentas tormentas) {
		this.tormentas = tormentas;
	}
	
	
	
}
