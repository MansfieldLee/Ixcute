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
		user.setUname(name);
		user.setUpwd(pwd);
		User loginUser = loginService.selectloginbyname(user);
		HttpSession session = request.getSession();
		String Correct = (String) request.getSession().getAttribute("CHECKCODE");
		System.out.println(name + "-" + pwd + "-" + result + "-" + Correct);
		
		if(!result.equals(Correct)) {
			return 2;
		}
		
		if (loginUser != null && result.equals(Correct)) {
			//success login!
			session.setAttribute("username", name);
			session.setAttribute("password",pwd);
	        Cookie usernameCookie = new Cookie("username",name);
	        usernameCookie.setMaxAge(500);
	        usernameCookie.setPath("/");
	        response.addCookie(usernameCookie);
	        //response.sendRedirect("index.jsp");
			return 1;
		} else {
			return 0;//"redirect:/index.jsp";
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
	
	public void setLoginService(LoginService loginService) {
		this.loginService = loginService;
	}
}
