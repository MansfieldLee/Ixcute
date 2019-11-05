package Servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class CheckCodeServlet extends HttpServlet {
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		this.doPost(request, response);
	}
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String result = null;
		String Input = request.getParameter("checkcode");
		String Correct = (String) request.getSession().getAttribute("CHECKCODE");
		
		if(Input.equals(Correct)) 
			result = "right";
		else
			result = "wrong";
		
		response.setContentType("text/html;charset=UTF-8");
		response.getWriter().write(result);
		response.getWriter().flush();
		response.getWriter().close();
	}
}

