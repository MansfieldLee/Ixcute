package org.hit.service;

import org.hit.entity.User;

public interface ILoginService {
	public void addUser(User user);
	
	public User selectloginbyname(String username);
	
	//public User selectloginbyid(int id);
}
