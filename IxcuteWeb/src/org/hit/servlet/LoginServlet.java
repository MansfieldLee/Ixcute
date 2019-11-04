package org.hit.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class LoginServlet
 */
public class LoginServlet extends HttpServlet {


	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		String result = null;
		String Input = request.getParameter("checkcode");
		System.out.println(Input);
		String Correct = (String) request.getSession().getAttribute("CHECKCODE");
		System.out.println(Correct);
		if(Input.equals(Correct)) {
			result = "right";
		}
		else{
			result = "wrong";
		}
		response.setContentType("text/html;charset=UTF-8");
		response.getWriter().write(result);
		response.getWriter().flush();
		response.getWriter().close();
		
	
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
