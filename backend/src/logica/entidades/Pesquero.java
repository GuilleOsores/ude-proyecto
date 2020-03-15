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

	public Pesquero(String tipoPesquero) {
		//leer de BD o properties
		//crear una patrulla de tipo tipoPatrulla (fabrica/comun)
		
		//HARDCODEADO PARA TEST
		if (tipoPesquero.equals("fabrica")) {
			this.setId(1); 
			this.setX(150); 
			this.setY(150);
			this.setVelocidad((float)0.01); 
			this.setVelocidadAngular(1);
			this.setSpriteVivo("pesquero1"); 
			this.setSpritesLaterales("{\"l\": \"pesquero1\",\"r\": \"pesquero1\",\"u\": \"pesquero1\",\"d\": \"pesquero1\"}");
			this.setInitialRotation(90);

			vida = 100;
			horaPesca = "19:30";
			cantPesca = 0;
			tiempoPesca = -2;
			tipo = "pesquero";
			tipoPesquero = "fabrica";
			restoPesca = 1000;
		}else if(tipoPesquero.equals("comun")) {

			this.setId(2); 
			this.setX(750); 
			this.setY(150);
			this.setVelocidad((float)0.01); 
			this.setVelocidadAngular(1);
			this.setSpriteVivo("pesquero2"); 
			this.setSpritesLaterales("{\"l\": \"pesquero2\",\"r\": \"pesquero2\",\"u\": \"pesquero2\",\"d\": \"pesquero2\"}");
			this.setInitialRotation(90);

			vida = 100;
			horaPesca = "19:30";
			cantPesca = 0;
			tiempoPesca = -2;
			tipo = "pesquero";
			tipoPesquero = "comun";
			restoPesca = 1000;
		}
		//FIN HARDCODE
	}
	
	public Pesquero(int id, int x, int y, float velocidad, float velocidadAngular, String spriteVivo, String spritesLaterales, float vida, String spriteMuerto, String animacionExplosion, float multiplicadorDePesca, float initialRotation, String horaPesca, int cantPesca, int tiempoPesca, String tipo, String tipoPesquero, int restoPesca) {
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
