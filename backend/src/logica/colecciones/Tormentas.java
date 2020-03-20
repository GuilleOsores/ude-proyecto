package logica.colecciones;

import java.util.ArrayList;
import java.util.Iterator;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import logica.entidades.Tormenta;

public class Tormentas {

	private ArrayList<Tormenta> tormentas;
	
	public Tormentas() {
		tormentas = new ArrayList();
	}
	
	public void add(Tormenta t) {
		tormentas.add(t);
	}
	
	/*public void ordenarPorInicio() {
	    for (int j = 1; j < tormentas.size(); j++) {
	        Tormenta current = tormentas.get(j);
	        int i = j-1;
	        while ((i > -1) && (tormentas.get(i).getTormentaInicio() > current.getTormentaInicio())) {
	            tormentas.add(i+1,tormentas.get(i));
	            i--;
	        }
	        
	        tormentas.add(i+1,current);
	    }
	    
	}*/
	
	
	public int size() {
		return tormentas.size();
	}
	
	public JsonArray getTormentasToJson() {	
		JsonArray jsonArray = new JsonArray();
		
		Iterator<Tormenta> tormentaIterator = tormentas.iterator();
		
		while(tormentaIterator.hasNext()){
			Tormenta t= tormentaIterator.next();
			
			JsonObject json = new JsonObject();
			json.addProperty("tormentaDuracion", t.getTormentaDuracion());
			json.addProperty("tormentaInicio", t.getTormentaInicio());
			json.addProperty("sprite", t.getSprite());
			jsonArray.add(json);
			
		}
		
		return jsonArray;
	}

	public void removerRepetidas() {
		ArrayList<Tormenta> remover = new ArrayList();
		
		for(int i=0; i<tormentas.size(); i++) {
			for(int j=i+1; j<tormentas.size(); j++) {
				if(tormentas.get(i).getTormentaInicio()==tormentas.get(j).getTormentaInicio()) {
					System.out.println("Inicio i "+ tormentas.get(i).getTormentaInicio());
					System.out.println("Inicio j "+ tormentas.get(j).getTormentaInicio());
					remover.add(tormentas.get(i));
				}else if(tormentas.get(i).getTormentaInicio()+tormentas.get(i).getTormentaDuracion()==tormentas.get(j).getTormentaInicio()){
					remover.add(tormentas.get(i));
				}
			}
		}
		
		for(int i=0; i<remover.size(); i++) {
			tormentas.remove(remover.get(i));
		}
		
	}
}
