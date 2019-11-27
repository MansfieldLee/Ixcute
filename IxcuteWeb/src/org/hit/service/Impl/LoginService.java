package org.hit.service.Impl;

import java.util.List;

import org.hit.entity.MD5salt;
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
		User user = loginMapper.selectloginbyname(username);
//		String pwd = user.getUserpwd();
//		MD5salt.setQueriedHash(pwd);
//		String realPwd = MD5salt.Get_MD5salt(pwd, 0);
//		user.setUserpwd(realPwd);
		return user;
	}
	
	public List<User> findAllUser(){
		return loginMapper.findAllUser();
	}
	
	public void addUser(User user) {
//		String pwd = user.getUserpwd();
//		String afterSalt = MD5salt.Get_MD5salt(pwd, 1);
//		user.setUserpwd(afterSalt);
		loginMapper.addUser(user);
	}

	public void deleteUserbyname(String username) {
		loginMapper.deleteUserbyname(username);
	}

}
