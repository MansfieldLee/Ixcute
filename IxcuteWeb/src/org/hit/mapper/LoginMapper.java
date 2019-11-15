package org.hit.mapper;

import org.hit.entity.User;

public interface LoginMapper {
	public void addUser(User user);
	
	public User selectloginbyname(String username);
	
	public void deleteUserbyname(String username);
	
	//public User selectloginbyid(int id);
}
