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
		
		//HARDCODEADO PARA TEST
		if (tipoPatrulla.equals("grande")) {
			this.setId(1); 
			this.setX(150); 
			this.setY(2050);
			this.setVelocidad((float)0.01); 
			this.setVelocidadAngular(1);
			this.setSpriteVivo("policia1"); 
			this.setSpritesLaterales("{\"l\": \"policia1\",\"r\": \"policia1\",\"u\": \"policia1\",\"d\": \"policia1\"}");
			this.setInitialRotation(-90);

			combustible = 100000;
			gastoCombustible = 1;
			tipo = "patrulla";
					
			Arma arma1 = new Arma(1, (float)800, (float)50, (float)2, "canion", "bala_canion", (float)0.03, "disparo", (float)1);
			Arma arma2 = new Arma(2, (float)400, (float)25, (float)0.5, "ametralladora", "bala", (float)0.03, "disparo", (float)0.4);
						
			Armas armas = new Armas();
			armas.push(arma1);
			armas.push(arma2);
			
			//arma3 -> crear vehiculo de de apoyo
			//arma4 -> crear helicoptero
			
			this.setArmas(armas);
			
		}else if(tipoPatrulla.equals("chica")) {

			this.setId(2); 
			this.setX(750); 
			this.setY(2050);
			this.setVelocidad((float)0.01); 
			this.setVelocidadAngular(1);
			this.setSpriteVivo("policia2"); 
			this.setSpritesLaterales("{\"l\": \"policia2\",\"r\": \"policia2\",\"u\": \"policia2\",\"d\": \"policia2\"}");
			this.setInitialRotation(-90);

			combustible = 100000;
			gastoCombustible = 1;
			tipo = "patrulla";
			
			Arma arma2 = new Arma(2, (float)400, (float)25, (float)0.5, "ametralladora", "bala", (float)0.03, "disparo", (float)0.4);
			
			Armas armas = new Armas();
			armas.push(arma2);
			
			this.setArmas(armas);
		}
		//FIN HARDCODE
	}
	
	public Patrulla(float combustible) {
		super();
		this.combustible = combustible;
	}

	public Patrulla(int id, int x, int y, float velocidad, float velocidadAngular, String spriteVivo, String spritesLaterales, float combustible, Armas armas, float initialRotation, String tipo, String tipoPatrulla, int gastoCombustible) {
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
