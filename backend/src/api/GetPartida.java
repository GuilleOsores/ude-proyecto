package api;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.JsonObject;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;


import logica.Fachada;
import logica.colecciones.Tormentas;
import logica.entidades.Tormenta;

@WebServlet("/getpartida")
public class GetPartida extends HttpServlet {
	private static final long serialVersionUID = 1L;
	JsonObject json = new JsonObject();
	
    public GetPartida() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//no es necesario pasar parametros, devuelve la partida actual.	
		Fachada fachada = Fachada.getInstanceFachada();
	
		try {
			
			json = fachada.getPartida();
			int tiempoPartida = fachada.getTiempoPartida();
			
			Tormentas tormentas= new Tormentas();
			int randomNumTormentas = ThreadLocalRandom.current().nextInt(1, 6);
			
			for(int i=0; i<randomNumTormentas; i++) {
				
				Tormenta t = new Tormenta();
				t.setSprite("tormenta");
				t.setTormentaDuracion(ThreadLocalRandom.current().nextInt(1, 60));
				t.setTormentaInicio(ThreadLocalRandom.current().nextInt(1, tiempoPartida));
				
				tormentas.add(t);
				
			}
			
			tormentas.removerRepetidas();
			
			System.out.println("Tormentas "+ tormentas.size());
			
			JsonArray jsonTormentas = tormentas.getTormentasToJson();

			json.add("tormentas", jsonTormentas);
		} catch (Exception e) {
			json.addProperty("mensaje", e.getMessage());
			response.setStatus(500);
		}
		
		//response.addHeader("Access-Control-Allow-Origin", "*");
		
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		out.print(json);
	}
}