package database;
import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.File;
import java.io.PrintWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Date;

//Each client connection will be managed in a dedicated Thread, so 
public class HTTPServer implements Runnable{
	static final File WEB_ROOT = new File (".");
	static final String DEFAULT_FILE = "index.html";
	static final String FILE_NOT_FOUND = "404.html";
	static final String METHOD_NOT_FOUND = "not_supported.html";
	
	//port to listen to connection
	static final int PORT = 8080; //This can be changed if my vue.js server is running on this port
	
	//verbose mode
	static final boolean verbose = true;
	
	//client connection via Socket Class
	private Socket connect;
	
	public HTTPServer(Socket c) {
		connect = c;
		
	}
	
	public static void main(String[] args) {
		try {
			ServerSocket serverConnect = new ServerSocket(PORT);
			System.out.println("Server started \nListening for connections on port" + PORT);
			
			//we listen until user halts server execution
			while(true) {
				HTTPServer myServer = new HTTPServer(serverConnect.accept());
				
				if(verbose) {
					System.out.println("Connection opened. (" + new Date() + ")");
				}
				
				//create dedicated thread to manage the client connection
				Thread thread = new Thread(myServer);
				thread.start();
			}
	} catch (IOException e) {
		System.err.println("Server Connection error " + e.getMessage());
		}
	}

	@Override
	public void run() {
		// TODO Auto-generated method stub
		
	}
		
}
