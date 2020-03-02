package websocket;

import java.io.IOException;

import javax.websocket.CloseReason;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;

@ServerEndpoint("/sala/{nick}")
public class SalaEndpoint {
	
	private static Session sessionCrearSala = null;
	
	
	@OnOpen
	public void onOpen(Session session, @PathParam("tipoJugador") String tipoJugador) throws IOException {
		this.sessionCrearSala = session;
	
	}
	
	@OnMessage
	public void onMessage(String msg, Session session) throws IOException {
		
		
	}

	@OnClose
	public void onClose(CloseReason reason, Session session) {
		
	}

	@OnError
	public void onError(Session session, Throwable t) {
		
	}
}
