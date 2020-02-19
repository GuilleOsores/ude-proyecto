package logica;

public class VehiculoAuxiliar extends Vehiculo {

	private String tipo;

	public VehiculoAuxiliar() {
		
	}

	public VehiculoAuxiliar(int id, float x, float y, float velocidad, float velocidadAngular, String spriteVivo, String tipo) {
		super(id, x, y, velocidad, velocidadAngular, spriteVivo);
		this.tipo = tipo;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
	
}
