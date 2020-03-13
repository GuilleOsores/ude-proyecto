package logica.entidades;

import logica.colecciones.Armas;

import java.util.Properties;
import java.io.IOException;
import java.io.InputStream;

public class Patrulla extends Vehiculo {
	
	private float combustible;
	private Armas armas;
	
	private String tipoPatrulla;
	
	
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

	public Patrulla(int id, float x, float y, float velocidad, float velocidadAngular, String spriteVivo, float combustible, Armas armas) {
		super(id, x, y, velocidad, velocidadAngular, spriteVivo);
		this.combustible = combustible;
		this.setArmas(armas);
		
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
	
}
