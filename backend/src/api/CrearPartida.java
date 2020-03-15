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

@WebServlet("/crearpartida")
public class CrearPartida extends HttpServlet {
	private static final long serialVersionUID = 1L;
	JsonObject json = new JsonObject();

    public CrearPartida() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Properties prop = new Properties();
		InputStream input = null;
		
		String nickName = null;
		String bando = null;
		
		try {			
			nickName = request.getParameter("nickName");
			bando = request.getParameter("bando");
			
			if (nickName != null && bando != null) {
				input = getClass().getClassLoader().getResourceAsStream("resources/config.properties");			
				prop.load(input);
				
				int width       = Integer.parseInt(prop.getProperty("width"));
				int height      = Integer.parseInt(prop.getProperty("height"));
				int millaLimite = Integer.parseInt(prop.getProperty("millaLimite"));
				int time        = Integer.parseInt(prop.getProperty("time"));
				int cantPeces   = Integer.parseInt(prop.getProperty("cantPeces"));
							
				if (bando.equals("PATRULLA") || bando.equals("PESQUERO")) { 								
					Fachada fachada = Fachada.getInstanceFachada();
					json = fachada.crearPartida(nickName, bando, width, height, millaLimite, time, cantPeces, 0);
				}else 
					json.addProperty("mensaje", "Debe elegir un Bando correcto.");	
				
			}else 
				json.addProperty("mensaje", "Debe elegir un Nick de jugador y un Bando.");	
			
		}catch(Exception e){
			json.addProperty("mensaje", e.toString());
		}

		//response.addHeader("Access-Control-Allow-Origin", "*");

		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		out.print(json);
	}
}