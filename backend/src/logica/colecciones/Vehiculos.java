package logica.colecciones;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import logica.entidades.Jugador;
import logica.entidades.Patrulla;
import logica.entidades.Pesquero;
import logica.entidades.Vehiculo;

public class Vehiculos {
	
	private Map<Integer, Vehiculo> diccionario;
	
	public Vehiculos() {
		diccionario = new HashMap<Integer, Vehiculo>();
	}
	
	public void put(Vehiculo v) {
		diccionario.put(v.getId(), v);
	}
	
	public Vehiculo get(int id) {
		return diccionario.get(id);
	}
	
	public JsonArray getVehiculosToJson() {	
		JsonArray jsonArray = new JsonArray();
		
		try {
			for (Entry<Integer, Vehiculo> vehiculo : diccionario.entrySet()) {
				JsonObject json = new JsonObject();
				
				json.addProperty("id", this.get(vehiculo.getKey()).getId());
				json.addProperty("sprite", this.get(vehiculo.getKey()).getSpriteVivo());
				json.add("spritesLaterales", this.get(vehiculo.getKey()).getSpritesLaterales());
				json.addProperty("x", this.get(vehiculo.getKey()).getX());
				json.addProperty("y", this.get(vehiculo.getKey()).getY());
				json.addProperty("initialRotation", this.get(vehiculo.getKey()).getInitialRotation());
				json.addProperty("velocity", this.get(vehiculo.getKey()).getVelocidad());
				json.addProperty("angularVelocity", this.get(vehiculo.getKey()).getVelocidadAngular());
				json.addProperty("rangoVision", this.get(vehiculo.getKey()).getRangoVision());
				
				if (this.get(vehiculo.getKey()) instanceof Patrulla){
					json.addProperty("tipo", ((Patrulla) this.get(vehiculo.getKey())).getTipo());
					json.addProperty("combustibleActual", ((Patrulla) this.get(vehiculo.getKey())).getCombustible());
					json.addProperty("combustibleMaximo", ((Patrulla) this.get(vehiculo.getKey())).getCombustibleMaximo());
					json.addProperty("gastoCombustible", ((Patrulla) this.get(vehiculo.getKey())).getGastoCombustible());
					json.add("armas", ((Patrulla) this.get(vehiculo.getKey())).getArmas().getArmasToJson());
				}
				else if (this.get(vehiculo.getKey()) instanceof Pesquero){
					json.addProperty("horaPesca", ((Pesquero) this.get(vehiculo.getKey())).getHoraPesca());
					json.addProperty("cantPesca", ((Pesquero) this.get(vehiculo.getKey())).getCantPesca());
					json.addProperty("tiempoPesca", ((Pesquero) this.get(vehiculo.getKey())).getTiempoPesca());
					json.addProperty("tipo", ((Pesquero) this.get(vehiculo.getKey())).getTipo());
					json.addProperty("tipoPesquero", ((Pesquero) this.get(vehiculo.getKey())).getTipoPesquero());
					json.addProperty("restoPesca", ((Pesquero) this.get(vehiculo.getKey())).getRestoPesca());
					json.addProperty("vida", ((Pesquero) this.get(vehiculo.getKey())).getVida());
				}
				
				jsonArray.add(json);
	
			}
		}catch(Exception e) {
			jsonArray.add(e.toString());
		}
		
		return jsonArray;
	}
	
	// Funcion auxiliar para convertir el map en lista
	public List<Vehiculo> vehiculosToList() {
		ArrayList<Vehiculo> lista = new ArrayList<>();
			
		diccionario.forEach((k, v) -> lista.add(v));
			
		return lista;
	}
	
}
