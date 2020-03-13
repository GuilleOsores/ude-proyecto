package logica.colecciones;

import java.util.List;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import logica.entidades.Arma;

public class Armas {
	
	private List<Arma> armas;

	public Armas() {

	}
	
	public void push(Arma arma) {
		armas.add(arma);
	}
	
	public JsonArray getArmasToJson() {	
		JsonArray jsonArray = new JsonArray();
		
		//implementar
		
		return jsonArray;
	}
	
}
