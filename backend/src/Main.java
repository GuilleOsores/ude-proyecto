import java.io.FileInputStream;
import java.util.Properties;

import logica.Fachada;
import logica.colecciones.Jugadores;
import logica.colecciones.Vehiculos;
import logica.entidades.Jugador;
import logica.entidades.Partida;
import logica.entidades.Patrulla;
import logica.entidades.Pesquero;
import logica.entidades.Vehiculo;
import persistencia.DAOBarcos;
import persistencia.DAOJugadores;
import persistencia.DAOPartidas;

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
			
			Fachada fachada = Fachada.getInstanceFachada();

//			=============PRUEBA GUARDAR PARTIDA COMPLETA===================
			
//			Vehiculo v11 = new Patrulla("grande");
//			Vehiculo v12 = new Patrulla("chica");
//			
//			Vehiculos ve1 = new Vehiculos();
//			ve1.put(v11);
//			ve1.put(v12);
//			
//			Jugador j1 = new Jugador(1, "jug1", ve1, 0);
//			
//			Vehiculo v21 = new Pesquero("fabrica");
//			Vehiculo v22 = new Pesquero("comun");
//			
//			Vehiculos ve2 = new Vehiculos();
//			ve2.put(v21);
//			ve2.put(v22);
//			
//			Jugador j2 = new Jugador(2, "jug2", ve2, 0);
//			
//			Jugadores jug = new Jugadores();
//			jug.put(j1);
//			jug.put(j2);
//			
//			Partida par = new Partida(1, jug, 3200, 3200, 600, 600, 1000, 0);
//			
//			fachada.setPartida(par);
//			
//			fachada.guardarPartida();
//			
//			==================================================================
			
//			Partida p = new Partida();
//			
//			Jugador j = new Jugador(1, "ñaña", null, 0);
//			Jugador j2 = new Jugador(2, "lala", null, 0);
//			
//			Jugadores jug = new Jugadores();
//			jug.put(j2);
//			jug.put(j);
//			
//			p.setId(1);
//			p.setJugadores(jug);
//			p.setTamanioEscenarioX(150);
//			p.setTamanioEscenarioY(300);
//			p.setMillasPesca(1000);
//			p.setTiempo(200);
//			p.setCantPeces(100);
//			p.setFishFished(0);
			
//			daoPartidas.guardarPartida(p);
			
		} catch (Exception e) {
			System.out.println("Exception");
			e.printStackTrace();
		}
	}

}
