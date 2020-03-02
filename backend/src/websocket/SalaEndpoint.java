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

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

@ServerEndpoint("/sala/{nick}")
public class SalaEndpoint {
	
	private static Session sessionCrearSala = null;
	
	@OnOpen
	public void onOpen(Session session, @PathParam("nick") String nick) throws IOException {
		System.out.println(nick);
		
		if(sessionCrearSala == null) {
			this.sessionCrearSala = session;
			session.getBasicRemote().sendText("pesquero");
		} else {
			session.getBasicRemote().sendText("patrulla");
		}
	}
	
	@OnMessage
	public void onMessage(String msg, Session session) throws IOException {
		System.out.println(msg);
		
		try {
			JsonParser parser = new JsonParser();
			JsonObject datos = parser.parse(msg).getAsJsonObject();
			
			String nick = datos.get("nick").toString();
			System.out.println(nick);
			String tipoConec = datos.get("tipoConec").toString();
			System.out.println(tipoConec);
		} catch(Exception e) {
			e.printStackTrace();
		}
		
	}

	@OnClose
	public void onClose(CloseReason reason, Session session) {
		
	}

	@OnError
	public void onError(Session session, Throwable t) {
		
	}
}
