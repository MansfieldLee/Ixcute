
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Ixcute</title>

<!-- <script src="http://www.jq22.com/jquery/jquery-1.10.2.js"></script> -->
<script type="text/javascript" src="Pages/JS/jquery.js"></script>

<link rel='stylesheet' type='text/css' href='Pages/CSS/Login.css'/>
	<script type="text/javascript">
	
		function reloadcc(){
			$("img").attr("src", "img.jsp?t="+(new Date().getTime()));
		}
		
	</script>
	
</head>

<body>
    <div id='small_body'>
        <div id='head'>
            <div id='logo'>
                <div>
                    <h1>Ixcute<h1/>
                </div>
                <div>
                    <pre>数据生活   智能行政</pre>
                </div>
            </div>
            <div id='form'>
                <div>
                    <h2 id='login_title'>Ixcute登录</h2>
                </div>
                <div>
                    <form action="Login/LoginServlet" method="post">
                    	<table >
                          <tr>
                            <td class='form_list' colspan='2'>账户</td>
                          </tr>
                          <tr>
                            <td class='form_list' colspan='2'><input type='text' name='user' id='user' placeholder="请输入用户名" 
                            /></td>
                          </tr>
                          <tr>
                            <td class='form_list' colspan='2'>密码</td>
                          </tr>
                          <tr>
                            <td class='form_list' colspan='2'><input type='password' name='psd'  id='psd' placeholder="请输入密码" 
                            /></td>
                          </tr>
                          <tr>
                            <td class='form_list' colspan='2'>验证码</td>
                          </tr>
                          <tr>
                            <td class='form_list' colspan='2'>
                            	<input type='text' name='checkcode' id='checkcode' placeholder="验证码" ><a href="javascript:reloadcc();"><img  src="img.jsp" id="codepicture"></a><span id="tip"></span>
                            </td>
                          </tr>
                          <tr>
                            <td class='form_list' colspan='2'><input type='submit' value="登录""/></td>
                          </tr>
                        </table>

                    </form>
                </div>
                <div>
                	<p><a href='../Reg/reg.html'><span id='reg'>马上注册</span></a><a href='#'><span id='forget'> 忘记密码？</span></a></p>
                </div>
            </div>
        </div>
        <div id='footer'>
        	<p>
            <a href='#'>意见反馈</a>&nbsp;|&nbsp;<a href='#'>联系我们</a>&nbsp;|&nbsp;<a href='#'>民事活动</a>&nbsp;|&nbsp;
            <a href='#'>政府决策</a>&nbsp;|&nbsp;<a href='#'>两会在线了解</a>
            </p>
            <p>Copyright &copy; 2019 Ixcute.All Rights Reserved.</p>
            <p>Version 1.0 &reg;2019.9.17</p>
        </div>
    </div>
</body>
</html>
