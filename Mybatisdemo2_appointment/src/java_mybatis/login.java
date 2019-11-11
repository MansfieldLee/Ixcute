package java_mybatis;

public class login {
	private int id;
	private String username;
	private String userpwd;
	private String usertype;
	
	public login() {
	}
	public login(int id, String username, String userpwd, String usertype) {
		this.id = id;
		this.username = username;
		this.userpwd = userpwd;
		this.usertype = usertype;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
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
	public void setUserpwd(String userpwd) {
		this.userpwd = userpwd;
	}
	public String getUsertype() {
		return usertype;
	}
	public void setUsertype(String usertype) {
		this.usertype = usertype;
	}
	
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return this.id+"--"+this.username+"--"+this.usertype;
	}
}
