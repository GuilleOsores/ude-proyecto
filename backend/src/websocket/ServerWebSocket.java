package websocket;

import javax.websocket.CloseReason;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

@ServerEndpoint("/endpoint")
public class ServerWebSocket {
	
	private static final Map<String, Session> sesiones = new HashMap<>();
	
	@OnOpen
	public void onOpen(Session session) throws IOException {
		sesiones.put(session.getId(), session);		
		System.out.println("Conexion abierta: " + session.getId());
		session.getBasicRemote().sendText("Sesion: " + session.getId());
		System.out.println("Cant. sesiones: " + sesiones.size());
	}

	@OnMessage
	public void onMessage(String msg, Session session) throws IOException {
		System.out.println("Sesion " + session.getId() + " dice: " + msg);
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
		
	}
	
	private static void broadcast(String msg, Session session) throws IOException {
		for(Entry<String, Session> s : sesiones.entrySet()) {
			if(s.getValue().getId() != session.getId()) {
				s.getValue().getBasicRemote().sendText(msg);
			}
		}
	}
}