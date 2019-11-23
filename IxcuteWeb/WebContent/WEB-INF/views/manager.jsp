<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel='stylesheet' type='text/css' href='Pages/CSS/manager.css'/>
<link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css">  
<script src="https://cdn.staticfile.org/jquery/2.1.1/jquery.min.js"></script>
<script src="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>



<title>Ixcute管理系统</title>
</head>

<body>
	<div id="title_back">
	   	<div id="title">Ixcute</div>
	</div>
    
	 <div id='menu'>
		<button class="menu_button" id="add" href="#page_add" data-toggle="tab" onclick="javascript:add_init()">添加新用户</button>
		<button class="menu_button" id="change" href="#page_change" data-toggle="tab" onclick="javascript:change_init()">编辑用户信息</button>
		<button class="menu_button" href="#" data-toggle="tab">退出</button>
	 </div>

	  <div id="wp" class="tab-content">
	    <div id="page_add" class='tab-pane in active'>
	    	<div class='titles'>添加新用户</div>
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
        
        <div id="page_change" class='tab-pane'>
        	<div class='titles'>更改用户信息</div>
        	<table class="table table-striped table-condensed">
        		<thead>
        			<tr>
        				<th width="30%" text-align='center'>用户名</th>
        				<th width="30%" text-align='center'>用户类型</th>
        				<th width="30%" text-align='center'>操作</th>
        			</tr>
        		</thead>
        		<tbody id="dataTable"></tbody>
        	</table>
        	<ul class="pager">
				<li class="previous"><a href="javascript:previous_page()">&larr; 上一页</a></li>
				<li class="next"><a href="javascript:next_page()">下一页 &rarr;</a></li>
			</ul>
        </div>
        
         <div id="submit_change_info" class='tab-pane'>
        	<div class='titles'>填写更改后的信息</div>
     		<div>新用户名<input type='text' id='new_name' class="input_frame"/></div>
     		<div>密码<input type='text' id='new_code' class="input_frame"/></div>
     		<div><button id="change_button" class="submit-button">提交更改</button></div>
     		<div><button id="return_button" class="submit-button" href="#page_change" data-toggle="tab">返回</button></div>
        </div>     
	  </div> 
	  

</body>
<script type='text/javascript'>
	function add_init(){
		 $("#add_name").val("");
         $("#add_code").val("");
	}
	
//complete chart	
	var all_user_info;
	var user_len;
	var user_point = 0;
	function change_init(){
			$.ajax({
	        url : "findAllUser",
	        type : "GET",
	        success : function(data) {
	          //调用创建表和填充动态填充数据的方法.
	         	all_user_info = data;
	 			user_len = all_user_info.length;
	 			user_point = 0;
	      	    createShowingTable(all_user_info)
	      	  },
	      	  error : function() {
	     	  alert("连接错误");
	      	 }
	      }); 
/*		all_user_info = [{username:"1", usertype:"普通用户"},{username:"2", usertype:"普通用户"},
		{username:"3", usertype:"普通用户"},{username:"4", usertype:"普通用户"},
		{username:"5", usertype:"普通用户"},{username:"6", usertype:"普通用户"},
		{username:"7", usertype:"普通用户"},{username:"8", usertype:"普通用户"},
		{username:"9", usertype:"普通用户"},{username:"10", usertype:"普通用户"},
		{username:"11", usertype:"普通用户"},{username:"12", usertype:"普通用户"},
		{username:"13", usertype:"普通用户"},{username:"14", usertype:"普通用户"},
		{username:"15", usertype:"普通用户"},{username:"16", usertype:"普通用户"}
		];*/
	}

	function createShowingTable(data){
		var tableStr = "";

	    for (var i = 0; i < 10 && user_point < user_len; i++, user_point++) {
	      	tableStr += "<tr><td width='40%'>" + all_user_info[user_point].username + "</td>"
	          + "<td width='40%'>" + all_user_info[user_point].usertype + "</td>"
	          + "<td width='20%'>"
	          + "<button class='btn btn-success' href='#submit_change_info' data-toggle='tab' onclick='javascript:to_change_each_page(" + user_point + ")'>更改</button> "
	          + "<button class='btn btn-danger' onclick='javascript:delete_user(" + user_point + ")'>删除</button>" 
	          + "</td>" + "</tr>";
	    }
	    user_point--;
	    $("#dataTable").html(tableStr);
	}
	
	function previous_page(){
		console.log(user_point / 10);
		if(parseInt(user_point / 10) === 0){
			alert("已经是最前面了哦");
		}
		else{
			user_point -= ( 10 + parseInt(user_point % 10) );
			createShowingTable(all_user_info);
		}
	}
	
	function next_page(){
		if(parseInt(user_point / 10) == parseInt(user_len / 10)){
			alert("已经是最后面了哦");
		}
		else{
			user_point += ( 10 - (user_point % 10) ); 
			createShowingTable(all_user_info);
		}
	}
	
	
//jump to changing each user page
	var target_user_id;
	function to_change_each_page(user_id){
		$("#new_name").val(all_user_info[user_id].username);
    	$("#new_code").val(all_user_info[user_id].userpwd);
    	target_user_id = user_id;
	}
	
	$('#return_button').click(function(){
		$("#new_name").val("");
    	$("#new_code").val("");
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
		            $("#add_name").val("");
		            $("#add_code").val("");
		        }else{
					alert("用户名已存在");
		        }
		    },

		    error:function(){   //请求失败执行的操作
		        alert("出错！！");
		    }

		});
	}
	
	
	$("#change_button").click(function(){
		var old_uname = all_user_info[target_user_id].username;
		var new_uname = document.getElementById('new_name').value;
		var ucode = document.getElementById('new_code').value;
		
		if(new_uname.length == 0 || ucode.length ==0){
			alert("账号和密码不能为空");
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
		        	change_init();
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
	})
	
	function delete_user(id){		
		$.ajax({
		    url:"deleteServlet",     //请求后台的地址
		    type:"post",    //请求方式
		    data:{    //这里是你要传给后台的data值
		        "uname":all_user_info[id].username,
		        "upwd":all_user_info[id].userpwd
		    },

		    dataType:"json",    //数据类型为json类型
		    success:function(result){    //成功时返回的data值，注意这个data是后台返回的值，上面的data是要传给后台的值
		        if(result){    //如果后台返回的data.SuccessCode不等于0执行后面的语句
		        	change_init();
		        	alert("删除成功");
		        }
		        else{
					alert("删除失败");
		        }
		    },

		    error:function(){   //请求失败执行的操作
		        alert("出错！！");
		    }
		});
	}

</script>
</html>