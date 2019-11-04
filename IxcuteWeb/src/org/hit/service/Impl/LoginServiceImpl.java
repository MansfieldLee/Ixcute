package org.hit.service.Impl;

import org.hit.entity.User;
import org.hit.mapper.LoginMapper;
import org.hit.service.ILoginService;

public class LoginServiceImpl implements ILoginService {
	private LoginMapper loginMapper;
	
	public LoginMapper getLoginMapper() {
		return loginMapper;
	}

	public void setLoginMapper(LoginMapper loginMapper) {
		this.loginMapper = loginMapper;
	}

	public void addUser(User user) {
		//dao
		loginMapper.addUser(user);
	}
	

}
