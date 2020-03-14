import java.io.FileInputStream;
import java.util.Properties;

import logica.colecciones.Vehiculos;
import logica.entidades.Jugador;
import persistencia.DAOJugadores;

public class Main {

	public static void main(String[] args) {
		
		try {
			Properties prop = new Properties();
			prop.load(new FileInputStream("config/config.properties"));
		
			String driver = prop.getProperty("db_driver");
			String host = prop.getProperty("db_server");
			String port = prop.getProperty("db_port");
			String database = prop.getProperty("db_database");
			
			String url = "jdbc:mysql://" + host + ":" + port + "/" + database;
			String user = prop.getProperty("db_user");
			String password = prop.getProperty("db_password");
		
			Class.forName(driver);
			
			DAOJugadores daoJugadores = new DAOJugadores(url, user, password);
			
			Jugador j = daoJugadores.getJugador(2);
			
			System.out.println(j.getNick());
			
		} catch (Exception e) {
			System.out.println("Exception");
			e.printStackTrace();
		}
	}

}
