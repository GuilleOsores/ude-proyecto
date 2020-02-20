package logica;

import logica.colecciones.Armas;
import logica.colecciones.VehiculosAuxiliares;

public class PatrullaPesada extends Patrulla {
	
	private VehiculosAuxiliares vehiculos;
	private Armas armas;
	
	public PatrullaPesada() {
		this.vehiculos = new VehiculosAuxiliares();
		this.armas = new Armas();
	}

	public PatrullaPesada(int id, float x, float y, float velocidad, float velocidadAngular, String spriteVivo, float combustible, VehiculosAuxiliares vehiculos, Armas armas) {
		super(id, x, y, velocidad, velocidadAngular, spriteVivo, combustible);
		this.vehiculos = vehiculos;
		this.armas = armas;
	}

	public VehiculosAuxiliares getVehiculos() {
		return vehiculos;
	}

	public void setVehiculos(VehiculosAuxiliares vehiculos) {
		this.vehiculos = vehiculos;
	}

	public Armas getArmas() {
		return armas;
	}

	public void setArmas(Armas armas) {
		this.armas = armas;
	}
	
}
