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
	
	
	public User selectloginbyname(User user) {
		return loginMapper.selectloginbyname(user);
	}

}
