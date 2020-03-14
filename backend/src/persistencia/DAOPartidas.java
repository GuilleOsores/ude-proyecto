package persistencia;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import logica.entidades.Partida;

public class DAOPartidas {

	private String url;
	private String user;
	private String password;
	
	public DAOPartidas(String url, String user, String password) {
		this.url = url;
		this.user = user;
		this.password = password;
	}
	
	public void guardarPartida(Partida p) throws SQLException {
		
		Connection con = DriverManager.getConnection(url, user, password);
		
		String query = "INSERT INTO partidas (id, idJugador1, idJugador2, pecesRestantes, tiempoRestante)" + 
					   "VALUES (?, ?, ?, ?, ?)";
		
		PreparedStatement pstmt = con.prepareStatement(query);
		
		pstmt.setInt(1, p.getId());
		pstmt.setInt(2, p.getJugadores().jugadoresToList().get(1).getId());
		pstmt.setInt(3, p.getJugadores().jugadoresToList().get(2).getId());
		pstmt.setInt(4,  p.getCantPeces() - p.getFishFished());
		
		
	}
	
}
