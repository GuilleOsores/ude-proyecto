package websocket;

import javax.websocket.CloseReason;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;


@ServerEndpoint("/endpoint")
public class ServerWebSocket {

	@OnOpen
	public void onOpen(Session session) {
		System.out.println("Conexion abierta: " + session.getId());
	}

	@OnMessage
	public void onMessage(String txt, Session session) throws IOException {
		session.getBasicRemote().sendText("hola gil");
	}

	@OnClose
	public void onClose(CloseReason reason, Session session) {
		
	}

	@OnError
	public void onError(Session session, Throwable t) {
		
	}

}