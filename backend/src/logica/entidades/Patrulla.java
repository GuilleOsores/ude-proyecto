package logica.entidades;

import logica.colecciones.Armas;

import java.util.Properties;
import java.io.IOException;
import java.io.InputStream;

public class Patrulla extends Vehiculo {
	
	private float combustible;
	private Armas armas;
	
	private String tipoPatrulla;	
	private String tipo;
	private int gastoCombustible;
	
	
	public Patrulla(){
				
	}
	
	public Patrulla(String tipoPatrulla){
		//leer de BD o properties
		//crear una patrulla de tipo tipoPatrulla (grande/chica)		
	}
	
	public Patrulla(float combustible) {
		super();
		this.combustible = combustible;
	}

	public Patrulla(int id, float x, float y, float velocidad, float velocidadAngular, String spriteVivo, String spritesLaterales, float combustible, Armas armas, float initialRotation, String tipo, String tipoPatrulla, int gastoCombustible) {
		super(id, x, y, velocidad, velocidadAngular, spriteVivo, spritesLaterales, initialRotation);
		this.combustible = combustible;
		this.setArmas(armas);
		
		this.setTipo(tipo);
		this.setTipo(tipoPatrulla);
		this.setGastoCombustible(gastoCombustible);
		
	}

	public float getCombustible() {
		return combustible;
	}

	public void setCombustible(float combustible) {
		this.combustible = combustible;
	}

	public Armas getArmas() {
		return armas;
	}

	public void setArmas(Armas armas) {
		this.armas = armas;
	}

	public String getTipoPatrulla() {
		return tipoPatrulla;
	}

	public void setTipoPatrulla(String tipoPatrulla) {
		this.tipoPatrulla = tipoPatrulla;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public int getGastoCombustible() {
		return gastoCombustible;
	}

	public void setGastoCombustible(int gastoCombustible) {
		this.gastoCombustible = gastoCombustible;
	}
	
}
