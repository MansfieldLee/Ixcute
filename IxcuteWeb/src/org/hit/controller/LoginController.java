package org.hit.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("Login")
@Controller
public class LoginController {
	
	@RequestMapping("queryUserByNo/{stuno}")
	public String queryUser(@PathVariable("stuno") Integer	stuno) {
		
		
		return "";
	}
}
