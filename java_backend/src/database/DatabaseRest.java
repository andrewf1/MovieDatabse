package database;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;


@Path("/test")
public class DatabaseRest {
			
						
	@GET
	@Produces(MediaType.TEXT_PLAIN)
	@Path("{name}")
	public String test(@Context HttpHeaders httpheaders, @PathParam("name") String name) {
		String g ="Hello "+name;
		
		return g;
		
	}
	

}
