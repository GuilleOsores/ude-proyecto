

import java.io.IOException;
import java.lang.reflect.Type;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.google.gson.reflect.TypeToken;


@ServerEndpoint("/ws") //registro del websocket

public class WsServer2 {
	//(BOAT_SPEED*BOAT_SPEED)*Math.sin(SHOOT_ANGLE)*Math.sin(SHOOT_ANGLE)) / GRAVITY_FORCE
	
	private final double BULLET_SPEED = 63;
	private final double GRAVITY_FORCE = 9.8;
	
	@OnOpen
	public void onOpen(Session session) throws IOException {}
	
	@OnMessage
	public void onMessage(String data, Session session) throws IOException{
		
		System.out.println(data);
		notify(data, session);
		
	}

	private void endGame(String gameId, Session session) throws IOException {
		
		JsonObject obj = new JsonObject();
		obj.addProperty("method", "endGame");
		obj.addProperty("gameID", gameId);
		
		notify(obj.toString(), session);
	}

	private JsonObject calculateBullet(JsonObject jsonData) throws IOException {
		
		//getting bullet radius
		int angle = jsonData.get("angle").getAsInt();
		
		double radiansAngle = angle * (Math.PI/180);
		double radius = (2*(BULLET_SPEED*BULLET_SPEED)*Math.sin(radiansAngle)*Math.cos(radiansAngle)) / GRAVITY_FORCE;
		
//		JsonObject click = jsonData.getAsJsonObject("click");
//		JsonObject player = jsonData.getAsJsonObject("player");
		
		double pCoordX = jsonData.get("playerX").getAsDouble();
		double pCoordY = jsonData.get("playerY").getAsDouble();
		
		double cCoordX = jsonData.get("targetX").getAsDouble();
		double cCoordY = jsonData.get("targetY").getAsDouble();
		
		
		double vx = (cCoordX - pCoordX);
		double vy = (cCoordY - pCoordY);
		
		double alfaDegree =(vy < 0  && vx < 0) || vx < 0 ? Math.toDegrees(Math.atan(vy / vx)) + 180 :  Math.toDegrees(Math.atan(vy / vx));
		double alfa = alfaDegree * (Math.PI/180);
		
		double senY = Math.sin(alfa)*radius;
		double cosx = Math.cos(alfa)*radius;
		
		double finalX =pCoordX + cosx;
		double finalY =pCoordY + senY;
		
		
		JsonObject point = new JsonObject();
		point.addProperty("coordX", finalX);
		point.addProperty("coordY", finalY);
		point.addProperty("angulo", alfa);
		
		//session.getBasicRemote().sendText(point.toString());
		return point;
	}
	
	private void movePlayer(JsonObject playerJ, String gameId, Session session) throws IOException {
		playerJ.addProperty("method", "movePlayer");
		playerJ.addProperty("gameID", gameId);
		notify(playerJ.toString(), session);
	}
	
	
	private void collide(JsonObject coord, String gameId, Session session) throws IOException {
		   
	    String collideIn = "water";
	    
	    int boatID = coord.get("boatID").getAsInt();
	    
	    int angle = coord.get("angle").getAsInt();
	    int boatHeight = coord.get("boatHeight").getAsInt();
	    
	    double bCoordX = coord.get("boatX").getAsDouble();
		double bCoordY = coord.get("boatY").getAsDouble();
		
	    double pCoordX = coord.get("collideX").getAsDouble();
		double pCoordY = coord.get("collideY").getAsDouble();
		
		double tCoordX = coord.get("targetX").getAsDouble();
		double tCoordY = coord.get("targetY").getAsDouble();
		
		
		double maxHeight = maxHeight(angle) / 100;
		JsonObject midPoint = midPoint(bCoordX, bCoordY, tCoordX, tCoordY);
		
		double midVectorMod = vecorMod(midPoint.get("coordX").getAsDouble(), midPoint.get("coordY").getAsDouble(), tCoordX, tCoordX);
		double collideVectorMod = vecorMod(pCoordX, pCoordY, tCoordX, tCoordY);
		
	    double currentMaxHeight = (collideVectorMod*maxHeight)/midVectorMod;
	    
	    if(currentMaxHeight >0 && currentMaxHeight <= boatHeight) {
	    	collideIn = "lateral";
	    } else if(currentMaxHeight > boatHeight && currentMaxHeight <= (boatHeight*1.5) ) {
	    	collideIn = "top";
	    }
		
	    	
	    JsonObject collideJ = new JsonObject();
		collideJ.addProperty("method", "collide");
		collideJ.addProperty("collideIn", collideIn);
		collideJ.addProperty("boatID", boatID);
		collideJ.addProperty("gameID", gameId);
		
		notify(collideJ.toString(),session);
		
	}
	
   
   private void fire(JsonObject bullet, String gameId, Session session) throws IOException {
		JsonObject point = calculateBullet(bullet);		
		bullet.addProperty("method", "fire");
		bullet.addProperty("gameID", gameId);
		bullet.addProperty("point", point.toString());
								
		notify(bullet.toString(), session);
	}
	
	private void notify(String json, Session session) throws IOException {
		for(Session se : session.getOpenSessions()) {
			try {
			se.getBasicRemote().sendText(json);
			} catch(Exception e) {}
		} 
	}

	@OnError
	public void onError(Throwable e) {
		e.printStackTrace();
	};

	@OnClose
	public void onClose() {
		System.out.println("conexión cerrada...");
	};
	
	private int vecorMod(double x1,double y1,double x2, double y2) {
		double fVX = (x2 - x1);
		double fVY = (y2 - y1);
		
		int vectorModCF = (int)Math.sqrt(fVX*fVX+fVY*fVY);
		
		return vectorModCF;
	}
	
	private JsonObject midPoint(double x1,double y1,double x2, double y2) {
		
		double fVX = (x1 + x2)/2;
		double fVY = (y1 + y2)/2;
		
		JsonObject point = new JsonObject();
		point.addProperty("coordX", fVX);
		point.addProperty("coordY", fVY);
		
		return point;
	}
	
	private double maxHeight(int angle) {
		double radiansAngle = angle * (Math.PI/180);
		double maxHeigh = (BULLET_SPEED*BULLET_SPEED*Math.pow(Math.sin(radiansAngle), 2)) /2*9.82;
		return maxHeigh;
	}
	


};