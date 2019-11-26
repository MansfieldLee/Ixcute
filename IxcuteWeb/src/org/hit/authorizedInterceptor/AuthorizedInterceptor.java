package org.hit.authorizedInterceptor;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.hit.entity.User;
import org.hit.service.Impl.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

@Component
public class AuthorizedInterceptor implements HandlerInterceptor{
	
	@Autowired
	private LoginService loginService;


    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object o) throws Exception {
    	Cookie[] cookies = request.getCookies();
		String uri = request.getRequestURI();
		PrintWriter out = null;
		System.out.println("uri:"+uri);
		System.out.println(request.getParameter("user") + "-" +request.getParameter("psd") + "-"+request.getParameter("checkcode"));
		if(uri.equals("/IxcuteWeb/LoginServlet"))
		{
			return true;
		}
		HttpSession session = request.getSession(false);
		if(session==null) {
			if(request.getHeader("x-requested-with") != null && request.getHeader("x-requested-with").equalsIgnoreCase("XMLHttpRequest")) {
				out = response.getWriter();
				out.print("loseToken");
				out.flush();
			}else
			{
				response.sendRedirect("/IxcuteWeb/index.jsp");
			}
			return false;
		}
		String sessionId = session.getId();
		for(Cookie cookie:cookies) {
			if(cookie.getName().equals("JSESSIONID")) {
				if(!cookie.getValue().equals(sessionId)) {
					if(request.getHeader("x-requested-with") != null && request.getHeader("x-requested-with").equalsIgnoreCase("XMLHttpRequest")) {
						out = response.getWriter();
						out.print("loseToken");
					}else {		
						response.sendRedirect("/IxcuteWeb/index.jsp");
					}
					return false;
				}
			}
		}
		User user;
		if((String)session.getAttribute("username")!=null) {
			user = loginService.selectloginbyname((String)session.getAttribute("username"));
		}else {
			if(request.getHeader("x-requested-with") != null && request.getHeader("x-requested-with").equalsIgnoreCase("XMLHttpRequest")) {
				out = response.getWriter();
				out.print("loseToken");
			}else {
				response.sendRedirect("/IxcuteWeb/index.jsp");
			}
			return false;
		}
		
		if(user == null) {
			if(request.getHeader("x-requested-with") != null && request.getHeader("x-requested-with").equalsIgnoreCase("XMLHttpRequest")) {
				out = response.getWriter();
				out.print("loseToken");
			}else {
				response.sendRedirect("/IxcuteWeb/index.jsp");

			}
			return false;
		}else {
			if(!user.getUserpwd().equals((String)session.getAttribute("password"))) {
			if(request.getHeader("x-requested-with") != null && request.getHeader("x-requested-with").equalsIgnoreCase("XMLHttpRequest")) {
				out = response.getWriter();
				out.print("loseToken");
			}else {
				response.sendRedirect("/IxcuteWeb/index.jsp");
			}
			return false;
			}
		}
		
		return true;
		
    }



	public void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, ModelAndView modelAndView) throws Exception{
	}
	
	 public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) throws Exception {
	    }

	
}
