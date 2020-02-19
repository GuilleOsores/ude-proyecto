package logica;

public class Patrulla extends Vehiculo {
	
	private float combustible;

	public Patrulla() {
		
	}
	
	public Patrulla(float combustible) {
		super();
		this.combustible = combustible;
	}

	public Patrulla(int id, float x, float y, float velocidad, float velocidadAngular, String spriteVivo, float combustible) {
		super(id, x, y, velocidad, velocidadAngular, spriteVivo);
		this.combustible = combustible;
	}

	public float getCombustible() {
		return combustible;
	}

	public void setCombustible(float combustible) {
		this.combustible = combustible;
	}
	
}
