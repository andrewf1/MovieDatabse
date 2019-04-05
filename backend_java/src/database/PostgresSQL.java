package database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

// referenced from postgrestutorial.com
public class PostgresSQL {
	// might have to add port number to url (5432) <database_host>:<port>
	private final String url = "jdbc:postgresql://localhost:5432/movie_db";
	private final String user = "postgres";
	private final String password = "password";
	
	 public Connection connect() {
	        Connection connection = null;
	        try {
	            connection = DriverManager.getConnection(url, user, password);
	            System.out.println("Connected to the PostgreSQL server successfully.");
	        } catch (SQLException ex) {
	            System.out.println(ex.getMessage());
	        }
	 
	        return connection;
	    }
   public static void main(String[] args) {
	   PostgresSQL app = new PostgresSQL();
	   app.connect();
   }
}
