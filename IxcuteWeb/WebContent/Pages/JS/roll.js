/**
 * Created by sjr on 2019/7/17.
 */

$(function () {
    /*消息滚动*/
	var xmlhttp_scroll;
	function roll_issue(){
		if (window.XMLHttpRequest) {xmlhttp_scroll=new XMLHttpRequest();}
		
		else{xmlhttp_scroll=new ActiveXObject("Microsoft.XMLHTTP");}	
		xmlhttp_scroll.onreadystatechange=getResult_scroll;
		xmlhttp_scroll.open("POST","NoDeal",true);
		xmlhttp_scroll.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp_scroll.send("year="+window.year+"&month="+window.month+"&day="+window.day+"&hour="+date.hrs+"&minute="+date.min+"&second="+date.sec);		
	}
	
	function getResult_scroll(){
		if (xmlhttp_scroll.readyState==4) {		
			if(xmlhttp_scroll.status==200){
				var rec=xmlhttp_scroll.responseText;
				response_scroll = eval("("+rec+")");
				//console.log(response_scroll);
				scroll_callback(response_scroll);
			}
			else{
				alert("连接失败");
			}
		}
	}
	function scroll_callback(response){
		var message='';
		var i;
		var flag;
		var normal = $('#scroller');
	    var warning = $('#each_warning_event');
	    var normal_count=0;
	    var warning_count=0;
		for(i in response){
			message = response[i].时间.split('.')[0] ;
			message += response[i].街道 + '的'; 
			message += response[i].社区 + '从' ;
			message += response[i].来源 + '接到' ;
			message += response[i].小类名称;
			message += response[i].性质 + ',请' ;
			message += response[i].处置部门 + '尽快前往处理';
			//console.log(message);
			flag = (response[i].事件类型 == 'abnormal')?1:0;
			if(flag){
				normal_count++;
				//console.log(normal_count);
				if(normal_count<4){
					normal.append('<li class="roll_'+(normal_count)+'"><a href="#" class="ellipsis abnormal">'+ message +'</a></li>');
				}
				else{
					normal.append('<li class="roll_hide"><a href="#" class="ellipsis abnormal">'+ message +'</a></li>');
				}
			}
			else{
				warning_count++;
				//console.log(warning_count);
				if(warning_count<4){
					warning.append('<li class="roll_'+(warning_count)+'"><a href="#" class="ellipsis abnormal">'+ message +'</a></li>');
				}
				else{
					warning.append('<li class="roll_hide"><a href="#" class="ellipsis abnormal">'+ message +'</a></li>');
				}
			}
//			if(i<4){
//				if(flag){
//					normal.append('<li class="roll_'+(i)+'"><a href="#" class="ellipsis abnormal">'+ message +'</a></li>');
//				}
//				else{
//					warning.append('<li class="roll_'+(i)+'"><a href="#" class="ellipsis abnormal">'+ message +'</a></li>');
//				}
//			}
//			else{
//				if(flag){
//					normal.append('<li class="roll_hide"><a href="#" class="ellipsis abnormal">'+ message +'</a></li>');
//				}
//				else{
//					warning.append('<li class="roll_hide"><a href="#" class="ellipsis abnormal">'+ message +'</a></li>');
//				}
//			}
			
		}
		roll2();
		roll1();
		
	}
	var normal = $('#scroller');
    
    var warning = $('#each_warning_event');
   
	roll_issue();
    
    var timeID;
    var timeID2;
    function roll1() {
        clearInterval(timeID);
        timeID = setInterval(function () {
            clearInterval(timeID);
            normal.animate({ top: "0px" }, 3000, function () {
                normal.find("li:first").removeClass().addClass('roll_hide').appendTo(normal);
                for(var i=0;i<3;i++){
                    normal.find("li").eq(i).removeClass().addClass('roll_'+ (i+1))
                }
                roll1();
            })
        }, 2000);
    }
    function roll2() {
    	clearInterval(timeID2);
        timeID2 = setInterval(function () {
        	clearInterval(timeID2);
            warning.animate({ top: "0px" }, 3000, function () {
            	warning.find("li:first").removeClass().addClass('roll_hide').appendTo(warning);
                for(var i=0;i<3;i++){
                	warning.find("li").eq(i).removeClass().addClass('roll_'+ (i+1))
                }
                roll2();
            })
        }, 2000);
    }
})