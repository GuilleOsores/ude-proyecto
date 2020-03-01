package websocket;

import javax.websocket.CloseReason;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

import java.io.IOException;
import java.util.HashMap;


@ServerEndpoint("/endpoint")
public class ServerWebSocket {
	
	private HashMap<String, Session> sesiones = new HashMap<>();
	
	@OnOpen
	public void onOpen(Session session) throws IOException {
		sesiones.put(session.getId(), session);
		
		System.out.println("Conexion abierta: " + session.getId());
	}

	@OnMessage
	public void onMessage(String msg, Session session) throws IOException {
		System.out.println(msg);
		session.getBasicRemote().sendText(msg);
		/* for(Map.Entry<String, Session> s : sesiones.entrySet()) {
			if(s.getKey() != session.getId()) {
				s.getValue().getBasicRemote().sendText(msg);
			}
		} */
	}

	@OnClose
	public void onClose(CloseReason reason, Session session) {
		System.out.println("Cerrando sesion: " + session.getId());		
	}

	@OnError
	public void onError(Session session, Throwable t) {
		
	}

}