package logica.entidades;

import logica.colecciones.Vehiculos;

public class Jugador {
	
	private String nick;
	private Vehiculos vehiculos;
	// private WebsocketSession session;
	private int cantidadPescados;
	
	public Jugador() {
		vehiculos = new Vehiculos();
	}
	
	public Jugador(String nick, Vehiculos vehiculos, int cantidadPescados) {
		this.nick = nick;
		this.vehiculos = vehiculos;
		this.cantidadPescados = cantidadPescados;
	}

	public String getNick() {
		return nick;
	}

	public void setNick(String nick) {
		this.nick = nick;
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
	
}
