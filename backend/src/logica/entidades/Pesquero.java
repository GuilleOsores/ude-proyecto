package logica.entidades;

public class Pesquero extends Vehiculo {
	
	private float vida;
	private String spriteMuerto; //no lo estamos usando
	private String animacionExplosion; //no lo estamos usando
	private float multiplicadorDePesca; //no lo estamos usando
	
	private String horaPesca;
	private int cantPesca;
	private int tiempoPesca;
	private String tipo;
	private String tipoPesquero;
	private int restoPesca;
	
	
	public Pesquero() {
		
	}

	public Pesquero(String tipoPatrulla) {
		//leer de BD o properties
		//crear una patrulla de tipo tipoPatrulla (fabrica/comun)
	}
	
	public Pesquero(int id, float x, float y, float velocidad, float velocidadAngular, String spriteVivo, String spritesLaterales, float vida, String spriteMuerto, String animacionExplosion, float multiplicadorDePesca, float initialRotation, String horaPesca, int cantPesca, int tiempoPesca, String tipo, String tipoPesquero, int restoPesca) {
		super(id, x, y, velocidad, velocidadAngular, spriteVivo, spritesLaterales, initialRotation);
		this.vida = vida;
		this.spriteMuerto = spriteMuerto;
		this.animacionExplosion = animacionExplosion;
		this.multiplicadorDePesca = multiplicadorDePesca;
		
		this.setHoraPesca(horaPesca);
		this.setCantPesca(cantPesca);
		this.setTiempoPesca(tiempoPesca);
		this.setTipo(tipo);
		this.setTipoPesquero(tipoPesquero);
		this.setRestoPesca(restoPesca);		

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

	public String getHoraPesca() {
		return horaPesca;
	}

	public void setHoraPesca(String horaPesca) {
		this.horaPesca = horaPesca;
	}

	public int getCantPesca() {
		return cantPesca;
	}

	public void setCantPesca(int cantPesca) {
		this.cantPesca = cantPesca;
	}

	public int getTiempoPesca() {
		return tiempoPesca;
	}

	public void setTiempoPesca(int tiempoPesca) {
		this.tiempoPesca = tiempoPesca;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public String getTipoPesquero() {
		return tipoPesquero;
	}

	public void setTipoPesquero(String tipoPesquero) {
		this.tipoPesquero = tipoPesquero;
	}

	public int getRestoPesca() {
		return restoPesca;
	}

	public void setRestoPesca(int restoPesca) {
		this.restoPesca = restoPesca;
	}
		
}
