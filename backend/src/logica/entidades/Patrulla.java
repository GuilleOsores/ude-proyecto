package logica.entidades;

import logica.colecciones.Armas;

import java.util.Properties;
import java.io.FileInputStream;
import java.io.InputStream;

public class Patrulla extends Vehiculo {
	
	private float combustible;
	private Armas armas;
	
	private String tipoPatrulla;
	private int gastoCombustible;
	
	
	public Patrulla(){
				
	}

	// Constructor para usar cuando se recupera de la BD
	public Patrulla(int id, int x, int y, String tipo, String tipoPatrulla, float initialRotation, float combustible) {
		Properties p = new Properties();
		InputStream input = null;
		
		try {
			input = getClass().getClassLoader().getResourceAsStream("resources/config.properties");			
			p.load(input);
			
			String prefijoProperties = "";
			
			if (tipoPatrulla.equals("grande")) {
				
				prefijoProperties = "pat1_";
				this.setSpritesLaterales("{\"l\": \"policia1\",\"r\": \"policia1\",\"u\": \"policia1\",\"d\": \"policia1\"}");
				
			} else if (tipoPatrulla.equals("chica")) {

				prefijoProperties = "pat2_";
				this.setSpritesLaterales("{\"l\": \"policia2\",\"r\": \"policia2\",\"u\": \"policia2\",\"d\": \"policia2\"}");			
			
			}
			
			this.setId(id);
			this.setX(x);
			this.setY(y);
			this.setTipo(p.getProperty(prefijoProperties + "tipo"));
			this.setVelocidad(Float.parseFloat(p.getProperty(prefijoProperties + "initialRotation"))); 
			this.setVelocidadAngular(Integer.parseInt(p.getProperty(prefijoProperties + "angularVelocity")));
			this.setSpriteVivo(p.getProperty(prefijoProperties + "sprite"));
			this.setInitialRotation(initialRotation);
			
			this.combustible = combustible;
			this.armas = new Armas();
			this.tipoPatrulla = tipoPatrulla;
			this.gastoCombustible = Integer.parseInt(p.getProperty(prefijoProperties + "gastoCombustible"));
		
		} catch (Exception e) {
			System.out.println("Exception creando patrulla (BD)");
			e.printStackTrace();
		}
	}
	
	// Constructor para usar cuando se crea partida
	public Patrulla(String tipoPatrulla) {
		Properties p = new Properties();
		InputStream input = null;
		
		try {
			input = getClass().getClassLoader().getResourceAsStream("resources/config.properties");			
			p.load(input);
			
			String prefijoProperties = "";
			
			if (tipoPatrulla.equals("grande")) {
				prefijoProperties = "pat1_";
				this.setSpritesLaterales("{\"l\": \"policia1\",\"r\": \"policia1\",\"u\": \"policia1\",\"d\": \"policia1\"}");
				
			} else if (tipoPatrulla.equals("chica")) {
				prefijoProperties = "pat2_";
				this.setSpritesLaterales("{\"l\": \"policia2\",\"r\": \"policia2\",\"u\": \"policia2\",\"d\": \"policia2\"}");			
			}
					
			this.setId(Integer.parseInt(p.getProperty(prefijoProperties + "id"))); 
			this.setX(Integer.parseInt(p.getProperty(prefijoProperties + "x")));
			this.setY(Integer.parseInt(p.getProperty(prefijoProperties + "y")));
			this.setTipo(p.getProperty(prefijoProperties + "tipo"));
			this.setVelocidad(Float.parseFloat(p.getProperty(prefijoProperties + "initialRotation")));
			this.setVelocidad(Float.parseFloat(p.getProperty(prefijoProperties + "velocity")));
			this.setVelocidadAngular(Integer.parseInt(p.getProperty(prefijoProperties + "angularVelocity")));
			this.setSpriteVivo(p.getProperty(prefijoProperties + "sprite"));
			this.setInitialRotation(Integer.parseInt(p.getProperty(prefijoProperties + "initialRotation")));
			
			this.combustible = Integer.parseInt(p.getProperty(prefijoProperties + "combustibleMaximo"));
			this.armas = new Armas();
			this.tipoPatrulla = tipoPatrulla;
			this.gastoCombustible = Integer.parseInt(p.getProperty(prefijoProperties + "gastoCombustible"));
			
			
		} catch (Exception e) {
			System.out.println("Exception creando patrulla (Properties)");
			e.printStackTrace();
		}
	}

	public Patrulla(int id, int x, int y, float velocidad, float velocidadAngular, String spriteVivo, String spritesLaterales, float combustible, Armas armas, float initialRotation, String tipo, String tipoPatrulla, int gastoCombustible) {
		super(id, x, y, tipo, velocidad, velocidadAngular, spriteVivo, spritesLaterales, initialRotation);
		this.combustible = combustible;
		this.setArmas(armas);
		
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

	public int getGastoCombustible() {
		return gastoCombustible;
	}

	public void setGastoCombustible(int gastoCombustible) {
		this.gastoCombustible = gastoCombustible;
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
			String.valueOf(this.getInitialRotation()) + ", " + 
			String.valueOf(combustible) + ", " +  
			this.getTipo() + ", " + 
			tipoPatrulla + ", " + 
			String.valueOf(gastoCombustible);
	}
	
}
