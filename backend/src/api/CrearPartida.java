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
	JsonObject resultado = new JsonObject();

    public CrearPartida() {
        super();
    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {		
		Properties prop = new Properties();
		InputStream input = null;
		
		String nick = null;
		String bando = null;
		
		nick = request.getParameter("nick");
		bando = request.getParameter("bando");
		
		if (nick != null && bando != null) {
			
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
			
			Vehiculo v1 = null, v2 = null;
						
			if (bando.equals("PATRULLA")) { 		
				
				v1 = new Patrulla(); //pasar id, y armar desde properties(o BD) en Patrulla para patrulla 1 y setear armas.
				v2 = new Patrulla(); //pasar id, y armar desde properties(o BD) en Patrulla para patrulla 2 y setear armas.
			
			}else if (bando.equals("PESQUERO")) {
				v1 = new Pesquero(); //pasar id, y armar desde properties(o BD) en Pesquero para pesquero 1
				v2 = new Pesquero(); //pasar id, y armar desde properties(o BD) en Pesquero para pesquero 2
			}
			
			Vehiculos vs = new Vehiculos();
			vs.put(v1);	
			vs.put(v2);	
			
			Jugador j = new Jugador(nick, vs, 0);
			Jugadores js = new Jugadores();		
			js.put(j);
			
			int idPartida = 1; //solo para probar, no tendría que ser pasado como parametro.
			
			//podriamos hacer VO para no acceder directamente a las clases, o delegarlo todo a la fachada.
			Partida p = new Partida(idPartida, js, width, height, millaLimite, time, cantPeces, 0);
			Partidas ps = new Partidas();
			ps.put(p);
			
			Fachada fachada = new Fachada(ps);
			
			resultado.addProperty("idPartida", idPartida);
			
		}else {
			resultado.addProperty("idPartida", "0");
			resultado.addProperty("mensaje", "Debe elegir un Nick de jugador y un Bando correcto.");
		}	
		
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		out.print(resultado);
	}
}