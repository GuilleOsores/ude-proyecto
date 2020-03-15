package api;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.JsonObject;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;


import logica.Fachada;

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
			
			JsonArray tormentas = new JsonArray();
			JsonObject t1 = new JsonObject();
			t1.addProperty("tormentaInicio", 5);
			t1.addProperty("tormentaDuracion", 5);
			t1.addProperty("sprite", "tormenta");
			JsonObject t2 = new JsonObject();
			t2.addProperty("tormentaInicio", 15);
			t2.addProperty("tormentaDuracion", 40);
			t2.addProperty("sprite", "tormenta");
			tormentas.add(t1);
			tormentas.add(t2);

			json.add("tormentas", tormentas);
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