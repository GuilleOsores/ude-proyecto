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

import logica.Fachada;
import logica.entidades.Partida;

@ServerEndpoint("/sala")
public class SalaEndpoint {
	
	private Session sessionCrearSala = null;
	
	private Fachada fachada;
	
	@OnOpen
	public void onOpen(Session session) throws IOException {
		this.sessionCrearSala = session;
	}
	
	@OnMessage
	public void onMessage(String msg, Session session) throws IOException {
		System.out.println(msg);
	}

	@OnClose
	public void onClose(CloseReason reason, Session session) {
		
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
