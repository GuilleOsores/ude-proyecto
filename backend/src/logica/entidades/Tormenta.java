package logica.entidades;

public class Tormenta {

	int tormentaInicio;
	int tormentaDuracion;
	String sprite;
	public Tormenta(int tormentaInicio, int tormentaDuracion, String sprite) {
		super();
		this.tormentaInicio = tormentaInicio;
		this.tormentaDuracion = tormentaDuracion;
		this.sprite = sprite;
	}
	
	public Tormenta() {}
	
	public int getTormentaInicio() {
		return tormentaInicio;
	}
	public void setTormentaInicio(int tormentaInicio) {
		this.tormentaInicio = tormentaInicio;
	}
	public int getTormentaDuracion() {
		return tormentaDuracion;
	}
	public void setTormentaDuracion(int tormentaDuracion) {
		this.tormentaDuracion = tormentaDuracion;
	}
	public String getSprite() {
		return sprite;
	}
	public void setSprite(String sprite) {
		this.sprite = sprite;
	}
	
	
	
}
