package org.hit.authorizedInterceptor;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

public class AuthorizedInterceptor implements HandlerInterceptor{
	
	//@Autowired
	//private UserService userService;


    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object o) throws Exception {
    	Cookie[] cookies = request.getCookies();
		String uri = request.getRequestURI();
		System.out.println("uri:"+uri);
		if(uri.equals("/IxcuteWeb/LoginServlet"))
		{
			return true;
		}
		HttpSession session = request.getSession(false);
		if(session==null) {
			response.sendRedirect("/IxcuteWeb/index.jsp");
			return false;
		}
		String sessionId = session.getId();
		System.out.println(sessionId);
		for(Cookie cookie:cookies) {
			if(cookie.getName().equals("JSESSIONID")) {
				if(!cookie.getValue().equals(sessionId)) {
					response.sendRedirect("/IxcuteWeb/index.jsp");
					return false;
				}
			}
		}
		return true;
		
    }



	public void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, ModelAndView modelAndView) throws Exception{
		System.out.println("postHandle");
	}
	
	 public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) throws Exception {
	        System.out.println("进入了afterCompletion方法！！！！");
	    }

	
}
