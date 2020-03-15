package api;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.concurrent.ThreadLocalRandom;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import logica.Fachada;
import logica.colecciones.Tormentas;
import logica.entidades.Tormenta;

@WebServlet("/cargarpartida")
public class CargarPartida extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	public CargarPartida() {
        super();
    }
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {		
		
		Fachada fachada = Fachada.getInstanceFachada();
		JsonObject json = new JsonObject();
		
		try {
			
			json = fachada.cargarPartida();
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
			
			JsonArray jsonTormentas = tormentas.getTormentasToJson();

			json.add("tormentas", jsonTormentas);
		} catch (Exception e) {
			json.addProperty("mensaje", e.getMessage());
			response.setStatus(500);
		}
		
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		out.print(json);
	}
}
