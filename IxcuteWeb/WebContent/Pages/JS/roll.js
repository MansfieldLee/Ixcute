/**
 * Created by sjr on 2019/7/17.
 */

$(function () {
    /*消息滚动*/
	var xmlhttp_scroll;
	function map_issue(){
		if (window.XMLHttpRequest) {xmlhttp_scroll=new XMLHttpRequest();}
		
		else{xmlhttp_scroll=new ActiveXObject("Microsoft.XMLHTTP");}	
		xmlhttp_scroll.onreadystatechange=getResult_scroll;
		xmlhttp_scroll.open("POST","LoginServlet",true);
		xmlhttp_scroll.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp_scroll.send(null);		
	}
	
	function getResult_scroll(){
		if (xmlhttp_scroll.readyState==4) {		
			if(xmlhttp_scroll.status==200){
				var rec=xmlhttp_scroll.responseText;
				response_scroll = eval("("+rec+")");
				scroll_callback(responese_scroll);
			}
			else{
				alert("连接失败");
			}
		}
	}
	function scroll_callback(responese){
		var message='';
		for(var i=0;i<5;i++){
			message = '<span class="scroll_date">' + response[i].date + '</span>';
			message += '<span class="scroll_street">' + response[i].street + '</span>的'; 
			message += '<span class="scroll_shequ">' + response[i].shequ + '</span>从' ;
			message += '<span class="scroll_id">' + response[i].id + '</span>接到' ;
			message += '<span class="scroll_kind">' + response[i].kind + '</span>';
			message += '<span class="scroll_dataType">' + response[i].dataType + '</span>,请' ;
			message += '<span class="scroll_exc">' + response[i].exc + '</span>尽快前往处理';
			$('#scroller').append('<li class="roll_"'+String(i+1)+'><a href="#" class="ellipsis">'+ message +'</a></li>');
		}
		for(var j=5;j<response.length;j++){
			message = '<span class="scroll_date">' + response[j].date + '</span>';
			message += '<span class="scroll_street">' + response[j].street + '</span>的'; 
			message += '<span class="scroll_shequ">' + response[j].shequ + '</span>从' ;
			message += '<span class="scroll_id">' + response[j].id + '</span>接到' ;
			message += '<span class="scroll_kind">' + response[j].kind + '</span>';
			message += '<span class="scroll_dataType">' + response[i].dataType + '</span>,请' ;
			message += '<span class="scroll_exc">' + response[j].exc + '</span>尽快前往处理';
			$('#scroller').append('<li class="roll_hide"><a href="#" class="ellipsis">'+ message +'</a></li>');
		}
		roll();
	}
    var $ul = $('.roll ul');
    var timeID;
    function roll() {
        clearInterval(timeID);
        timeID = setInterval(function () {
            clearInterval(timeID);
            $ul.animate({ top: "0px" }, 3000, function () {
                $ul.find("li:first").removeClass().addClass('roll_hide').appendTo($ul);
                /*$ul.find("li").eq(0).removeClass().addClass('roll_1')
                 $ul.find("li").eq(1).removeClass().addClass('roll_2')
                 $ul.find("li").eq(2).removeClass().addClass('roll_3')
                 $ul.find("li").eq(3).removeClass().addClass('roll_4')
                 $ul.find("li").eq(4).removeClass().addClass('roll_5')*/
                for(var i=0;i<3;i++){
                    $ul.find("li").eq(i).removeClass().addClass('roll_'+ (i+1) +'')
                }
                roll()
            })
        }, 3000);
    }
	roll()
})