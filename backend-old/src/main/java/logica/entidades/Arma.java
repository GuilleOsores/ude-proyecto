package logica.entidades;

public class Arma {

	private float alcance;
	private float danio;
	private float cadencia;
	private String sonido;
	private String animacion;
	
	public Arma() {
		
	}
	
	public Arma(float alcance, float danio, float cadencia, String sonido, String animacion) {
		super();
		this.alcance = alcance;
		this.danio = danio;
		this.cadencia = cadencia;
		this.sonido = sonido;
		this.animacion = animacion;
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
		
}
