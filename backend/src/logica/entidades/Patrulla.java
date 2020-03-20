package logica.entidades;

import logica.colecciones.Armas;

import java.util.Properties;
import java.io.FileInputStream;
import java.io.InputStream;

public class Patrulla extends Vehiculo {
	
	private float combustible;
	private float combustibleMaximo;
	private Armas armas;
	
	private String tipoPatrulla;
	private int gastoCombustible;
	
	
	public Patrulla(){
				
	}

	// Constructor para usar cuando se recupera de la BD
	public Patrulla(int id, float x, float y, String tipo, String tipoPatrulla, float initialRotation, float combustible) {
		Properties p = new Properties();
		InputStream input = null;
		
		try {
			input = getClass().getClassLoader().getResourceAsStream("resources/config.properties");			
			p.load(input);
			
			String prefijoProperties = "";
			
			if (tipoPatrulla.equals("grande")) {
				
				prefijoProperties = "pat1_";
				this.setSpritesLaterales("{\"l\": \"policia01_izquierda\",\"r\": \"policia01_derecha\",\"u\": \"policia01_atras\",\"d\": \"policia01_frente\"}");
				
			} else if (tipoPatrulla.equals("chica")) {

				prefijoProperties = "pat2_";
				this.setSpritesLaterales("{\"l\": \"policia02_izquierda\",\"r\": \"policia02_derecha\",\"u\": \"policia02_atras\",\"d\": \"policia02_frente\"}");			
			
			}
			
			this.setId(id);
			this.setX(x);
			this.setY(y);
			this.setTipo(p.getProperty(prefijoProperties + "tipo"));
			this.setVelocidad(Float.parseFloat(p.getProperty(prefijoProperties + "initialRotation"))); 
			this.setVelocidadAngular(Integer.parseInt(p.getProperty(prefijoProperties + "angularVelocity")));
			this.setSpriteVivo(p.getProperty(prefijoProperties + "sprite"));
			this.setInitialRotation(initialRotation);
			
			this.setRangoVision(Float.parseFloat(p.getProperty(prefijoProperties + "rangoVision")));
			
			this.combustible = combustible;
			this.combustibleMaximo = Integer.parseInt(p.getProperty(prefijoProperties + "combustibleMaximo"));
			
			this.armas = new Armas();
			this.tipoPatrulla = tipoPatrulla;
			this.gastoCombustible = Integer.parseInt(p.getProperty(prefijoProperties + "gastoCombustible"));
			
			this.setRangoVision(Float.parseFloat(p.getProperty(prefijoProperties + "rangoVision")));
		
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
			
			int width = Integer.parseInt(p.getProperty("width"));
			int height = Integer.parseInt(p.getProperty("height"));
			int millaLimite = Integer.parseInt(p.getProperty("millaLimite"));
			int x = (int) (Math.random() * width);
			int y = (int) (Math.random() * height/2) + millaLimite;
			int rotation1 = (int) (Math.random() * -360) + 180;
			int rotation2 = (int) (Math.random() * -360) + 180;
			
			String prefijoProperties = "";
			
			if (tipoPatrulla.equals("grande")) {
				prefijoProperties = "pat1_";

				this.setSpritesLaterales("{\"l\": \"policia01_izquierda\",\"r\": \"policia01_derecha\",\"u\": \"policia01_atras\",\"d\": \"policia01_frente\"}");
				this.setInitialRotation(rotation1);
				
				Arma canion = new Arma(1, (float)800, (float)50, (float)2, "canion", "bala_canion", (float)0.03, "disparo", (float)1, 0, 0, "");
				Arma ametralladora = new Arma(2, (float)400, (float)25, (float)0.5, "ametralladora", "bala", (float)0.03, "disparo", (float)0.4, 0, 0, "");
				
				Arma vehiculoAux = new Arma(3, (float)0, (float)0, (float)10, "", "patrulla-auxiliar", (float)0.0005, "dron", (float)1, (float)5, (float)1.3, "comun");
				Arma helicoptero = new Arma(4, (float)0, (float)0, (float)10, "helicoptero", "patrulla-helicoptero", (float)0.0005, "dron", (float)1, (float)5, (float)1.3, "fabrica");
				
				Armas armas = new Armas();
				armas.push(canion);
				armas.push(ametralladora);
				armas.push(vehiculoAux);
				armas.push(helicoptero);
				
				this.setArmas(armas);
				
			} else if (tipoPatrulla.equals("chica")) {
				prefijoProperties = "pat2_";
				this.setSpritesLaterales("{\"l\": \"policia02_izquierda\",\"r\": \"policia02_derecha\",\"u\": \"policia02_atras\",\"d\": \"policia02_frente\"}");
				this.setInitialRotation(rotation2);
				
				Arma ametralladora = new Arma(2, (float)400, (float)25, (float)0.5, "ametralladora", "bala", (float)0.03, "disparo", (float)0.4, 0, 0, "");
				
				Armas armas = new Armas();
				armas.push(ametralladora);
				
				this.setArmas(armas);
			}
					
			this.setId(Integer.parseInt(p.getProperty(prefijoProperties + "id"))); 
			//this.setX(Integer.parseInt(p.getProperty(prefijoProperties + "x")));
			//this.setY(Integer.parseInt(p.getProperty(prefijoProperties + "y")));
			this.setX(x);
			this.setY(y);
			this.setTipo(p.getProperty(prefijoProperties + "tipo"));
			this.setVelocidad(Float.parseFloat(p.getProperty(prefijoProperties + "initialRotation")));
			this.setVelocidad(Float.parseFloat(p.getProperty(prefijoProperties + "velocity")));
			this.setVelocidadAngular(Integer.parseInt(p.getProperty(prefijoProperties + "angularVelocity")));
			this.setSpriteVivo(p.getProperty(prefijoProperties + "sprite"));
			//this.setInitialRotation(Integer.parseInt(p.getProperty(prefijoProperties + "initialRotation")));
			this.setRangoVision(Float.parseFloat(p.getProperty(prefijoProperties + "rangoVision")));
			

			this.combustible = Float.parseFloat(p.getProperty(prefijoProperties + "combustibleMaximo"));
			this.combustibleMaximo = Float.parseFloat(p.getProperty(prefijoProperties + "combustibleMaximo"));

			this.tipoPatrulla = tipoPatrulla;
			this.gastoCombustible = Integer.parseInt(p.getProperty(prefijoProperties + "gastoCombustible"));
			
			
		} catch (Exception e) {
			System.out.println("Exception creando patrulla (Properties)");
			e.printStackTrace();
		}
	}

	public Patrulla(int id, float x, float y, float velocidad, float velocidadAngular, String spriteVivo, String spritesLaterales, float combustible, Armas armas, float initialRotation, String tipo, String tipoPatrulla, int gastoCombustible) {
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

	public float getCombustibleMaximo() {
		return combustibleMaximo;
	}

	public void setCombustibleMaximo(float combustibleMaximo) {
		this.combustibleMaximo = combustibleMaximo;
	}
	
}
