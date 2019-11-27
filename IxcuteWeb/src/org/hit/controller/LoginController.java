package org.hit.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.hit.entity.User;
import org.hit.service.Impl.LivelihoodService;
import org.hit.service.Impl.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class LoginController {
	
	@Autowired
	private LoginService loginService;
	
	@Autowired
	private User user;
	
	
	@RequestMapping("/LoginServlet")
	@ResponseBody
	public int loginUser(@RequestParam("psd") String pwd,@RequestParam("user") String name,
			@RequestParam("checkcode") String result,HttpServletRequest request,HttpServletResponse response) throws IOException {
		user.setUsername(name);
		user.setUserpwd(pwd);
		User loginUser = loginService.selectloginbyname(name);
		HttpSession session = request.getSession();
		String Correct = (String) request.getSession().getAttribute("CHECKCODE");
		System.out.println(name + "-" + pwd + "-" + result + "-" + Correct);
		
		if(!result.equals(Correct)) {
			return 2;
		}
		System.out.println(loginUser);
		if (loginUser != null && result.equals(Correct)) {
			//success login!
			session.setAttribute("username", name);
			session.setAttribute("password",pwd);
	        Cookie usernameCookie = new Cookie("username",name);
	        usernameCookie.setMaxAge(500);
	        usernameCookie.setPath("/");
	        response.addCookie(usernameCookie);
	        
	        if(loginUser.getUsertype().equals("管理员")) {
	        	return 3;
	        }
			return 1;
		} else {
			return 0;//"redirect:/index.jsp";
		}
	}
	
	@RequestMapping("/loginOut")
	public String quitLogin(HttpServletRequest req,HttpServletResponse res) {
		Cookie cookie = new Cookie("username","");
		cookie.setMaxAge(0);
		cookie.setPath("/");
		res.addCookie(cookie);
		req.getSession().removeAttribute("username");
		req.getSession().removeAttribute("password");
		System.out.println("OK");
		return "redirect:index.jsp";
	}
	
	
	@RequestMapping("/Next")
	public String next() {
		return "main";
	}
	
	
	@RequestMapping("/registerServlet")
	@ResponseBody
	public int register(@RequestParam("name") String name,@RequestParam("pwd") String pwd,@RequestParam("authority") int authority,
			HttpServletRequest request,HttpServletResponse response) throws IOException {
		user.setUsername(name);
		user.setUserpwd(pwd);
		if(authority == 0) {
			user.setUsertype("管理员");
		}else {
			user.setUsertype("普通人员");
		}
		
		User user_res = loginService.selectloginbyname(name);
		System.out.println("registerServlet");
		if (user_res == null) {
			//add new user
			loginService.addUser(user);
			return 1;
		} else {
			return 0;
		}
	}
	
	
	@RequestMapping("/toAdmin")
	public String toAdmin() {
		System.out.println("toAdmin");
		return "manager";
	}
	
	
	@RequestMapping("/findServlet")
	@ResponseBody
	public User findUser(@RequestParam("uname") String name,
			HttpServletRequest request,HttpServletResponse response) throws IOException {

		User user_res = loginService.selectloginbyname(name);
		user.setUsername("");
		System.out.println(user_res);
		if (user_res != null) {
			return user_res;
		} else {
			return user;//"redirect:/index.jsp";
		}
	}
	
	
	@RequestMapping("/changeServlet")
	@ResponseBody
	public int changeUser(@RequestParam("old_name") String old_name,@RequestParam("new_name") String new_name,
			@RequestParam("upwd") String pwd,
			HttpServletRequest request,HttpServletResponse response) throws IOException {
		System.out.println(old_name + "-" + new_name + "-"+ pwd);
		User user_res = loginService.selectloginbyname(old_name);
		System.out.println(user_res);
		user.setUsername(new_name);
		user.setUserpwd(pwd);
		user.setUsertype(user_res.getUsertype());
		loginService.deleteUserbyname(old_name);
		loginService.addUser(user);
		return 1;
	}
    
	
	@RequestMapping("/deleteServlet")
	@ResponseBody
	public int deleteUser(@RequestParam("uname") String name,
			HttpServletRequest request,HttpServletResponse response) throws IOException {
		User user_res = loginService.selectloginbyname(name);
		if (user_res != null) {
			//删除一个用户
			loginService.deleteUserbyname(name);
			return 1;
		} else {
			return 0;
		}
	}
	
	@RequestMapping("/findAllUser")
	@ResponseBody
	public List<User> findAllUser(){
		List<User> allUser = loginService.findAllUser();
		return allUser;
	}
	
	@RequestMapping("/returnIndex")
	public String returnIndex() {
		return "redirect:index.jsp";
	}
	
	
	public void setLoginService(LoginService loginService) {
		this.loginService = loginService;
	}
}
