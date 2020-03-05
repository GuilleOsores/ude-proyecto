package websocket;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.websocket.CloseReason;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import logica.Fachada;
import logica.entidades.Jugador;
import logica.entidades.Partida;

@ServerEndpoint("/sala")
public class SalaEndpoint {
	
	private static Map<String, Session> sesiones = new HashMap<String, Session>();
	private static Map<String, Jugador> jugadores = new HashMap<String, Jugador>();
	private static Map<String, Partida> partidas = new HashMap<String, Partida>();
	
	private Fachada fachada;
	
	@OnOpen
	public void onOpen(Session session) throws IOException {
		this.sesiones.put(session.getId(), session);
		session.getBasicRemote().sendText("Id: " + session.getId());
		System.out.println("Conectado: " + session.getId());
	}

	@OnMessage
	public void onMessage(String msg, Session session) throws IOException {
		try {
			System.out.println("antes");
			JsonParser parser = new JsonParser();
			
			System.out.println("Ses. " + session.getId() + " dice: " + msg);
			
			// JsonObject obj1 = parser.parse(msg).getAsJsonObject();
			
			// JsonObject obj = JsonParser.parseString(msg).getAsJsonObject();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	
				
		/* recibe:
		 * 		- acción: crear/unirse
		 * 		- nick
		 * 		- tipo de jugador: pesquero/patrulla
		 * 
		 * si la acción:
		 * 		- crear:
		 * 			- crear un jugador con el nick y setear los barcos con posiciones random
		 * 			- crear la partida con ese jugador, y esperar a que llegue otro
		 * 			- dejar esperando a que llegue otro jugador o timeout		
		 * 
		 * 		- unirse:
		 * 			- crear un jugador con el nick y setear los barcos con posiciones random
		 * 			- buscar una partida donde el otro jugador sea del otro tipo
		 * 			- cuando encuentre, devolver los datos de la partida (posiciones de los barcos,
		 * 			  etc.) Si no encuentra, timeout
		*/
	}

	@OnClose
	public void onClose(CloseReason reason, Session session) {
		System.out.println("Desonectado: " + session.getId() + ", cod.: " + reason.getCloseCode() + ", " + reason.getReasonPhrase());
	}

	@OnError
	public void onError(Session session, Throwable t) {
		
	}
	
	private void crearPartida(Session session) throws IOException {
		session.getBasicRemote().sendText("mandame tu nick wachin");
	}
	
	private void unirsePartida(Session session) {
		
	}
}
