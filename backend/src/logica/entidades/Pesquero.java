package logica.entidades;

import java.io.FileInputStream;
import java.io.InputStream;
import java.util.Properties;

public class Pesquero extends Vehiculo {
	
	private float vida;
	private String spriteMuerto; //no lo estamos usando
	private String animacionExplosion; //no lo estamos usando
	private float multiplicadorDePesca; //no lo estamos usando
	
	private String horaPesca;
	private int cantPesca;
	private int tiempoPesca;
	private String tipoPesquero;
	private int restoPesca;
	
	public Pesquero() {
		
	}
	
	// Constructor para usar cuando se recupera de la BD
	public Pesquero(int id, float x, float y, float vida, String tipo, String tipoPesquero, int cantPesca, float initialRotation) {
		try {
			Properties p = new Properties();
			InputStream input = null;
			
			input = getClass().getClassLoader().getResourceAsStream("resources/config.properties");			
			p.load(input);
			
			String prefijoProperties = "";
			
			if (tipoPesquero.equals("fabrica")) {
				
				prefijoProperties = "pes1_";
				this.setSpritesLaterales("{\"l\": \"pesquero1\",\"r\": \"pesquero1\",\"u\": \"pesquero1\",\"d\": \"pesquero1\"}");
				
			} else if (tipoPesquero.equals("comun")) {

				prefijoProperties = "pes2_";
				this.setSpritesLaterales("{\"l\": \"pesquero2\",\"r\": \"pesquero2\",\"u\": \"pesquero2\",\"d\": \"pesquero2\"}");			
			
			}
			
			this.setId(id);
			this.setX(x);
			this.setY(y);
			this.setTipo(p.getProperty(prefijoProperties + "tipo"));
			this.setVelocidad(Float.parseFloat(p.getProperty(prefijoProperties + "velocity"))); 
			this.setVelocidadAngular(Integer.parseInt(p.getProperty(prefijoProperties + "angularVelocity")));
			this.setSpriteVivo(p.getProperty(prefijoProperties + "sprite"));
			this.setInitialRotation(initialRotation);

			this.vida = vida;
			this.horaPesca = p.getProperty(prefijoProperties + "horaPesca");
			this.cantPesca = cantPesca;
			this.tiempoPesca = Integer.parseInt(p.getProperty(prefijoProperties + "tiempoPesca"));
			this.tipoPesquero = tipoPesquero;
			this.restoPesca = Integer.parseInt(p.getProperty(prefijoProperties + "restoPesca"));
			
		} catch (Exception e) {
			System.out.println("Exception creando pesquero (BD)");
			e.printStackTrace();
		}
	}

	// Constructor para usar cuando se crea partida
	public Pesquero(String tipoPesquero) {
				
		try {
			Properties p = new Properties();
			InputStream input = null;
			
			input = getClass().getClassLoader().getResourceAsStream("resources/config.properties");			
			p.load(input);
			
			String prefijoProperties = "";
			
			if (tipoPesquero.equals("fabrica")) {
				
				prefijoProperties = "pes1_";
				this.setSpritesLaterales("{\"l\": \"pesquero1\",\"r\": \"pesquero1\",\"u\": \"pesquero1\",\"d\": \"pesquero1\"}");
				
			} else if (tipoPesquero.equals("comun")) {

				prefijoProperties = "pes2_";
				this.setSpritesLaterales("{\"l\": \"pesquero2\",\"r\": \"pesquero2\",\"u\": \"pesquero2\",\"d\": \"pesquero2\"}");			
			
			}
			
			this.setId(Integer.parseInt(p.getProperty(prefijoProperties + "id"))); 
			this.setX(Integer.parseInt(p.getProperty(prefijoProperties + "x")));
			this.setY(Integer.parseInt(p.getProperty(prefijoProperties + "y")));
			this.setVelocidad(Float.parseFloat(p.getProperty(prefijoProperties + "initialRotation"))); 
			this.setVelocidad(Float.parseFloat(p.getProperty(prefijoProperties + "velocity")));
			this.setVelocidadAngular(Integer.parseInt(p.getProperty(prefijoProperties + "angularVelocity")));
			this.setSpriteVivo(p.getProperty(prefijoProperties + "sprite"));
			this.setInitialRotation(Integer.parseInt(p.getProperty(prefijoProperties + "initialRotation")));

			this.vida = Integer.parseInt(p.getProperty(prefijoProperties + "vida"));
			this.horaPesca = p.getProperty(prefijoProperties + "horaPesca");
			this.cantPesca = Integer.parseInt(p.getProperty(prefijoProperties + "cantPesca"));
			this.tiempoPesca = Integer.parseInt(p.getProperty(prefijoProperties + "tiempoPesca"));
			this.setTipo(p.getProperty(prefijoProperties + "tipo"));
			this.tipoPesquero = tipoPesquero;
			this.restoPesca = Integer.parseInt(p.getProperty(prefijoProperties + "restoPesca"));
			
		} catch (Exception e) {
			System.out.println("Excepcion creando pesquero (Properties)");
			e.printStackTrace();
		}
	}
	
	public Pesquero(int id, float x, float y, float velocidad, float velocidadAngular, String spriteVivo, String spritesLaterales, float vida, String spriteMuerto, String animacionExplosion, float multiplicadorDePesca, float initialRotation, String horaPesca, int cantPesca, int tiempoPesca, String tipo, String tipoPesquero, int restoPesca) {
		super(id, x, y, tipo, velocidad, velocidadAngular, spriteVivo, spritesLaterales, initialRotation);
		this.vida = vida;
		this.spriteMuerto = spriteMuerto;
		this.animacionExplosion = animacionExplosion;
		this.multiplicadorDePesca = multiplicadorDePesca;
		
		this.setHoraPesca(horaPesca);
		this.setCantPesca(cantPesca);
		this.setTiempoPesca(tiempoPesca);
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
	
	@Override
	public String toString() {
		
		return 
			String.valueOf(this.getId()) + ", " + 
			String.valueOf(this.getX()) + ", " + 
			String.valueOf(this.getY()) + ", " + 
			String.valueOf(this.getVelocidad()) + ", " + 
			String.valueOf(this.getVelocidadAngular()) + ", " + 
			this.getSpriteVivo() + ", " + 
			this.getSpritesLaterales() + ", " + 
			String.valueOf(this.getInitialRotation()) + ", " + 
			String.valueOf(vida) + ", " + 
			spriteMuerto + ", " + 
			animacionExplosion + ", " + 
			String.valueOf(multiplicadorDePesca) + ", " + 
			horaPesca + ", " + 
			String.valueOf(cantPesca) + ", " + 
			String.valueOf(tiempoPesca) + ", " + 
			this.getTipo() + ", " + 
			tipoPesquero + ", " + 
			String.valueOf(restoPesca);
	}
		
}
