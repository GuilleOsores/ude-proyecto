package persistencia;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import logica.entidades.Vehiculo;
import logica.colecciones.Vehiculos;
import logica.entidades.Patrulla;
import logica.entidades.Pesquero;

public class DAOBarcos {
	
	private String url;
	private String user;
	private String password;
	
	public DAOBarcos(String url, String user, String password) {
		
		this.url = url;
		this.user = user;
		this.password = password;
	}
	
	public void borrarBarcos() throws SQLException {
		
		System.out.println("Borro barcos");
		
		Connection con = DriverManager.getConnection(url, user, password);
		
		String query = "DELETE FROM barcos";
		
		PreparedStatement pstmt = con.prepareStatement(query);

		pstmt.executeUpdate();
		
		pstmt.close();
		con.close();
	}
	
	public void guardarVehiculo(Vehiculo v, int idJugador) throws SQLException {
		
		Connection con = DriverManager.getConnection(url, user, password);
		
		String query = 	"INSERT INTO barcos (id, idJugador, posicionX, posicionY, tipo, tipoBarco, vida, cantPescados, combustible, initialRotation) "
					  + "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
		
		PreparedStatement pstmt = con.prepareStatement(query);
		
		pstmt.setInt(1, v.getId());
		pstmt.setInt(2, idJugador);
		pstmt.setFloat(3, v.getX());
		pstmt.setFloat(4, v.getY());
		pstmt.setString(5, v.getTipo());
		pstmt.setString(6, v.getTipo().equals("pesquero") ? ((Pesquero) v).getTipoPesquero() : ((Patrulla) v).getTipoPatrulla());
		pstmt.setFloat(7, v.getTipo().equals("pesquero") ? ((Pesquero) v).getVida() : -1);
		pstmt.setInt(8, v.getTipo().equals("pesquero") ? ((Pesquero) v).getCantPesca() : -1);
		pstmt.setFloat(9, v.getTipo().equals("pesquero") ? -1 : ((Patrulla) v).getCombustible());
		pstmt.setFloat(10, v.getInitialRotation());
		
		pstmt.executeUpdate();
		
		pstmt.close();
		con.close();
		
	}
	
	public Vehiculos getVehiculosJugador(int idJugador) throws SQLException {
		
		Vehiculos vehiculos = new Vehiculos();
		
		Connection con = DriverManager.getConnection(url, user, password);
		
		String query = "SELECT * FROM barcos WHERE idJugador = ?";
		
		PreparedStatement pstmt = con.prepareStatement(query);
		
		pstmt.setInt(1, idJugador);
		
		ResultSet rs = pstmt.executeQuery();
		
		while(rs.next()) {
			
			Vehiculo v = null;
			
			int id = rs.getInt("id");			
			int posicionX = rs.getInt("posicionX");
			int posicionY = rs.getInt("posicionY");
			String tipo = rs.getString("tipo");
			String tipoBarco = rs.getString("tipoBarco");
			float initialRotation = rs.getFloat("initialRotation");
			
			if(tipo.equals("patruya")) {
				float combustible = rs.getFloat("combustible");		
				v = new Patrulla(id, posicionX, posicionY, tipo, tipoBarco, initialRotation, combustible);
			} else {
				float vida = rs.getFloat("vida");
				int cantPescados = rs.getInt("cantPescados");
				v = new Pesquero(id, posicionX, posicionY, vida, tipo, tipoBarco, cantPescados, initialRotation);
			}
			
			vehiculos.put(v);
		}
		
		rs.close();
		pstmt.close();
		con.close();
		
		return vehiculos;
	}
	
	public Vehiculo getVehiculo(int id, int idJugador) throws SQLException {
		
		Vehiculo v = null;
		
		Connection con = DriverManager.getConnection(url, user, password);
		
		String query = "SELECT * FROM barcos WHERE id = ? AND idJugador = ?";
		
		PreparedStatement pstmt = con.prepareStatement(query);
		
		pstmt.setInt(1, id);
		pstmt.setInt(2, idJugador);
		
		ResultSet rs = pstmt.executeQuery();
		
		rs.next();
		
		int x = (int) rs.getFloat("posicionX");
		int y = (int) rs.getFloat("posicionY");
		String tipo = rs.getString("tipo");
		String tipoBarco = rs.getString("tipoBarco");
		float initialRotation = rs.getFloat("initialRotation");
		
		if(tipo.equals("pesquero")) {
			float vida = rs.getFloat("vida");
			int cantPesca = rs.getInt("cantPescados");
			
			v = new Pesquero(id, x, y, vida, tipo, tipoBarco, cantPesca, initialRotation);
		} else {
			float combustible = rs.getFloat("combustible");
			
			v = new Patrulla(id, x, y, tipo, tipoBarco, initialRotation, combustible);
		}
		
		
		return v;
	}
	
}
