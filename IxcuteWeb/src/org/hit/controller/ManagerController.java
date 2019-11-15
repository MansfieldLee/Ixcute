package org.hit.controller;

import java.io.IOException;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.hit.entity.User;
import org.hit.service.Impl.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ManagerController {
	
	@Autowired
	private LoginService loginService;
	
	@RequestMapping("/registerServlet")
	@ResponseBody
	public int register(@RequestParam("name") String name,@RequestParam("pwd") String pwd,
			HttpServletRequest request,HttpServletResponse response) throws IOException {

		
		
		
		User user_res = seletebyname(name);//TODO 

		if (user_res == null) {
			//TODO �����ݿ����һ�����û�
			
			
			
			return 1;
		} else {
			return 0;
		}
	}
	
	@RequestMapping("/FindServlet")
	@ResponseBody
	public User findUser(@RequestParam("uname") String name,
			HttpServletRequest request,HttpServletResponse response) throws IOException {

		User user_res = seletebyname(name);//TODO

		if (user_res != null) {
			return user_res;
		} else {
			return null;//"redirect:/index.jsp";
		}
	}
	
	@RequestMapping("/changeServlet")
	@ResponseBody
	public int changeUser(@RequestParam("old_name") String old_name,@RequestParam("new_name") String new_name,
			@RequestParam("upwd") String pwd,
			HttpServletRequest request,HttpServletResponse response) throws IOException {

		User user_res = seletebyname(old_name);//TODO*;

		if (user_res != null) {
			//TODO
			//�޸��û���Ϣ��old_name���޸�֮ǰ�����֣�new_name���޸�֮������֣�pwd���޸�֮�������
			
			return 1;
		} else {
			return 0;
		}
	}
	
	@RequestMapping("/deleteServlet")
	@ResponseBody
	public int deleteUser(@RequestParam("uname") String name,
			HttpServletRequest request,HttpServletResponse response) throws IOException {

		User user_res = seletebyname(name);//TODO;

		if (user_res != null) {
			//TODO
			//ɾ��һ���û�
			
			return 1;
		} else {
			return 0;
		}
	}
	
	public void setLoginService(LoginService loginService) {
		this.loginService = loginService;
	}
}

