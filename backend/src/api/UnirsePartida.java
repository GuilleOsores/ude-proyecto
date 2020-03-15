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
			json = fachada.unirsePartida(nickName);
		} else {
			json.addProperty("mensaje", "Debe de elegir un nombre de jugador.");
		}
		
		//response.addHeader("Access-Control-Allow-Origin", "*");
		
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		out.print(json);
	}
}