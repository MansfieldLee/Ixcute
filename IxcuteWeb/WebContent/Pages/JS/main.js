// JavaScript Document
$(document).ready(function(){
	var accordionsMenu = $('#menu');

	if( accordionsMenu.length > 0 ) {
	
	accordionsMenu.each(function(){
		var accordion = $(this);
		//detect change in the input[type="checkbox"] value
		accordion.on('change', 'input[type="checkbox"]', function(){
			var checkbox = $(this);
			console.log(checkbox.prop('checked'));
			( checkbox.prop('checked') ) ? checkbox.siblings('ul').attr('style', 'display:none;').slideDown(300) : checkbox.siblings('ul').attr('style', 'display:block;').slideUp(300);
		});
	});
	$('#content_bar').hide(0);
	$('#content_pie').hide(0);
	$('#content_situation').hide(0);
	$('#content_eventlist').hide(0);
	console.log(date);
	console.log(date.today);
	var flag = 0;//0 is year,1 is month,2 is day
	window.year='';
	window.month='';
	window.day='';
	for(var i=0;i<date.today.length;i++){
		if(date.today[i]=='/'){flag++;continue;}
		if(flag==0){window.year += date.today[i];}
		if(flag==1){window.month += date.today[i];}
		if(flag==2){window.day += date.today[i];}
	}

//	console.log(window.year.window.month,window.day);
	//地图初始化隐藏部分
	$('#longtian_nav').css('display','none');
	$('#kengzi_nav').css('display','none');
	$('#biling_nav').css('display','none');
	$('#maluan_nav').css('display','none');
	$('#pingshanjiedao_nav').css('display','none');
	$('#shijing_nav').css('display','none');
	//结束
	canvas_change();
}

document.getElementById('time_box').onmousewheel = function(){
	document.getElementById('time_box').setAttribute('class','box_hided');
	$('#clock_box2').slideUp(300);
	$('#clock_box').slideDown(0);
}
	
	//日历部分
	
	jeDate('#startTime', {
        minDate: '1990-01-01',
        isinitVal: true,
        format: 'YYYY-MM-DD',
        onClose: false,
        donefun:function(obj){
            // console.log(obj)
            var saliDate=obj.val.split("-");
             console.log(saliDate);
            var riNum=0;
            var yueNum=0;
            var nianNum=saliDate[0];
            // console.log(saliDate[1]-1)
            // //判断月 同时判断年
            if(saliDate[1]-1<=0&&saliDate[2]=="01"){
                yueNum=12;
                riNum=31;
                nianNum=nianNum;
                // console.log(nianNum,yueNum,riNum)
                $("#endTime").val(nianNum+"-"+yueNum+"-"+riNum)
                return false;
            }else {
                yueNum=saliDate[1];
                nianNum=nianNum-0+1;
            }
            //当 日 是01 的时候要判断当前下一个月是否为31 还是30天  在判断一个是否为闰年  2月份是29 还是28
            if(saliDate[2]=="01"){
                switch(saliDate[1]-1){
                    case 1:
                    case 3:
                    case 5:
                    case 7:
                    case 8:
                    case 10:
                    case 0://0就是12月  因为是只有点击的是2019-01-01  才会是2018-12-31
                        riNum=31;
                        yueNum="0"+(saliDate[1]-1);
                        break;
                    case 4:
                    case 6:
                    case 9:
                    case 11:
                        riNum=30;
                        yueNum="0"+(saliDate[1]-1);
                        break;
                }
                if(saliDate[1]-1==2){
                	yueNum="0"+(saliDate[1]-1);
                    //判断是否为闰年
                    if(isLeap(saliDate[0])==1){
                        riNum=29;
                    }else{
                        riNum=28;
                    }
                }
            }else{
                if(saliDate[2]-1<=9){
                    riNum="0"+(saliDate[2]-1);
                }else{
                    riNum=saliDate[2]-1;
                }
            }
            // console.log(nianNum,yueNum,riNum)
        }
    });
    jeDate('#endTime', {
        minDate: '1990-01-01',
        isinitVal: true,
        format: 'YYYY-MM-DD',
        onClose: false
    });
    
   //判断是否为闰年  若为闰年，返回1，反之则返回0
    function isLeap(year) {
        if((year%4==0 && year%100!=0)||(year%400==0)){
            return 1;
        }
        return 0;
    }
    //日历部分结束
})


