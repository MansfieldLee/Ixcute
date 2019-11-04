package org.hit.entity;

public class User {
	private int id;
	private String uname;
	private String upwd;
	private String utype;
	
	public User() {

	}
	public User(int id, String uname, String upwd, String utype) {
		super();
		this.id = id;
		this.uname = uname;
		this.upwd = upwd;
		this.utype = utype;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUname() {
		return uname;
	}
	public void setUname(String uname) {
		this.uname = uname;
	}
	public String getUpwd() {
		return upwd;
	}
	public void setUpwd(String upwd) {
		this.upwd = upwd;
	}
	public String getUtype() {
		return utype;
	}
	public void setUtype(String utype) {
		this.utype = utype;
	}
}
