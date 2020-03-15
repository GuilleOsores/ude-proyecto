package websocket;

import javax.websocket.CloseReason;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

import com.google.gson.JsonObject;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;

@ServerEndpoint("/endpoint")
public class ServerWebSocket {
	
	private static final Map<String, Session> sesiones = new HashMap<String, Session>();
	
	@OnOpen
	public void onOpen(Session session) throws IOException {
		sesiones.put(session.getId(), session);		
		session.getBasicRemote().sendText("Sesion: " + session.getId());
		
		System.out.println("Conexion abierta id: " + session.getId());
		System.out.println("Cant. sesiones: " + sesiones.size());
		
		JsonObject jsonObject = new JsonObject();
		jsonObject.addProperty("evento", "iniciarPartida");
		
		if(sesiones.size()==2) {
			broadcastAll(jsonObject.toString());
		}
	}

	@OnMessage
	public void onMessage(String msg, Session session) throws IOException {
		//System.out.println("Sesion " + session.getId() + " dice: " + msg);
		broadcast(msg, session);
	}

	@OnClose
	public void onClose(CloseReason reason, Session session) {
		System.out.println("Cerrando sesion: " + session.getId() + ", motivo: " + reason.getReasonPhrase());
		sesiones.remove(session.getId());
		System.out.println("Cant. sesiones: " + sesiones.size());
	}

	@OnError
	public void onError(Session session, Throwable t) {
		System.out.println(session.getId() + " error ");
	}
	
	private static void broadcast(String msg, Session session) throws IOException {
		for(Entry<String, Session> s : sesiones.entrySet()) {
			if(s.getValue().getId() != session.getId()) {
				s.getValue().getBasicRemote().sendText(msg);
			}
		}
	}
	
	private static void broadcastAll(String msg) throws IOException {
		for(Entry<String, Session> s : sesiones.entrySet()) {
			s.getValue().getBasicRemote().sendText(msg);
		}
	}
}