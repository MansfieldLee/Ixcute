// JavaScript Document
$(document).ready(function(){
var shown_flag1 = 0;
var shown_flag2 = 0;
var shown_flag3 = 0;
var changed_flag = 0;
var e = event | document.event;
$('#click1').click(function(){
	if(!shown_flag1){
		$('#fun1').show(500);
		$('#click1 .arrow').html('︾');
		shown_flag1 = !shown_flag1;
	}
	else{
		$('#fun1').hide(500);
		$('#click1 .arrow').html('》');
		shown_flag1 = !shown_flag1;
	}
})
$('#click2').click(function(){
	if(!shown_flag2){
		$('#fun2').show(500);
		$('#click2 .arrow').html('︾');
		shown_flag2 = !shown_flag2;
	}
	else{
		$('#fun2').hide(500);
		$('#click2 .arrow').html('》');
		shown_flag2 = !shown_flag2;
	}
})
$('#click3').click(function(){
	if(!shown_flag3){
		$('#fun3').show(500);
		$('#click3 .arrow').html('︾');
		shown_flag3 = !shown_flag3;
	}
	else{
		$('#fun3').hide(500);
		$('#click3 .arrow').html('》');
		shown_flag3 = !shown_flag3;
	}
})
})

//加载统计图区域：
//$('#show_desk').load('../main/bar.html #content').hide().fadeIn('slow');
$('#fun1 .1').on('click',function(e){
	e.preventDefault();
	console.log('1');
	var xhr =new XMLHttpRequest()   
	var $content = $('#show_desk');
	$('#content').remove();
	/**function ck(){     
		xhr.open("GET", "../main/test.txt", true);//注意路径问题读取data.txt文件的内容。    
		xhr.send(null);    
		xhr.onreadystatechange = function() {      
			if (xhr.readyState == 4) {        
				if (xhr.status == 200||xhr.status==0) {//请求本地txt文件时状态码是0。     
					 alert(xhr.responseText);  
				} 
				else {          
					 alert(xhr.status);        
				}      
			}  
		};};
	console.log(xhr.status);
	console.log(xhr.responseText); 
	$content.html(xhr.responseText);
});**/


	htmlobj = $.ajax({
		type:'GET',
		url:'../main/bar.html',
		async:false,
		beforeSend: function(){
			console.log('2');
			$content.append("<div id='load'>Loading</div>");
		},
		complete:function(){
			$('#load').remove();
			console.log('3');
			console.log($content.load('../main/bar.html #content'));
		},
		success: function(){
			console.log('4');
			//$content.html($(data).find('#content')).hide().fadeIn(300);
			$content.load('../main/bar.html #content').hide().fadeIn('400');
		},
		fail:function(){
			console.log('5');
			alert('false!');
		}
	});
	//$content.html(htmlobj.responseText);
	//$content.load('../main/bar.html #content');
	
	});
//统计图区域结束