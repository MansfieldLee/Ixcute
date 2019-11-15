package org.hit.service.Impl;

import org.hit.entity.User;
import org.hit.mapper.LoginMapper;
import org.hit.service.ILoginService;

public class LoginService implements ILoginService{

	private LoginMapper loginMapper;
	
	public LoginMapper getLoginMapper() {
		return loginMapper;
	}
	
	public void setLoginMapper(LoginMapper loginMapper) {
		this.loginMapper = loginMapper;
	}
	
	
	public User selectloginbyname(String username) {
		return loginMapper.selectloginbyname(username);
	}

	public void addUser(User user) {
		loginMapper.addUser(user);
	}
	
	public void deleteUser(String username) {
		loginMapper.deleteUserbyname(username);
	}

}
