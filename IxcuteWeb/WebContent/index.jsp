<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>Ixcute</title>
<script type="text/javascript" src="Pages/JS/jquery-3.4.1.js"></script>
<link rel='stylesheet' type='text/css' href='Pages/CSS/Login.css'/>
	<script type="text/javascript">
	
		function reloadcc(){
			$("img").attr("src", "img.jsp?t="+(new Date().getTime()));
		}
		
		var xmlhttp;
		function loadCheck(){
			var uname=document.getElementById('user').value;
			var pword=document.getElementById('psd').value;
			var yzm=document.getElementById('checkcode').value;
			if(uname.length==0||pword.length==0){alert("账号或密码为空");return;}
			if(yzm.length==0){alert('验证码不能为空');return;}
			if (window.XMLHttpRequest) {xmlhttp=new XMLHttpRequest();}
			else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}	
			xmlhttp.onreadystatechange=getResult;
			xmlhttp.open("POST","LoginServlet",true);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.send("user="+uname+"&psd="+pword+"&checkcode="+yzm);		
		}
		
		function getResult(){
			if (xmlhttp.readyState==4) {	
				if(xmlhttp.status==200){
					var rec=xmlhttp.responseText;
					if(rec==1){
						window.location.href="Next";
					}
					else if(rec==2){
						alert('验证码错误');
					}else if(rec==3){
						window.location.href="toAdmin";
					}else{
						alert('账号或者密码错误');
					}
				}
				else{
					alert("连接失败");
				}
			}
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
                    <form action="LoginServlet" method="post">
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
                            <td class='form_list' colspan='2'><input type="button" value="登录" id='login' onclick="loadCheck();"/></td>
                          </tr>
                        </table>

                    </form>
                </div>
            </div>
        </div>
        <div id='footer'>
            <p>Copyright &copy; 2019 Ixcute.All Rights Reserved.</p>
            <p>Version 1.0 &reg;2019.9.17</p>
        </div>
    </div>
</body>
</html>
