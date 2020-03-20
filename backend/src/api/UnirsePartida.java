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

import com.google.gson.JsonObject;

import logica.Fachada;

@WebServlet("/unirsepartida")
public class UnirsePartida extends HttpServlet {
	private static final long serialVersionUID = 1L;
	JsonObject json = new JsonObject();
	
    public UnirsePartida() {
        super();

    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String nickName = null;
		nickName = request.getParameter("nickName");
				
		if (nickName != null) { 
			Fachada fachada = Fachada.getInstanceFachada();
			try {
				json = fachada.unirsePartida(nickName);
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
		} else {
			json.addProperty("mensaje", "Debe de elegir un nombre de jugador.");
			response.setStatus(500);
		}
		
		//response.addHeader("Access-Control-Allow-Origin", "*");
		
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		out.print(json);
	}
}