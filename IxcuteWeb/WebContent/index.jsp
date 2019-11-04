<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>

<a href="Login/queryUserByNo/1">查询学生</a>

<script type="text/javascript" src="jquery-3.4.1.js">
	</script>
	<script type="text/javascript">
		$(document).ready(function(){
			$("#checkcodeID").blur(function(){
				var $checkcode = $("#checkcodeID").val();
				$.post(
						"LoginServlet",
						{"checkcode":$checkcode},
						function(result){
							$("#tip").html(result);
						}
				);
			});
		});
	</script>
	
<body>
	<input type="text" name="checkcode" id="checkcodeID" size="4"/>
	<img src="img.jsp" />
	<span id="tip"></span>
</body>
</html>