package org.hit.controller;

import java.io.IOException;
import java.util.HashMap;
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
	private LivelihoodService livelihoodService;
	
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
	
	
	
	@RequestMapping(value="/Next")
	public String Next() {
//		System.out.println("QueryByProperties");
//		Map map = new HashMap<String, Integer>();
//		map.put("begin_time","2018-10-20");
//		map.put("end_time","2018-10-31");
//		Map result = livelihoodService.queryDataPropertiesByDate(map);
		
		String month = "08";
		Map result = livelihoodService.queryKindByMonth(month);
		
		
		System.out.println(result);
		return "next";
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
		
		User user_res = loginService.selectloginbyname(old_name);//TODO*;
		user.setUsername(new_name);
		user.setUserpwd(pwd);
		user.setUsertype(user_res.getUsertype());
		if (user_res != null) {
			//TODO
			//修改用户信息，old_name是修改之前的名字，new_name是修改之后的名字，pwd是修改之后的密码
			loginService.deleteUser(old_name);
			loginService.addUser(user);
			return 1;
		} else {
			return 0;
		}
	}
    
	public void setLoginService(LoginService loginService) {
		this.loginService = loginService;
	}
}
