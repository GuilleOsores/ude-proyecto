package api;

import java.io.FileReader;
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
import logica.entidades.*;
import logica.colecciones.*;

@WebServlet("/crearpartida")
public class CrearPartida extends HttpServlet {
	private static final long serialVersionUID = 1L;
	JsonObject json = new JsonObject();

    public CrearPartida() {
        super();
    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {	
		Properties prop = new Properties();
		InputStream input = null;
		
		String nickName = null;
		String bando = null;
		
		try {			
			nickName = request.getParameter("nickName");
			bando = request.getParameter("bando");
			
			if (nickName != null && bando != null) {
				//para que lea este input debe estar correctamente incorporado /resources/config.properties en el proyecto
				input = getClass().getClassLoader().getResourceAsStream("config.properties");			
				prop.load(input);
				
				//esto solo para que puedan probar con su ruta, si es que no les detecta la configuracion anterior.
				//prop.load(new FileReader("C:\\Users\\gnova\\eclipse-workspace\\backend\\src\\resources\\config.properties"));
				
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
		
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		out.print(json);
	}
}