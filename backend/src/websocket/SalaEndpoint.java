package websocket;

import java.io.IOException;

import javax.websocket.CloseReason;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

@ServerEndpoint("/sala")
public class SalaEndpoint {
	
	@OnOpen
	public void onOpen(Session session) throws IOException {
		
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
