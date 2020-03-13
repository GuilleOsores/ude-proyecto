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
	JsonObject json = new JsonObject();
	
    public GetPartida() {
        super();

    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//no es necesario pasar parametros, devuelve la partida actual.	
		Fachada fachada = Fachada.getInstanceFachada();
	
		json = fachada.getPartida();
		
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		out.print(json);
	}
}