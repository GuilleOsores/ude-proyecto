package persistencia;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import logica.colecciones.Jugadores;
import logica.entidades.Jugador;

public class DAOJugadores {
	
	private String url;
	private String user;
	private String password;
	
	public DAOJugadores(String url, String user, String password) {
		this.url = url;
		this.user = user;
		this.password = password;
	}
	
	public void borrarJugadores() throws SQLException {
		
		System.out.println("Borro jugadores");
		
		Connection con = DriverManager.getConnection(url, user, password);
		
		String query = "DELETE FROM jugadores";
		
		PreparedStatement pstmt = con.prepareStatement(query);

		pstmt.executeUpdate();
		
		pstmt.close();
		con.close();
	}
	
	public void guardarJugador(Jugador j) throws SQLException {
		
		Connection con = DriverManager.getConnection(url, user, password);
		
		String query = "INSERT INTO jugadores (id, nick, bando)" +
					   "VALUES (?, ?, ?)";
		
		PreparedStatement pstmt = con.prepareStatement(query);
		
		pstmt.setInt(1, j.getId());
		pstmt.setString(2, j.getNick());
		pstmt.setString(3, j.getBando());
		
		pstmt.executeUpdate();
		
		pstmt.close();
		con.close();
	}
	
	public Jugadores getJugadores() throws SQLException {
		
		Connection con = DriverManager.getConnection(url, user, password);
		
		String query = "SELECT * FROM jugadores";
		
		PreparedStatement pstmt = con.prepareStatement(query);
		
		ResultSet rs = pstmt.executeQuery();
		
		Jugadores jugadores = new Jugadores();
		
		while(rs.next()) {
			Jugador j = new Jugador(rs.getInt(1), rs.getString(2), rs.getString(3), null, 0);
			jugadores.put(j);
		}

		rs.close();
		pstmt.close();
		con.close();
		
		return jugadores;
	}
	
	public Jugador getJugador(int id) throws SQLException {
		
		Connection con = DriverManager.getConnection(url, user, password);
		
		String query = "SELECT nick, bando FROM jugadores WHERE id = ?";
		
		PreparedStatement pstmt = con.prepareStatement(query);
		
		pstmt.setInt(1, id);
		
		ResultSet rs = pstmt.executeQuery();
		
		rs.next();
		
		Jugador j = new Jugador(id, rs.getString(1), rs.getString(2), null, 0);
		
		rs.close();
		pstmt.close();
		con.close();
		
		return j;
	}

}
