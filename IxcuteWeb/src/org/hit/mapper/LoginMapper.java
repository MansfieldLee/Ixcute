package org.hit.mapper;

import org.hit.entity.User;

public interface LoginMapper {
	//public void addUser(User user);
	
	public User selectloginbyname(User user);
	
	//public User selectloginbyid(int id);
}
