package logica.entidades;

public abstract class Vehiculo {

	private int id;
	private float x;
	private float y;
	private float velocidad;
	private float velocidadAngular;
	private String spriteVivo;
	
	public Vehiculo() {
		
	}
	
	public Vehiculo(int id, float x, float y, float velocidad, float velocidadAngular, String spriteVivo) {
		super();
		this.id = id;
		this.x = x;
		this.y = y;
		this.velocidad = velocidad;
		this.velocidadAngular = velocidadAngular;
		this.spriteVivo = spriteVivo;
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
		
}
