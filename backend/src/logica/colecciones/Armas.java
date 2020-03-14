package logica.colecciones;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import logica.entidades.Arma;

public class Armas {
	
	private ArrayList<Arma> armas;

	public Armas() {
		armas = new ArrayList<Arma>();
	}
	
	public void push(Arma arma) {
		armas.add(arma);
	}
	
	public JsonArray getArmasToJson() {	
		JsonArray jsonArray = new JsonArray();
		
		Iterator<Arma> armasIterator = armas.iterator();
		while(armasIterator.hasNext()){
			Arma arma = armasIterator.next();
			
			JsonObject json = new JsonObject();
			json.addProperty("id", arma.getId());
			json.addProperty("tipo", arma.getTipo());
			json.addProperty("danio", arma.getDanio());
			json.addProperty("cadencia", arma.getCadencia());
			json.addProperty("distancia", arma.getAlcance());
			json.addProperty("sprite", arma.getAnimacion());
			json.addProperty("velocidad", arma.getVelocidad());
			json.addProperty("sonido", arma.getSonido());
			json.addProperty("escala", arma.getEscala());
			
			json.addProperty("ttl", arma.getTtl());
			json.addProperty("velocidadAngular", arma.getVelocidadAngular());
			json.addProperty("velocidadAngular", arma.getPuedeNeutralizar());
			
			jsonArray.add(json);
			
		}
		
		return jsonArray;
	}
	
}
