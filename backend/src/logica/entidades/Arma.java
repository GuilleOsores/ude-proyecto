package logica.entidades;

public class Arma {

	private int id;
	private float alcance;
	private float danio;
	private float cadencia;
	private String sonido;
	private String animacion;
	
	private float velocidad;
	private String tipo;
	private float escala; 
	
	private float ttl;
	private float velocidadAngular;
	private String puedeNeutralizar;
	
	public Arma() {
		
	}
	
	public Arma(int id, float alcance, float danio, float cadencia, String sonido, String animacion, float velocidad, String tipo, float escala, float ttl, float velocidadAngular, String puedeNeutralizar) {
		super();
		this.id = id;
		this.alcance = alcance;
		this.danio = danio;
		this.cadencia = cadencia;
		this.sonido = sonido;
		this.animacion = animacion;
		
		this.setVelocidad(velocidad);
		this.setTipo(tipo);
		this.setEscala(escala);
		
		this.ttl = ttl;
		this.velocidadAngular = velocidadAngular;
		this.puedeNeutralizar = puedeNeutralizar;
	}

	public float getAlcance() {
		return alcance;
	}
	
	public void setAlcance(float alcance) {
		this.alcance = alcance;
	}
	
	public float getDanio() {
		return danio;
	}
	
	public void setDanio(float danio) {
		this.danio = danio;
	}
	
	public float getCadencia() {
		return cadencia;
	}
	
	public void setCadencia(float cadencia) {
		this.cadencia = cadencia;
	}
	
	public String getSonido() {
		return sonido;
	}
	
	public void setSonido(String sonido) {
		this.sonido = sonido;
	}
	
	public String getAnimacion() {
		return animacion;
	}
	
	public void setAnimacion(String animacion) {
		this.animacion = animacion;
	}

	public float getVelocidad() {
		return velocidad;
	}

	public void setVelocidad(float velocidad) {
		this.velocidad = velocidad;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public float getEscala() {
		return escala;
	}

	public void setEscala(float escala) {
		this.escala = escala;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public float getTtl() {
		return ttl;
	}

	public void setTtl(float ttl) {
		this.ttl = ttl;
	}

	public float getVelocidadAngular() {
		return velocidadAngular;
	}

	public void setVelocidadAngular(float velocidadAngular) {
		this.velocidadAngular = velocidadAngular;
	}

	public String getPuedeNeutralizar() {
		return puedeNeutralizar;
	}

	public void setPuedeNeutralizar(String puedeNeutralizar) {
		this.puedeNeutralizar = puedeNeutralizar;
	}
		
}
