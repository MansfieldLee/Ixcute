package org.hit.entity;

public class User {

	private String username;
	private String userpwd;
	private String usertype;
	
	
	public User() {

	}
	public User(String username, String userpwd, String usertype) {
		super();
		this.username = username;
		this.userpwd = userpwd;
		this.usertype = usertype;
	}
	@Override
	public String toString() {
		return "User [username=" + username + ", userpwd=" + userpwd + ", usertype=" + usertype + "]";
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getUserpwd() {
		return userpwd;
	}

	public void setUserpwd(String userped) {
		this.userpwd = userped;
	}

	public String getUsertype() {
		return usertype;
	}

	public void setUsertype(String usertype) {
		this.usertype = usertype;
	}
	
}
