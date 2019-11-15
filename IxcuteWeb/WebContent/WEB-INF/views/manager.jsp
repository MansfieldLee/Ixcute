<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel='stylesheet' type='text/css' href='Pages/CSS/manager.css'/>
	<script src="http://www.jq22.com/jquery/jquery-1.10.2.js"></script>


<title>Ixcute管理系统</title>
</head>

<body>
	 <div id="menu">
	      <button id="add" class="menu_button">添加新用户</button>
	      <button id="change" class="menu_button">编辑用户信息</button>
	      <button id="exit_button" class="menu_button">退出</button>
	 </div>
	  
	<div id="title_back">
    	<div id="title">Ixcute</div>
    </div>

	  <div id="wp">
	    <div id="page_add" class='showed'>
	    	<h2 class='titles'>添加新用户</h2>
        	<div><input type='text' id="add_name" class="input_frame" placeholder="用户名"/></div>
            <div><input type='text' id="add_code" class="input_frame" placeholder="密码"/></div>
            <div>
            	<select name="user_type" id="authority" class="input_frame">
					<option value=0>管理员</option>
					<option value=1>普通政府工作人员</option>
				</select>
			</div>
            <button type="submit" class="submit-button" onclick="register()">添加</button>
        </div>
        <div id="page_change" class='hided'>
        	<h2 class='titles'>更改用户信息</h2>
     		<div>原用户名<input type='text' name='find_name' id='find_name' class="input_frame" placeholder="用户名"/></div>
     		<div>新用户名<input type='text' id='new_name' class="input_frame"/></div>
     		<div>密码<input type='text' name='change_code' id='find_code' class="input_frame"/></div>
     		<div><button class="submit-button" id="find-button" onclick="find_user()">查询</button></div>
     		<div><button id="change_button" class="submit-button" onclick="change_user()">提交更改</button></div>
     		<div><button id="delete_button" class="submit-button" onclick="delete_user()">删除</button></div>
        </div>
        
	  </div> 
	  

</body>
<script type='text/javascript'>
	$('#add').click(function(){
		$('#page_add').removeClass('hided');
		$('#page_add').addClass('showed');
		$('#page_change').removeClass('showed');
		$('#page_change').addClass('hided');
	})
	$('#change').click(function(){ 
		$("#find_name").attr("disabled",false);
		$('#change_button').attr('disabled',true);
		$('#delete_button').attr('disabled',true);
		$('#new_name').attr('disabled',true);
		$('#find_code').attr('disabled',true);
		$('#page_add').removeClass('showed');
		$('#page_add').addClass('hided');
		$('#page_change').removeClass('hided');
		$('#page_change').removeClass('showed');
	})

	
	function register(){
		var name = document.getElementById('add_name').value;
		var pwd = document.getElementById('add_code').value;
		var authority = document.getElementById('authority').value;
		
		if(name.length == 0 || pwd.length == 0){
			alert("账号和密码不能为空");
			return;
		}
		
		$.ajax({
		    url:"registerServlet",     //请求后台的地址
		    type:"post",    //请求方式
		    data:{    //这里是你要传给后台的data值
		        "name":name,
		        "pwd":pwd,
		        "authority":authority
		    },

		    dataType:"json",    //数据类型为json类型
		    success:function(result){    //成功时返回的data值，注意这个data是后台返回的值，上面的data是要传给后台的值
		        if(result){    //如果后台返回的data.SuccessCode不等于0执行后面的语句
		            alert("注册成功");
		        }else{
					alert("用户名已存在");
		        }
		    },

		    error:function(){   //请求失败执行的操作
		        alert("出错！！");
		    }

		});
	}
	
	function find_user(){
		var uname = document.getElementById('find_name').value;

		if(uname.length == 0){
			alert("查询账号不能为空");
			return;
		}
		
		$.ajax({
		    url:"findServlet",     //请求后台的地址
		    type:"post",    //请求方式
		    data:{    //这里是你要传给后台的data值
		        "uname":uname,
		    },

		    dataType:"json",    //数据类型为json类型
		    success:function(result){    //成功时返回的data值，注意这个data是后台返回的值，上面的data是要传给后台的值
		        if(null != result && "" != result.username){    //如果后台返回的data.SuccessCode不等于0执行后面的语句
		        	$("#find_name").val(result.username);
		        	$("#new_name").val(result.username);
		        	$("#find_code").val(result.userpwd);
		        	$("#find_name").attr("disabled",true);
		        	$("#change_button").attr("disabled",false);
		        	$("#delete_button").attr("disabled",false);
		        	$("#new_name").attr("disabled",false);
		        	$("#find_code").attr("disabled",false);
		        }
		        else{
					alert("用户名不存在");
					$("#find_name").attr("disabled",false);
					$("#change_button").attr("disabled",true);
		        	$("#delete_button").attr("disabled",true);
		        	$("#new_name").attr("disabled",true);
		        	$("#find_code").attr("disabled",true);
		        }
		    },

		    error:function(){   //请求失败执行的操作
		        alert("出错！！");
		    }
		});
	}
	
	function change_user(){
		var old_uname = document.getElementById('find_name').value;
		var new_uname = document.getElementById('new_name').value;
		var ucode = document.getElementById('find_code').value;
		
		if(new_uname.length == 0 || ucode.length ==0){
			alert("账号不能为空");
			return;
		}
		
		$.ajax({
		    url:"changeServlet",     //请求后台的地址
		    type:"post",    //请求方式
		    data:{    //这里是你要传给后台的data值
		    	"old_name":old_uname,
		        "new_name":new_uname,
		        "upwd":ucode
		    },

		    dataType:"json",    //数据类型为json类型
		    success:function(result){    //成功时返回的data值，注意这个data是后台返回的值，上面的data是要传给后台的值
		        if(result){    //如果后台返回的data.SuccessCode不等于0执行后面的语句
		        	alert("更改成功");
		        }
		        else{
					alert("用户名已存在");
		        }
		    },

		    error:function(){   //请求失败执行的操作
		        alert("出错！！");
		    }
		});
	}
	
	function delete_user(){
		var uname = document.getElementById('find_name').value;
		var ucode = document.getElementById('find_code').value;
		
		if(uname.length == 0 || ucode.length ==0){
			alert("账号不能为空");
			return;
		}
		
		$.ajax({
		    url:"/deleteServlet",     //请求后台的地址
		    type:"post",    //请求方式
		    data:{    //这里是你要传给后台的data值
		        "uname":uname,
		        "upwd":ucode
		    },

		    dataType:"json",    //数据类型为json类型
		    success:function(result){    //成功时返回的data值，注意这个data是后台返回的值，上面的data是要传给后台的值
		        if(result){    //如果后台返回的data.SuccessCode不等于0执行后面的语句
		        	alert("删除成功");
		        }
		        else{
					alert("用户名不存在");
		        }
		    },

		    error:function(){   //请求失败执行的操作
		        alert("出错！！");
		    }
		});
	}

</script>
</html>