//异常事件列表
	
	function finish_event(event){
		var tableStr = "";
	 	if(event.事件类型)
	 		event.事件类型 = '';
    	else
    		event.事件类型 = '异常'
      	tableStr += "<tr><td width='10%'>" + event.时间 + "</td>"
          + "<td width='10%'>" + event.街道 + "</td>"
          + "<td width='15%'>" + event.社区 + "</td>"
          + "<td width='10%'>" + event.来源 + "</td>"
          + "<td width='10%'>" + event.小类名称 + "</td>"
          + "<td width='10%'>" + event.性质 + "</td>"
          + "<td width='10%'>" + event.处置部门 + "</td>"
          + "<td width='10%'>" + event.事件类型 + "</td>"
          + "<td width='15%'>"
          + "<button class='btn btn-success' onclick='javascript:finish_one(" + event.id + ")'>标记为已结办</button> "
          + "</td>" + "</tr>";
	 	$("#dataTable").html(tableStr);
	 	
		$("#pie-button").addClass("menu-button");
		$("#bar-button").addClass("menu-button");
		$("#map-button").addClass("menu-button");
		$("#situation-button").addClass("menu-button");
		$("#eventlist-button").addClass("menu-button-keep");
		$("#event_table").show();
	}

	function event_list_page(){
//		$.ajax({
//	        url : "NoDeal",
//	        type : "POST",
//	        success : function(data) {
//	          //调用创建表和填充动态填充数据的方法.
//	         	all_event = data;
//	         	event_len = all_event.length;
//	         	event_point = 0;
//	      	    createShowingTable(all_event);
//	      	  },
//	      	  error : function(){
//	     	  	alert("出错！！");
//	      	  }
//	    });
		
		event_len = all_event.length;
     	event_point = 0;
     	createShowingTable();
	}

	var all_event;
	var event_len;
	var event_point = 0;
	function createShowingTable(){
		var tableStr = "";

	    for (var i = 0; i < 10 && event_point < event_len; i++, event_point++) {
	    	if(all_event[event_point].事件类型 != 'abnormal')
	    		all_event[event_point].事件类型 = '';
	    	else
	    		all_event[event_point].事件类型 = '异常'
	      	tableStr += "<tr><td width='10%'>" + all_event[event_point].时间 + "</td>"
	          + "<td width='10%'>" + all_event[event_point].街道 + "</td>"
	          + "<td width='15%'>" + all_event[event_point].社区 + "</td>"
	          + "<td width='15%'>" + all_event[event_point].来源 + "</td>"
	          + "<td width='15%'>" + all_event[event_point].小类名称 + "</td>"
	          + "<td width='5%'>" + all_event[event_point].性质 + "</td>"
	          + "<td width='10%'>" + all_event[event_point].处置部门 + "</td>"
	          + "<td width='10%'>" + all_event[event_point].事件类型 + "</td>"
	          + "<td width='10%'>"
	          + "<button class='btn btn-success' onclick='javascript:finish_one(" + all_event[event_point].id + ")'>标记为已结办</button> "
	          + "</td>" + "</tr>";
	    }
	    event_point--;
	    $("#dataTable").html(tableStr);
	}
	
	function previous_page(){
		if(parseInt(event_point / 10) === 0){
			alert("已经是最前面了哦");
		}
		else{
			user_point -= ( 10 + parseInt(event_point % 10) );
			createShowingTable(all_event);
		}
	}
	
	function next_page(){
		if(parseInt(event_point / 10) == parseInt(event_len / 10)){
			alert("已经是最后面了哦");
		}
		else{
			event_point += ( 10 - (event_point % 10) ); 
			createShowingTable(all_event);
		}
	}

	
	function finish_one(event_id){
		
	}




//控制街道选择块儿
$('#selected_street').change(
	function(){
	$('#blank').hide(0);
	$('.selected_community').hide(0);
	$('#'+this.value).show(0);
})
$('#street').mouseover(
	function(){
	$('#street_son').show(200);
})
$('#street').mouseout(
	function(){
	$('#street_son').hide(200);
})

function show_map(showed){
	var ps = document.getElementById('ps');
	if(ps.style.display == 'none'){$('#ps').css('display','block');}
	else{$('#ps').css('display','none');}
	$('#mapadd_nav').css('display','none');
	$('#longtian_nav').css('display','none');
	$('#kengzi_nav').css('display','none');
	$('#biling_nav').css('display','none');
	$('#maluan_nav').css('display','none');
	$('#pingshanjiedao_nav').css('display','none');
	$('#shijing_nav').css('display','none');
	$('#'+showed+'_nav').css('display','block');
}

