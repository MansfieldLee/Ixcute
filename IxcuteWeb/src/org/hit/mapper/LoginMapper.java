package org.hit.mapper;

import java.util.List;

import org.hit.entity.User;

public interface LoginMapper {
	public void addUser(User user);
	
	public User selectloginbyname(String username);
	
	public void deleteUserbyname(String username);
	
	public List<User> findAllUser();
	//public User selectloginbyid(int id);
}
