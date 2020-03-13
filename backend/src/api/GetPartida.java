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

@WebServlet("/getpartida")
public class GetPartida extends HttpServlet {
	private static final long serialVersionUID = 1L;
	JsonObject resultado = new JsonObject();
	
    public GetPartida() {
        super();

    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		int idPartida = Integer.parseInt(request.getParameter("idPartida"));
		
		Fachada fachada = new Fachada();
		
		resultado = fachada.getPartidaJson(idPartida);
		
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		out.print(resultado);
	}
}