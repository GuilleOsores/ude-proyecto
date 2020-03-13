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
	JsonObject resultado = new JsonObject();
	
    public UnirsePartida() {
        super();

    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		int idPartida = Integer.parseInt(request.getParameter("idPartida"));
		String nick = request.getParameter("nick");
		String bando = request.getParameter("bando");
		
		if (bando.equals("PESQUERO") || bando.equals("PATRULLA")) { 
			Fachada fachada = new Fachada();
			//delegar a fachada, devolver un JsonObject si vamos a mostrar mensajes. 
			//fachada.unirsePartida(idPartida, nick, bando);
		} else {
			resultado.addProperty("mensaje", "Bando incorrecto");
		}
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		out.print(resultado);
	}
}