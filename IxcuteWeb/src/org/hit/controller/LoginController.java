package org.hit.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.hit.entity.User;
import org.hit.service.Impl.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("Login")
public class LoginController {

	@Autowired
	private LoginService loginService;

	@Autowired
	private User user;

	@Autowired
	private ModelAndView mv; 
	
	@ResponseBody
	@RequestMapping("LoginServlet")
	public int loginUser(@RequestParam("upwd") String pwd, @RequestParam("uname") String name,
			@RequestParam("checkcode") String result, HttpServletRequest request) throws IOException {

		user.setUname(name);
		user.setUpwd(pwd);
		User loginUser = loginService.selectloginbyname(user);
		String Correct = (String) request.getSession().getAttribute("CHECKCODE");
		System.out.println(name + "-" + pwd + "-" + result + "-" + Correct);

		if (loginUser != null && result.equals(Correct)) {
			return 1;
		} else {
			return 0;
		}
	}

	public void setLoginService(LoginService loginService) {
		this.loginService = loginService;
	}



	public void setModelAndView(ModelAndView modelAndView) {
		this.mv = modelAndView;
	}
}
