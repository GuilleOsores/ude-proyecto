package api;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.JsonObject;

import logica.Fachada;

@WebServlet("/guardarpartida")
public class GuardarPartida extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	public GuardarPartida() {
        super();
    }
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		JsonObject json = new JsonObject();
		
		try {
			Fachada fachada = Fachada.getInstanceFachada();
			fachada.guardarPartida();
			json.addProperty("mensaje", "OK");
		} catch (Exception e) {
			json.addProperty("mensaje", e.getMessage());
			e.printStackTrace();
		}
		
		out.print(json);
	}
}
