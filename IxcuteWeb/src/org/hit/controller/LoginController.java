package org.hit.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.hit.entity.User;
import org.hit.service.Impl.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("Login")
public class LoginController {
	
	@Autowired
	private LoginService loginService;
	
	@Autowired
	private User user;
	
    
	@RequestMapping("LoginServlet")
	public String loginUser(@RequestParam("psd") String pwd,@RequestParam("user") String name,
			@RequestParam("checkcode") String result,HttpServletRequest request) {

		user.setUname(name);
		user.setUpwd(pwd);
		User loginUser = loginService.selectloginbyname(user);
		String Correct = (String) request.getSession().getAttribute("CHECKCODE");
		System.out.println(name+"-"+pwd+"-"+result+"-"+Correct);
		
		if(loginUser != null&&result.equals(Correct)) {
			return "success";
		}else {
			return "redirect:/index.jsp";
		}
	}
	
	public void setLoginService(LoginService loginService) {
		this.loginService = loginService;
	}
}
