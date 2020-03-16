package logica.entidades;

import com.google.gson.JsonParser;
import com.google.gson.JsonElement;

public abstract class Vehiculo {

	private int id;
	private float x;
	private float y;
	private String tipo;
	private float velocidad;
	private float velocidadAngular;
	private String spriteVivo;
	private String spritesLaterales;
	private float initialRotation;
	
	public Vehiculo() {
		
	}
	
	public Vehiculo(int id, float x, float y, String tipo, float velocidad, float velocidadAngular, String spriteVivo, String spritesLaterales, float initialRotation) {
		this.id = id;
		this.x = x;
		this.y = y;
		this.tipo = tipo;
		this.velocidad = velocidad;
		this.velocidadAngular = velocidadAngular;
		this.spriteVivo = spriteVivo;
		this.spritesLaterales = spritesLaterales;
		this.initialRotation = initialRotation;
	}

	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public float getX() {
		return x;
	}
	
	public void setX(float x) {
		this.x = x;
	}
	
	public float getY() {
		return y;
	}
	
	public void setY(float y) {
		this.y = y;
	}
	
	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public float getVelocidad() {
		return velocidad;
	}
	
	public void setVelocidad(float velocidad) {
		this.velocidad = velocidad;
	}
	
	public float getVelocidadAngular() {
		return velocidadAngular;
	}
	
	public void setVelocidadAngular(float velocidadAngular) {
		this.velocidadAngular = velocidadAngular;
	}
	
	public String getSpriteVivo() {
		return spriteVivo;
	}
	
	public void setSpriteVivo(String spriteVivo) {
		this.spriteVivo = spriteVivo;
	}

	public JsonElement getSpritesLaterales() {
		return JsonParser.parseString(spritesLaterales);
	}

	public void setSpritesLaterales(String spritesLaterales) {
		this.spritesLaterales = spritesLaterales;
	}

	public float getInitialRotation() {
		return initialRotation;
	}

	public void setInitialRotation(float initialRotation) {
		this.initialRotation = initialRotation;
	}	
		
}
