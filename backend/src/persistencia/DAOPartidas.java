package persistencia;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

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
		pstmt.setInt(2, p.getJugadores().jugadoresToList().get(0).getId());
		pstmt.setInt(3, p.getJugadores().jugadoresToList().get(1).getId());
		pstmt.setInt(4,  p.getCantPeces() - p.getFishFished());
		pstmt.setInt(5,  p.getTiempo());
		
		pstmt.executeUpdate();
		
		pstmt.close();
		con.close();
		
	}
	
	public Partida getPartida(int id) throws SQLException {
		
		Connection con = DriverManager.getConnection(url, user, password);
		
		String query = "SELECT tiempoRestante, pecesRestantes FROM partidas WHERE id = ?";
		
		PreparedStatement pstmt = con.prepareStatement(query);
		
		pstmt.setInt(1, id);
		
		ResultSet rs = pstmt.executeQuery();
		
		rs.next();
		
		Partida p = new Partida(id, rs.getInt(1), rs.getInt(2));
		
		rs.close();
		pstmt.close();
		con.close();
		
		return p;
	}
	
	public List<Integer> getIdJugadoresPartida(int id) throws SQLException {
		
		List<Integer> lista = new ArrayList<Integer>(2);
		
		Connection con = DriverManager.getConnection(url, user, password);
		
		String query = "SELECT (idJugador1, idJugador2) FROM partidas WHERE id = ?";
		
		PreparedStatement pstmt = con.prepareStatement(query);
		
		ResultSet rs = pstmt.executeQuery();
		
		rs.next();
		
		Integer id1 = rs.getInt(1);
		Integer id2 = rs.getInt(2);
		
		lista.add(id1);
		lista.add(id2);
		
		rs.close();
		pstmt.close();
		con.close();
		
		return lista;
	}
	
}
