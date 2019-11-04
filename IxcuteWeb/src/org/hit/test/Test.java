package org.hit.test;

import org.hit.entity.User;
import org.hit.service.ILoginService;
import org.hit.service.Impl.LoginServiceImpl;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {
	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		ILoginService loginService = (LoginServiceImpl)context.getBean("userService");
		User user  = new User();
		user.setId(11);
		user.setUname("lxs");
		user.setUpwd("123434325");
		user.setUtype("π‹¿Ì‘±");
		loginService.addUser(user);
	}
}
