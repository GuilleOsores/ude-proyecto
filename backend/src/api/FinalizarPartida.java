package api;

import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;

import java.util.Properties;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.JsonObject;

import logica.Fachada;

@WebServlet("/finalizarpartida")
public class FinalizarPartida extends HttpServlet {
	private static final long serialVersionUID = 1L;
	JsonObject json = new JsonObject();

    public FinalizarPartida() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Fachada fachada = Fachada.getInstanceFachada();
		
		try {	
			
			json = fachada.finalizarPartida();
			
		}catch(Exception e){
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