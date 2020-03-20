package logica.entidades;

import logica.colecciones.Vehiculos;

public class Jugador {
	
	int id;
	private String nick;
	private String bando;
	private Vehiculos vehiculos;
	// private WebsocketSession session;
	private int cantidadPescados;
	
	public Jugador() {
		vehiculos = new Vehiculos();
	}
	
	public Jugador(int id, String nick, String bando, Vehiculos vehiculos, int cantidadPescados) {
		this.id = id; 
		this.nick = nick;
		this.bando = bando;
		this.vehiculos = vehiculos;
		this.cantidadPescados = cantidadPescados;
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNick() {
		return nick;
	}

	public void setNick(String nick) {
		this.nick = nick;
	}

	public String getBando() {
		return bando;
	}

	public void setBando(String bando) {
		this.bando = bando;
	}

	public Vehiculos getVehiculos() {
		return vehiculos;
	}

	public void setVehiculos(Vehiculos vehiculos) {
		this.vehiculos = vehiculos;
	}

	public int getCantidadPescados() {
		return cantidadPescados;
	}

	public void setCantidadPescados(int cantidadPescados) {
		this.cantidadPescados = cantidadPescados;
	}
	
	@Override
	public String toString() {
		return String.valueOf(id) + ", " + nick;
	}
	
}
