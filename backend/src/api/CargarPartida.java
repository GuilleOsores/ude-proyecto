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
			
			String nickName = request.getParameter("nickName");
			String bando = request.getParameter("bando");

			fachada.cargarPartida(nickName, bando);
			
			json.addProperty("mensaje", "OK");
			response.setStatus(200);

			if (nickName == null || nickName.isBlank()) {
				json.addProperty("mensaje", "Debe elegir un nick");
				response.setStatus(500);
			} else if (bando == null || bando.isBlank()) {
				json.addProperty("mensaje", "Debe elegir un bando");
				response.setStatus(500);
			} else {
				fachada.cargarPartida(nickName, bando);
				json.addProperty("mensaje", "OK");
				response.setStatus(200);
			}
						
		} catch (Exception e) {
			e.printStackTrace();
			json.addProperty("mensaje", e.getMessage());
			response.setStatus(500);
		}
		
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		out.print(json);
	}
}
