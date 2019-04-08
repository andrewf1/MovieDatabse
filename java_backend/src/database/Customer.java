package database;

public class Customer {
//Data members
	String email;
	String fname;
	String lname;
	String dob;
	String password;
	String address;
	
//Constructor	
	public Customer (String fname, String lname, String email, String dob, String address, String password) {
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.dob = dob;
		this.address = address;
		this.password = password;
	}

//Accessors	
	public String getFname() {
		return fname;
	}
	
	public String getLname() {
		return lname;
	}
	
	public String getEmail() {
		return email;
	}
	
	public String getDob() {
		return dob;
	}
	
	public String getAddress() {
		return address;
	}
	
	public String getPassword() {
		return password;
	}
	

}
