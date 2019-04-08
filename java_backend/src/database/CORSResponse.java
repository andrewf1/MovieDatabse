package database;

import javax.ws.rs.container.ContainerResponseFilter;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;

import org.glassfish.jersey.server.ContainerRequest;
import org.glassfish.jersey.server.ContainerResponse;



public class CORSResponse implements ContainerResponseFilter{

	 @Override
	    public ContainerResponse filter(ContainerRequest req, ContainerResponse contResp) {
	 
	        ResponseBuilder resp = Response.fromResponse(contResp.getResponse());
	        resp.header("Access-Control-Allow-Origin", "*")
	                .header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
	 
	        String reqHead = req.getHeaderValue("Access-Control-Request-Headers");
	 
	        if(null != reqHead && !reqHead.equals("")){
	            resp.header("Access-Control-Allow-Headers", reqHead);
	        }
	 
	        contResp.setResponse(resp.build());
	            return contResp;
	    }

}
