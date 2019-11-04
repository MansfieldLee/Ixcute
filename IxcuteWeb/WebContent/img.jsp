<%@ page import="java.util.Random" %>
<%@ page import="java.awt.*" %>
<%@ page import="java.awt.image.*" %>
<%@ page import="javax.imageio.ImageIO" %>
<%@ page language="java" contentType="image/jpeg; charset=UTF-8"%>

<%!
	public Color getColor(){
		Random ran = new Random();
		int r = ran.nextInt(256);
		int b = ran.nextInt(256);
		int g = ran.nextInt(256);
		return new Color(r,g,b);
	}
	
	public String getNum(){
		int ran = (int)(Math.random()*9000) + 1000;
		return String.valueOf(ran);
	}
	
%>

<%
	response.setHeader("Pragma","no-cache");
	response.setHeader("Cache_control","no-cache");
	response.setHeader("Expires","0");
	
	BufferedImage image = new BufferedImage(80,30,BufferedImage.TYPE_INT_RGB);
	
	Graphics graphics = image.getGraphics();
	graphics.fillRect(0,0,80,30);
	
	graphics.setFont(new Font("seif",Font.BOLD,20));
	graphics.setColor(Color.GRAY);
	String checkCode = getNum();
	StringBuffer sb = new StringBuffer();
	for(int i=0;i <checkCode.length();i++)
	{
		sb.append(checkCode.charAt(i)+" ");
	}
	
	graphics.drawString(sb.toString(), 15, 20);
	
	for(int i=0;i<25;i++)
	{
		Random ran = new Random();
		int xbegin = ran.nextInt(80);
		int ybegin = ran.nextInt(30);
		
		int xend = ran.nextInt(xbegin + 10);
		int yend = ran.nextInt(ybegin + 10);
		
		graphics.setColor(getColor());
		graphics.drawLine(xbegin,ybegin,xend,yend);
	}

	
	session.setAttribute("CHECKCODE", checkCode);
	
	ImageIO.write(image,"jpeg",response.getOutputStream());
	
	out.clear();
	out = pageContext.pushBody();
	
%>	