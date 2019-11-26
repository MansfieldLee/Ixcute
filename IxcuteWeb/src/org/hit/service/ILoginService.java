package org.hit.service;

import java.util.List;

import org.hit.entity.User;

public interface ILoginService {
	public void addUser(User user);
	
	public User selectloginbyname(String username);
	
	public void deleteUserbyname(String username);
	
	public List<User> findAllUser();
}
