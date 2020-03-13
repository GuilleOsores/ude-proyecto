package logica.entidades;

public class Pesquero extends Vehiculo {
	
	private float vida;
	private String spriteMuerto;
	private String animacionExplosion;
	private float multiplicadorDePesca;
	
	
	public Pesquero() {
		
	}

	public Pesquero(String tipoPatrulla) {
		//leer de BD o properties
		//crear una patrulla de tipo tipoPatrulla (fabrica/comun)
	}
	
	public Pesquero(int id, float x, float y, float velocidad, float velocidadAngular, String spriteVivo, String spritesLaterales, float vida, String spriteMuerto, String animacionExplosion, float multiplicadorDePesca) {
		super(id, x, y, velocidad, velocidadAngular, spriteVivo, spritesLaterales);
		this.vida = vida;
		this.spriteMuerto = spriteMuerto;
		this.animacionExplosion = animacionExplosion;
		this.multiplicadorDePesca = multiplicadorDePesca;

	}

	public float getVida() {
		return vida;
	}
	
	public void setVida(float vida) {
		this.vida = vida;
	}
	
	public String getSpriteMuerto() {
		return spriteMuerto;
	}
	
	public void setSpriteMuerto(String spriteMuerto) {
		this.spriteMuerto = spriteMuerto;
	}
	
	public String getAnimacionExplosion() {
		return animacionExplosion;
	}
	
	public void setAnimacionExplosion(String animacionExplosion) {
		this.animacionExplosion = animacionExplosion;
	}
	
	public float getMultiplicadorDePesca() {
		return multiplicadorDePesca;
	}
	
	public void setMultiplicadorDePesca(float multiplicadorDePesca) {
		this.multiplicadorDePesca = multiplicadorDePesca;
	}
		
}