//加载统计图区域：
//bar区：
function canvas_change(){
	map_issue();
	//window.time_issue2;
	situation_issue(3);
	window.myshow=function(showed,bid){
	    $('#edubalance').css('height','95%');
		$('#courserate').css('height','95%');
		//document.getElementById('edubalance').height='95%';
		//document.getElementById('courserate').height='95%';
		$('.table').hide();
		$('#content_'+showed).show();
		//canvas_change();
		
		$("#pie-button").removeClass("menu-button-keep");
		$("#bar-button").removeClass("menu-button-keep");
		$("#map-button").removeClass("menu-button-keep");
		$("#situation-button").removeClass("menu-button-keep");
		$("#eventlist-button").removeClass("menu-button-keep");
		$("#pie-button").removeClass("menu-button");
		$("#bar-button").removeClass("menu-button");
		$("#map-button").removeClass("menu-button");
		$("#situation-button").removeClass("menu-button");
		$("#eventlist-button").removeClass("menu-button");
		
		
		
		if(bid==1){
			$("#pie-button").addClass("menu-button-keep");
			$("#bar-button").addClass("menu-button");
			$("#map-button").addClass("menu-button");
			$("#situation-button").addClass("menu-button");
			$("#eventlist-button").addClass("menu-button");
			time_issue2();
		}
		else if(bid==2){
			$("#pie-button").addClass("menu-button");
			$("#bar-button").addClass("menu-button-keep");
			$("#map-button").addClass("menu-button");
			$("#situation-button").addClass("menu-button");
			$("#eventlist-button").addClass("menu-button");
			var edubalance = echarts.init(document.getElementById('edubalance'));
			edubalance.clear();
			bar_option.series = [];
			bar_option_month.series = [];
			bar_option.legend.data = [];
			bar_option_month.legend.data = [];
			bar_issue();
		}
		else if(bid==3){
			$("#pie-button").addClass("menu-button");
			$("#bar-button").addClass("menu-button");
			$("#map-button").addClass("menu-button-keep");
			$("#situation-button").addClass("menu-button");
			$("#eventlist-button").addClass("menu-button");
		}
		else if(bid == 5){
			$("#pie-button").addClass("menu-button");
			$("#bar-button").addClass("menu-button");
			$("#map-button").addClass("menu-button");
			$("#situation-button").addClass("menu-button");
			$("#eventlist-button").addClass("menu-button-keep");
			$("#event_table").show();
			event_list_page();
		}
		else{
			$("#pie-button").addClass("menu-button");
			$("#bar-button").addClass("menu-button");
			$("#map-button").addClass("menu-button");
			$("#situation-button").addClass("menu-button-keep");
			$("#eventlist-button").addClass("menu-button");
		}
	}
//$(function() {
	var response_bar;
	var xmlhttp_bar;
	function bar_issue(){
		if (window.XMLHttpRequest) {xmlhttp_bar=new XMLHttpRequest();}
		
		else{xmlhttp_bar=new ActiveXObject("Microsoft.XMLHTTP");}	
		xmlhttp_bar.onreadystatechange=getResult_bar;
		xmlhttp_bar.open("POST","DataStreetToday",true);//DataStreetToday
		xmlhttp_bar.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp_bar.send("year="+window.year+"&month="+window.month+"&day="+window.day+"&hour="+date.hrs+"&minute="+date.min+"&second="+date.sec);		
	}
	function bar_issue_month(){
		var year = document.getElementById('selected_year').value;
		var month = document.getElementById('selected_month').value;
		if (window.XMLHttpRequest) {xmlhttp_bar=new XMLHttpRequest();}
		
		else{xmlhttp_bar=new ActiveXObject("Microsoft.XMLHTTP");}	
		xmlhttp_bar.onreadystatechange=getResult_bar_month;
		xmlhttp_bar.open("POST","DataStreetByMonth",true);//DataStreetToday
		xmlhttp_bar.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp_bar.send("year="+year+"&month="+month);		
	}
	
	function getResult_bar(){
		if (xmlhttp_bar.readyState==4) {		
			if(xmlhttp_bar.status==200){
				var rec=xmlhttp_bar.responseText;
				response_bar = eval("("+rec+")");
				var dataType=[];
				for(var kinds in response_bar.坪山街道){
					if(dataType.indexOf(kinds)>-1){continue;}
					else{dataType.push(kinds);}
				}
				for(var kinds in response_bar.坑梓街道){
					if(dataType.indexOf(kinds)>-1){continue;}
					else{dataType.push(kinds);}
				}
				for(var kinds in response_bar.马峦街道){
					if(dataType.indexOf(kinds)>-1){continue;}
					else{dataType.push(kinds);}
				}
				for(var kinds in response_bar.碧玲街道){
					if(dataType.indexOf(kinds)>-1){continue;}
					else{dataType.push(kinds);}
				}
				for(var kinds in response_bar.龙田街道){
					if(dataType.indexOf(kinds)>-1){continue;}
					else{dataType.push(kinds);}
				}
				for(var kinds in response_bar.石井街道){
					if(dataType.indexOf(kinds)>-1){continue;}
					else{dataType.push(kinds);}
				}
				console.log(dataType);
				var colors = 0x24f213;
				for(var i=0;i<dataType.length;i++){
					colors += 0x234567;
					colors = colors & 0xffffff;
					var temp = dataType[i]
					if(!response_bar.龙田街道[temp]){response_bar.龙田街道[temp] = 0;}
					if(!response_bar.坑梓街道[temp]){response_bar.坑梓街道[temp] = 0;}
					if(!response_bar.碧岭街道[temp]){response_bar.碧岭街道[temp] = 0;}
					if(!response_bar.马峦街道[temp]){response_bar.马峦街道[temp] = 0;}
					if(!response_bar.石井街道[temp]){response_bar.石井街道[temp] = 0;}
					if(!response_bar.坪山街道[temp]){response_bar.坪山街道[temp] = 0;}
					var sery = {
						name:dataType[i],
						type:'bar',
						stack: '总量',
						data:[response_bar.龙田街道[temp],response_bar.坑梓街道[temp],response_bar.碧岭街道[temp],
							  response_bar.马峦街道[temp],response_bar.石井街道[temp],response_bar.坪山街道[temp]],
						barMaxWidth : 50,
						itemStyle: {
							normal: {
								color: '#'+colors.toString(16)
								},
								label: {
									show: true,
									position: 'top',
									formatter: '{c}'
								}
							},
							
					};
					//console.log(dataType[i],sery);
					paint_bar(dataType[i],sery);
					//console.log(i);
				}
			}
			else{
				alert("连接失败");
			}
		}
	}
	function getResult_bar_month(){
		if (xmlhttp_bar.readyState==4) {		
			if(xmlhttp_bar.status==200){
				var rec=xmlhttp_bar.responseText;
				response_bar = eval("("+rec+")");
				var dataType=[];
				for(var kinds in response_bar.坪山街道){
					if(dataType.indexOf(kinds)>-1){continue;}
					else{dataType.push(kinds);}
				}
				for(var kinds in response_bar.坑梓街道){
					if(dataType.indexOf(kinds)>-1){continue;}
					else{dataType.push(kinds);}
				}
				for(var kinds in response_bar.马峦街道){
					if(dataType.indexOf(kinds)>-1){continue;}
					else{dataType.push(kinds);}
				}
				for(var kinds in response_bar.碧玲街道){
					if(dataType.indexOf(kinds)>-1){continue;}
					else{dataType.push(kinds);}
				}
				for(var kinds in response_bar.龙田街道){
					if(dataType.indexOf(kinds)>-1){continue;}
					else{dataType.push(kinds);}
				}
				for(var kinds in response_bar.石井街道){
					if(dataType.indexOf(kinds)>-1){continue;}
					else{dataType.push(kinds);}
				}
				console.log(dataType);
				var colors = 0x24f213;
				for(var i=0;i<dataType.length;i++){
					console.log(dataType[i],sery);
					colors += 0x234567;
					colors = colors & 0xffffff;
					var temp = dataType[i]
					if(!response_bar.龙田街道[temp]){response_bar.龙田街道[temp] = 0;}
					if(!response_bar.坑梓街道[temp]){response_bar.坑梓街道[temp] = 0;}
					if(!response_bar.碧岭街道[temp]){response_bar.碧岭街道[temp] = 0;}
					if(!response_bar.马峦街道[temp]){response_bar.马峦街道[temp] = 0;}
					if(!response_bar.石井街道[temp]){response_bar.石井街道[temp] = 0;}
					if(!response_bar.坪山街道[temp]){response_bar.坪山街道[temp] = 0;}
					var sery = {
						name:dataType[i],
						type:'bar',
						stack: '总量',
						data:[response_bar.龙田街道[temp],response_bar.坑梓街道[temp],response_bar.碧岭街道[temp],
							  response_bar.马峦街道[temp],response_bar.石井街道[temp],response_bar.坪山街道[temp]],
						barMaxWidth : 50,
						itemStyle: {
							normal: {
								color: '#'+colors.toString(16)
								},
								label: {
									show: true,
									position: 'top',
									formatter: '{a}'
								}
							},
							
					};
					//console.log(dataType[i],sery);
					paint_bar_month(dataType[i],sery);
					//console.log(i);
				}
			}
			else{
				alert("连接失败");
			}
		}
	}
	$('#bar_button').click(function(){
		var edubalance = echarts.init(document.getElementById('edubalance'));
		edubalance.clear();
		bar_option_month.series = [];
		bar_option_month.legend.data = [];
		bar_issue_month();
	})
	$('#bar_button_today').click(function(){
		var edubalance = echarts.init(document.getElementById('edubalance'));
		edubalance.clear();
		bar_option.series = [];
		bar_option.legend.data = [];
		bar_issue();
	})
	var bar_option = {
	        tooltip: {
	            trigger: 'axis',
	            formatter: '{b}</br>{a}: {c}</br>{a1}: {c1}</br>{a2}: {c2}</br>{a3}: {c3}</br>{a4}: {c4}</br>...'
	        },
	        toolbox: {
	            show:false,
	            feature: {
	                dataView: {show: true, readOnly: false},
	                magicType: {show: true, type: ['bar','stack']},
	                restore: {show: true},
	                saveAsImage: {show: true}
	            }
	        },
			calculable : true,
	        legend: {
	            data:[],
	            right:"5%",
	            textStyle:{
	                color:'#000'
	            }
	        },
	        grid:{
	            top:'18%',
	            right:'5%',
	            bottom:'8%',
	            left:'5%',
	            containLabel: true
	        },
	        xAxis: [
	            {
	                type: 'category',
	                data: ['龙田街道','坑梓街道','碧岭街道','马峦街道','石井街道','坪山街道']
	            }
	        ],
	        yAxis: [
	            {
	                type: 'value',
	                interval: 5,
	                max:40,
	                min: 0,
	                
	            }
	        ],
			
	        color:"yellow",
	        series: []
	    };
	var bar_option_month = {
	        tooltip: {
	            trigger: 'axis',
	            formatter: '{b}</br>{a}: {c}</br>{a1}: {c1}</br>{a2}: {c2}</br>{a3}: {c3}</br>...'
	        },
	        toolbox: {
	            show:false,
	            feature: {
	                dataView: {show: true, readOnly: false},
	                magicType: {show: true, type: ['bar','stack']},
	                restore: {show: true},
	                saveAsImage: {show: true}
	            }
	        },
			calculable : true,
			legend: {
	            data:[],
	            right:"5%",
	            textStyle:{
	                color:'#000'
	            }
	        },
	        grid:{
	            top:'18%',
	            right:'5%',
	            bottom:'8%',
	            left:'5%',
	            containLabel: true
	        },
	        xAxis: [
	            {
	                type: 'category',
	                data: ['龙田街道','坑梓街道','碧岭街道','马峦街道','石井街道','坪山街道']
	            }
	        ],
	        yAxis: [
	            {
	                type: 'value',
	                interval: 100,
	                max:1000,
	                min: 0,
	                
	            }
	        ],
			
	        color:"yellow",
	        series: []
	    };
	function paint_bar_month(dataType,sery){
		//console.log(sery);
	    var edubalance = echarts.init(document.getElementById('edubalance'));
		bar_option_month.series.push(sery);
		if(bar_option_month.legend.data.length<20){
			bar_option_month.legend.data.push(dataType);
		}
		edubalance.setOption(bar_option_month);
	}
	function paint_bar(dataType,sery){
		//console.log(sery);
	    var edubalance = echarts.init(document.getElementById('edubalance'));
		bar_option.series.push(sery);
		bar_option.legend.data.push(dataType);
		edubalance.setOption(bar_option);
	}

//pie区：
	//时间事件ajax
	//var response;
    window.response='';
	var xmlhttp_time;
	function time_issue(){
		var startTime = document.getElementById('startTime').value;
		var endTime = document.getElementById('endTime').value;
		console.log(startTime,endTime);
		startTime = startTime.split('-');
		endTime = endTime.split('-');
		var year1 = startTime[0];
		var month1 = startTime[1];
		var day1 = startTime[2];
		var year = endTime[0];
		var month = endTime[1];
		var day = endTime[2];
		if(year1 > year){
			alert("时间选择错误");
			return;
		} else if(year1 == year){
			if(month1 > month){
				alert("时间选择错误");
				return;
			}
			else if(month1 == month){
				if(day1 > day){
					alert("时间选择错误");
					return;
				}
			}
		}
		console.log(year,month,day,year1,month1,day1);
		if (window.XMLHttpRequest) {xmlhttp_time=new XMLHttpRequest();}
		
		else{xmlhttp_time=new ActiveXObject("Microsoft.XMLHTTP");}	
		xmlhttp_time.onreadystatechange=getResult;
		xmlhttp_time.open("POST","DataProperties",true);
		xmlhttp_time.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp_time.send("year="+year+"&month="+month+"&day="+day+"&year1="+year1+"&month1="+month1+"&day1="+day1);		
	}
	 window.time_issue2=function(){
		if (window.XMLHttpRequest) {xmlhttp_time=new XMLHttpRequest();}
		
		else{xmlhttp_time=new ActiveXObject("Microsoft.XMLHTTP");}	
		xmlhttp_time.onreadystatechange=getResult;
		xmlhttp_time.open("POST","DataPropertiesToday",true);
		xmlhttp_time.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		console.log(date);
		xmlhttp_time.send("year="+window.year+"&month="+window.month+"&day="+window.day+"&hour="+date.hrs+"&minute="+date.min+"&second="+date.sec);			
	}
	function getResult(){
		if (xmlhttp_time.readyState==4) {		
			if(xmlhttp_time.status==200){
				var rec=xmlhttp_time.responseText;
				response = JSON.parse(rec);
//				console.log('???');
//				console.log(response);
//				console.log(response.投诉);
				window.test_response.tousu = response.投诉;
				//console.log(window.test_response.tousu);
				window.test_response.jianyi = response.建议;
				window.test_response.zixun = response.咨询;
				window.test_response.ganxie = response.感谢;
				window.test_response.qiujue = response.求决;
				paint_pie();
			}
			else{
				alert("连接失败");
			}
		}
	}
	//var test_response = [];
	window.test_response = [];
	test_response.tousu=0;
	test_response.jianyi=0;
	test_response.zixun=0;
	test_response.ganxie=0;
	test_response.qiujue=0;
	test_response.qita=0;
	$('#time_button').click(function(){
		time_issue();
		
	})
	
	
//	for(var key in response){
//		alert('!!');
//		if(key == '投诉'){test_response.tousu = response['投诉'];}
//		else if(key == '建议'){test_response.jianyi = response['建议'];}
//		else if(key == '咨询'){test_response.zixun = response['咨询'];}
//		else if(key == '感谢'){test_response.ganxie = response['感谢'];}
//		else if(key == '求决'){test_response.qiujue = response['求决'];}
//		else if(key == '其他'){test_response.qita = response['其他'];}
//	}
	
	function paint_pie(){
//		console.log(response);
//		console.log(test_response);
//		console.log(test_response.tousu);
//		for(var key in test_response){
//			console.log(key);
//		}
//    	console.log('!!');
//    	console.log(test_response);
//    	console.log(test_response.tousu);
    var courserate = echarts.init(document.getElementById('courserate'));
    option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            right: '20%',
            y:'middle',
            textStyle:{
                color:"#000"
            },

            formatter:function(name){
            	
            	//console.log(option.series[0].data);
                var oa = option.series[0].data;
                var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value + oa[4].value;
                for(var i = 0; i < option.series[0].data.length; i++){
                    if(name==oa[i].name){
                        return name +  ' '+oa[i].value;
                    }
                }
            },
            data: ['投诉','建议','咨询','感谢','求决']
        },
        series : [
            	{
                name: '具体数据',
                type: 'pie',
                radius : '65%',
                color:['#27c2c1','#9ccb63','#fcd85a','#60c1de','#6495ED','#FFFF00'],
                center: ['30%', '50%'],
                data:[
                    {value:test_response.tousu, name:'投诉'},
                    {value:test_response.jianyi, name:'建议'},
                    {value:test_response.zixun, name:'咨询'},
                    {value:test_response.ganxie, name:'感谢'},
					{value:test_response.qiujue, name:'求决'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                itemStyle: {
                    normal: {
                        label:{
                            show: true,
                            position:'outside',
                            formatter: '{b}'
                        }
                    },
                    labelLine :{show:true}
                }
            }
        ]
    };
    courserate.setOption(option);
	//$('#content_pie').hide(0);
	}
//})
//统计图区域结束
	

//地图块开始
/* 地图 需要哪个省市的地图直接引用js 将下面的name以及mapType修改为对应省市名称*/
	var xmlhttp_map;
	function map_issue(){
		if (window.XMLHttpRequest) {xmlhttp_map=new XMLHttpRequest();}
		
		else{xmlhttp_map=new ActiveXObject("Microsoft.XMLHTTP");}	
		xmlhttp_map.onreadystatechange=getResult_map;
		xmlhttp_map.open("POST","HotCommunityToday",true);
		xmlhttp_map.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp_map.send("year="+window.year+"&month="+window.month+"&day="+window.day+"&hour="+date.hrs+"&minute="+date.min+"&second="+date.sec);				
	}
	
	function getResult_map(){
		if (xmlhttp_map.readyState==4) {		
			if(xmlhttp_map.status==200){
				var rec=xmlhttp_map.responseText;
				response_map = eval("("+rec+")");
				//console.log(response_map);
				var longtian,biliing,maluan,pingshanjiedao,kengzi,shijing;
				longtian = (response_map.龙田社区?response_map.龙田社区:0) + (response_map.老坑社区?response_map.老坑社区:0) + (response_map.南布社区?response_map.南布社区:0) + (response_map.竹坑社区?response_map.竹坑社区:0);
				kengzi = (response_map.沙田社区?response_map.沙田社区:0) + (response_map.金沙社区?response_map.金沙社区:0) + (response_map.秀新社区?response_map.秀新社区:0) + (response_map.坑梓社区?response_map.坑梓社区:0);
				biling = (response_map.碧岭社区?response_map.碧岭社区:0) + (response_map.汤坑社区?response_map.汤坑社区:0) + (response_map.沙湖社区?response_map.沙湖社区:0);
				maluan = (response_map.坪环社区?response_map.坪环社区:0) + (response_map.马峦社区?response_map.马峦社区:0) + (response_map.江岭社区?response_map.江岭社区:0) + (response_map.沙坣社区?response_map.沙坣社区:0);
				shijing = (response_map.石井社区?response_map.石井社区:0) + (response_map.田头社区?response_map.田头社区:0) + (response_map.田心社区?response_map.田心社区:0) + (response_map.金龟社区?response_map.金龟社区:0);
				pingshanjiedao = (response_map.六联社区?response_map.六联社区:0) + (response_map.和平社区?response_map.和平社区:0) + (response_map.六和社区?response_map.六和社区:0) + (response_map.坪山社区?response_map.坪山社区:0);
				//console.log(longtian,kengzi,biling,maluan,shijing,pingshanjiedao);
				var sf_data = [
				    {name: '坪山街道',value: pingshanjiedao},
				    {name: '马峦街道',value: maluan},
				    {name: '坑梓街道',value: kengzi},
				    {name: '碧岭街道',value: biling},
				    {name: '石井街道',value: shijing},
				    {name: '龙田街道',value: longtian},
					];
				window.longtian_color=[
					{name: '龙田社区',value: (response_map.龙田社区?response_map.龙田社区:0)},
				    {name: '老坑社区',value: (response_map.老坑社区?response_map.老坑社区:0)},
				    {name: '竹坑社区',value: (response_map.竹坑社区?response_map.竹坑社区:0)},
				    {name: '南布社区',value: (response_map.南布社区?response_map.南布社区:0)}];
				window.kengzi_color=[
					{name: '沙田社区',value: (response_map.沙田社区?response_map.沙田社区:0)},
				    {name: '金沙社区',value: (response_map.金沙社区?response_map.金沙社区:0)},
				    {name: '秀新社区',value: (response_map.秀新社区?response_map.秀新社区:0)},
				    {name: '坑梓社区',value: (response_map.坑梓社区?response_map.坑梓社区:0)}];
				window.biling_color=[
					{name: '碧岭社区',value: (response_map.碧岭社区?response_map.碧岭社区:0)},
				    {name: '汤坑社区',value: (response_map.汤坑社区?response_map.汤坑社区:0)},
				    {name: '沙湖社区',value: (response_map.沙湖社区?response_map.沙湖社区:0)}];
				window.maluan_color=[
					{name: '坪环社区',value: (response_map.坪环社区?response_map.坪环社区:0)},
				    {name: '马峦社区',value: (response_map.马峦社区?response_map.马峦社区:0)},
				    {name: '江岭社区',value: (response_map.江岭社区?response_map.江岭社区:0)},
				    {name: '沙坣社区',value: (response_map.沙坣社区?response_map.沙坣社区:0)}];
				window.shijing_color=[
					{name: '石井社区',value: (response_map.石井社区?response_map.石井社区:0)},
				    {name: '田头社区',value: (response_map.田头社区?response_map.田头社区:0)},
				    {name: '田心社区',value: (response_map.田心社区?response_map.田心社区:0)},
				    {name: '金龟社区',value: (response_map.金龟社区?response_map.金龟社区:0)}];
				window.pingshanjiedao_color=[
					{name: '六联社区',value: (response_map.六联社区?response_map.六联社区:0)},
				    {name: '和平社区',value: (response_map.和平社区?response_map.和平社区:0)},
				    {name: '六和社区',value: (response_map.六和社区?response_map.六和社区:0)},
				    {name: '坪山社区',value: (response_map.坪山社区?response_map.坪山社区:0)}];
				
				paint_map(sf_data);
			}
			else{
				alert("连接失败");
			}
		}
	}
function paint_map(sf_data){
    var maps = echarts.init(document.getElementById('mapadd_nav'));
    option = {
            tooltip : {
                trigger: 'item'
            },
    		legend: {
    			show : false,
    		    orient: 'vertical',
    		    x:'right',
    		    data:['坪山']
    		},
    		dataRange: {
    		    min: 0,
    		    max: 1000,
    		    y:'top',
    		    color:['#004b97','#acd6ff'],
    		    text:['高','低'],           // 文本，默认为数值文本
    		    calculable : true
    		},
            series : [{
                name: '坪山',
                type: 'map',
                mapType: '坪山',
                roam: false,
                top:'8%',
                zoom:1.2,
                x:'25%',
                selectedMode : 'single',//multiple多选
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
    			
                data:sf_data
            }]
        };
    maps.setOption(option);
	maps.on('click',function(params){
		switch (params.name){
			case '龙田街道':
				show_map('longtian');
				paint_longtian(window.longtian_color);
				break;
			case '坑梓街道':
				show_map('kengzi');
				paint_kengzi(window.kengzi_color);
				break;
			case '碧岭街道':
				show_map('biling');
				paint_biling(window.biling_color);
				break;
			case '坪山街道':
				show_map('pingshanjiedao');
				paint_pingshanjiedao(window.pingshanjiedao_color);
				break;
			case '石井街道':
				show_map('shijing');
				paint_shijing(window.shijing_color);
				break;
			case '马峦街道':
				show_map('maluan');
				paint_maluan(window.maluan_color);
				break;
		}; 
	});
}
function paint_longtian(color){
	var map_longtian = echarts.init(document.getElementById('longtian'));
	option = {
	        tooltip : {
	            trigger: 'item'
	        },
			legend: {
				show : false,
			    orient: 'vertical',
			    x:'right',
			    data:['龙田']
			},
			dataRange: {
			    min: 0,
			    max: 400,
			    y:'top',
			    color:['#004b97','#acd6ff'],
			    text:['高','低'],           // 文本，默认为数值文本
			    calculable : true
			},
	        series : [{
	            name: '龙田',
	            type: 'map',
	            mapType: '龙田',
	            roam: false,
	            top:'8%',
	            zoom:1.2,
	            x:'25%',
	            selectedMode : 'single',//multiple多选
	            itemStyle:{
	                normal:{label:{show:true}},
	                emphasis:{label:{show:true}}
	            },
				
	            data:color
	        }]
	    };
    map_longtian.setOption(option);
}
function paint_kengzi(color){	
	var map_kengzi = echarts.init(document.getElementById('kengzi'));
	option = {
	        tooltip : {
	            trigger: 'item'
	        },
			legend: {
				show : false,
			    orient: 'vertical',
			    x:'right',
			    data:['坑梓']
			},
			dataRange: {
			    min: 0,
			    max: 400,
			    y:'top',
			    color:['#004b97','#acd6ff'],
			    text:['高','低'],           // 文本，默认为数值文本
			    calculable : true
			},
	        series : [{
	            name: '坑梓',
	            type: 'map',
	            mapType: '坑梓',
	            roam: false,
	            top:'8%',
	            zoom:1.2,
	            x:'25%',
	            selectedMode : 'single',//multiple多选
	            itemStyle:{
	                normal:{label:{show:true}},
	                emphasis:{label:{show:true}}
	            },
				
	            data:color
	        }]
	    };
    map_kengzi.setOption(option);
}
function paint_pingshanjiedao(color){	
	var map_pingshanjiedao = echarts.init(document.getElementById('pingshanjiedao'));
	option = {
	        tooltip : {
	            trigger: 'item'
	        },
			legend: {
				show : false,
			    orient: 'vertical',
			    x:'right',
			    data:['坪山街道']
			},
			dataRange: {
			    min: 0,
			    max: 400,
			    y:'top',
			    color:['#004b97','#acd6ff'],
			    text:['高','低'],           // 文本，默认为数值文本
			    calculable : true
			},
	        series : [{
	            name: '坪山街道',
	            type: 'map',
	            mapType: '坪山街道',
	            roam: false,
	            top:'8%',
	            zoom:1.2,
	            x:'25%',
	            selectedMode : 'single',//multiple多选
	            itemStyle:{
	                normal:{label:{show:true}},
	                emphasis:{label:{show:true}}
	            },
				
	            data:color
	        }]
	    };
    map_pingshanjiedao.setOption(option);
}
function paint_biling(color){	
	var map_biling = echarts.init(document.getElementById('biling'));
	option = {
	        tooltip : {
	            trigger: 'item'
	        },
			legend: {
				show : false,
			    orient: 'vertical',
			    x:'right',
			    data:['碧岭']
			},
			dataRange: {
			    min: 0,
			    max: 400,
			    y:'top',
			    color:['#004b97','#acd6ff'],
			    text:['高','低'],           // 文本，默认为数值文本
			    calculable : true
			},
	        series : [{
	            name: '碧岭',
	            type: 'map',
	            mapType: '碧岭',
	            roam: false,
	            top:'8%',
	            zoom:1.2,
	            x:'25%',
	            selectedMode : 'single',//multiple多选
	            itemStyle:{
	                normal:{label:{show:true}},
	                emphasis:{label:{show:true}}
	            },
				
	            data:color
	        }]
	    };
    map_biling.setOption(option);
}
function paint_maluan(color){	
	var map_maluan = echarts.init(document.getElementById('maluan'));
	option = {
	        tooltip : {
	            trigger: 'item'
	        },
			legend: {
				show : false,
			    orient: 'vertical',
			    x:'right',
			    data:['马峦']
			},
			dataRange: {
			    min: 0,
			    max: 400,
			    y:'top',
			    color:['#004b97','#acd6ff'],
			    text:['高','低'],           // 文本，默认为数值文本
			    calculable : true
			},
	        series : [{
	            name: '马峦',
	            type: 'map',
	            mapType: '马峦',
	            roam: false,
	            top:'8%',
	            zoom:1.2,
	            x:'25%',
	            selectedMode : 'single',//multiple多选
	            itemStyle:{
	                normal:{label:{show:true}},
	                emphasis:{label:{show:true}}
	            },
				
	            data:color
	        }]
	    };
    map_maluan.setOption(option);
}
function paint_shijing(color){	
	var map_shijing = echarts.init(document.getElementById('shijing'));
	option = {
	        tooltip : {
	            trigger: 'item'
	        },
			legend: {
				show : false,
			    orient: 'vertical',
			    x:'right',
			    data:['石井']
			},
			dataRange: {
			    min: 0,
			    max: 400,
			    y:'top',
			    color:['#004b97','#acd6ff'],
			    text:['高','低'],           // 文本，默认为数值文本
			    calculable : true
			},
	        series : [{
	            name: '石井',
	            type: 'map',
	            mapType: '石井',
	            roam: false,
	            top:'8%',
	            zoom:1.2,
	            x:'25%',
	            selectedMode : 'single',//multiple多选
	            itemStyle:{
	                normal:{label:{show:true}},
	                emphasis:{label:{show:true}}
	            },
				
	            data:color
	        }]
	    };
    map_shijing.setOption(option);
}
//地图块结束
//事件结办区开始
$('#on_month').click(function(){
	situation_issue(1);
})
$('#on_season').click(function(){
	situation_issue(2);
})
$('#on_today').click(function(){
	situation_issue(3);
})
var xmlhttp_situation;
function situation_issue(flag){
//		var year1=document.getElementById('selected_year_pre').value;
//		var month1=document.getElementById('selected_month_pre').value;
//		var day1=document.getElementById('selected_day_pre').value;
//		var year=document.getElementById('selected_year').value;
//		var month=document.getElementById('selected_month').value;
//		var day=document.getElementById('selected_day').value;
//		console.log(year,month,day,year1,month1,day1);
	if (window.XMLHttpRequest) {xmlhttp_situation=new XMLHttpRequest();}
	
	else{xmlhttp_situation=new ActiveXObject("Microsoft.XMLHTTP");}	
	xmlhttp_situation.onreadystatechange=getResult_situation;
	xmlhttp_situation.open("POST","kind",true);
	xmlhttp_situation.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	var time = '';
	if(flag == 1){
		time = $('#selected_year_situation').val()+'-'+$('#selected_month_situation').val();
	}
	if(flag == 2){
		time = $('#selected_season_situation').val();
	}
	if(flag == 3){
		time = window.year+'-'+window.month+'-'+window.day+'-'+date.hrs+'-'+date.min+'-'+date.sec;
	}
	xmlhttp_situation.send("time="+time+"&flag="+flag);		
}

function getResult_situation(){
	if (xmlhttp_situation.readyState==4) {		
		if(xmlhttp_situation.status==200){
			var rec=xmlhttp_situation.responseText;
			window.response_situation = JSON.parse(rec);
			var ret=[];
			//console.log(window.response_situation);
			//ret = situation2_callback(response_situation);
			paint_situation();
			//paint_situation(ret[0],ret[1],ret[2]);
		}
		else{
			alert("连接失败");
		}
	}
}
//
//function situation2_callback(reponse){
//	var ret = [];
//	var dataType = [];
//	var colors = [];
//	for(var kinds in reponse){
//		if(kinds == '处置中' || kinds == '按期结办' ||kinds == '超期结办'){continue;}
//		else if(dataType.indexOf(kinds)>-1){continue;}
//		else{ataType.push(kinds);}
//	}
//	var color = 0x24f213;
//	var datas = [];
//	for(var i=0;i<dataType.length;i++){
//		color += 0x234567;
//		color = color & 0xffffff;
//		var temp = {};
//		temp.value = response[dataType[i]];
//		temp.name = dataType[i];
//		console.log(temp);
//		datas.push(temp);
//		colors.push(color);
//	}
//	ret[0]=dataType;
//	ret[1]=datas;
//	ret[2]=colors;
//	return ret;
//}
function paint_situation(){
	//console.log(window.response_situation.超期结办 );
	var courserate = echarts.init(document.getElementById('situation1'));
	option = {
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        orient: 'vertical',
	        right: '10%',
	        x:'center',
	        y:'top',
	        textStyle:{
	            color:"#000"
	        },
	
	        formatter:function(name){
	        	
	        	//console.log(option.series[0].data);
	            var oa = option.series[0].data;
	            var num = oa[0].value + oa[1].value + oa[2].value;
	            for(var i = 0; i < option.series[0].data.length; i++){
	                if(name==oa[i].name){
	                    return name +  ' '+oa[i].value;
	                }
	            }
	        },
	        data: ['处置中','按期结办','超期结办']
	    },
	    series : [
	        	{
	            name: '具体数据',
	            type: 'pie',
	            radius : '55%',
	            color:['red','#3CB371 ','#FFA500'],
	            center: ['30%', '50%'],
	            data:[
	                {value:window.response_situation.处置中.总量, name:'处置中'},
	                {value:window.response_situation.按期结办.总量, name:'按期结办'},
	                {value:window.response_situation.超期结办.总量, name:'超期结办'},
	            ],
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            },
	            itemStyle: {
	                normal: {
	                    label:{
	                        show: true,
	                        position:'outside',
	                        formatter: '{b}'
	                    }
	                },
	                labelLine :{show:true}
	            }
	        }
	    ]
	};
	
	courserate.setOption(option);
	courserate.on('click',function(params){
		paint_situation2(params.name);
	});
	//$('#content_pie').hide(0);
}
function createHexRandom(){ 
    var num = '';
 for (i = 0; i < 6; i++)
 {
    var tmp = Math.ceil(Math.random()*15);
    if(tmp > 9){
           switch(tmp){ 
               case(10):
                   num+='a';
                   break;
               case(11):
                   num+='b';
                   break;
               case(12):
                   num+='c';
                   break;
               case(13):
                   num+='d';
                   break;
               case(14):
                   num+='e';
                   break;
               case(15):
                   num+='f';
                   break;
           }
        }else{
           num+=tmp;
        }
 }
 return num;
}
function paint_situation2(name){
	var data_now = window.response_situation[name];
	//console.log(data_now);
	var dataType = [];
	var colors = [];
	for(var kinds in data_now){
		if(kinds == '总量'){continue;}
		else if(dataType.indexOf(kinds)>-1){continue;}
		else{dataType.push(kinds);}
	}
	//console.log(dataType);
	var datas = [];
	for(var i=0;i<dataType.length;i++){
		var color = createHexRandom();
		color = '#'+String(color);
		var temp = {};
		temp.value = data_now[dataType[i]];
		temp.name = dataType[i];
		colors.push(color);
		datas.push(temp);
	}
	var courserate = echarts.init(document.getElementById('situation2'));
	option = {
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        orient: 'vertical',
	        right: '5%',
	        x:'right',
	        y:'top',
	        textStyle:{
	            color:"#000"
	        },
	
	        formatter:function(name){
	        	
	        	//console.log(option.series[0].data);
	            var oa = option.series[0].data;
	            var num = oa[0].value + oa[1].value + oa[2].value;
	            for(var i = 0; i < option.series[0].data.length; i++){
	                if(name==oa[i].name){
	                    return name +  ' '+oa[i].value;
	                }
	            }
	        },
	        data: dataType
	    },
	    series : [
	        	{
	            name: '具体数据',
	            type: 'pie',
	            radius : ['35%','55%'],
	            color:colors,
	            center: ['30%', '50%'],
	            data:datas,
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            },
	            itemStyle: {
	                normal: {
	                    label:{
	                        show: true,
	                        position:'outside',
	                        formatter: '{b}'
	                    }
	                },
	                labelLine :{show:true}
	            }
	        }
	    ]
	};
	console.log(option);
	courserate.setOption(option);
}
}
//事件结办区结束
//setInterval(function(){canvas_change();},30000);