package org.hit.controller;

import org.hit.entity.User;
import org.hit.service.Impl.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("Login")
public class LoginController {
	
	@Autowired
	private LoginService loginService;
	
	@RequestMapping("loginUser")
	public String loginUser(User user) {
		System.out.println(user.getUname()+"-"+user.getUpwd()+"-"+user.getId());
		User loginUser = loginService.selectloginbyname(user);
		if(loginUser != null) {
			return "success";
		}else {
			return "redirect:/index.jsp";
		}
	}
	
	@RequestMapping("test")
	public String test() {
		return "success";
	}
	
	public void setLoginService(LoginService loginService) {
		this.loginService = loginService;
	}
}
