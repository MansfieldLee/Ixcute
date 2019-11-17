// JavaScript Document
$(document).ready(function(){
	var accordionsMenu = $('.cd-accordion-menu');

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
	
	var date = new Object();
	date = get_date();
	//console.log(date);
	
	
}

document.getElementById('time_box').onmousewheel = function(){
	document.getElementById('time_box').setAttribute('class','box_hided');
	$('#clock_box2').slideUp(300);
	$('#clock_box').slideDown(0);
}
})

function myshow(showed){
	$('.table').hide(100);
	$('#content_'+showed).show(200);
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
//加载统计图区域：
//bar区：
$(function() {
    var edubalance = echarts.init(document.getElementById('edubalance'));
    option = {
        tooltip: {
            trigger: 'axis',
            formatter: '{b}</br>{a}: {c}</br>{a1}: {c1}</br>{a2}: {c2}</br>{a3}: {c3}'
        },
        toolbox: {
            show:false,
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        legend: {
            data:['test1','test2','test3','test4'],
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
                data: ['工藤新一','工藤新2','工藤新3','工藤新4'],
                splitLine:{
                    show:false,
                    lineStyle:{
                        color: '#000'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel:{
                    textStyle:{
                        color:"#000"
                    },
                    lineStyle:{
                        color: '#000'
                    },
                    alignWithLabel: true,
                    interval:0,
                }
            }
        ],
        yAxis: [
            {
                type: 'value',

                nameTextStyle:{
                    color:'#000'
                },
                interval: 5,
                max:30,
                min: 0,
                splitLine:{
                    show:true,
                    lineStyle:{
                        color: '#000'
                    }
                },
                axisLine: {
                    show:false,
                    lineStyle: {
                        color: '#000'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel:{
                    textStyle:{
                        color:"#000"
                    },
                    alignWithLabel: true,
                    interval:0

                }
            }
        ],
        color:"yellow",
        series: [
            {
                name:'test1',
                type:'bar',
                data:[21, 14, 17, 12],
                itemStyle: {
                    normal: {
                        color: '#76da91'
                        },label: {
                            show: true,
                            position: 'top',
                            formatter: '{c}'
                        }
                    }
            },
            {
                name:'test2',
                type:'bar',
                data:[12, 14, 17, 23],
                itemStyle: {
                    normal: {
                        color: '#f8cb7f'},
                    label: {
                            show: true,
                            position: 'top',
                            formatter: '{c}'
                        }
                    }
            },
            {
                name:'test3',
                type:'bar',
                data:[12, 14, 17, 13],
                itemStyle: {
                    normal: {
                        color: '#f89588'},
                    label: {
                            show: true,
                            position: 'top',
                            formatter: '{c}'

                    }
                }
            },
            {
                name:'test4',
                type:'bar',
                data:[2, 4, 7, 3],
                itemStyle: {
                    normal: {
                        color: '#7cd6cf'},
                    label: {
                            show: true,
                            position: 'top',
                            formatter: '{c}'
                        }
                }
            }
        ]
    };
    edubalance.setOption(option);
	$('#content_bar').hide(0);
/*  =====-=*/
//pie区：
	//时间事件ajax
	var xmlhttp;
	function time_issue(){
		//var year=document.getElementById('selected_year').value;
		//var month=document.getElementById('selected_month').value;
		//var day=document.getElementById('selected_day').value;
		var flag=0;//0 is year,1 is month,2 is day
		var year1='2018',month1='09',day1='01'
		var year='',month='',day='';
		for(var i=0;i<date.today.length;i++){
			if(date.today[i]=='/'){flag++;continue;}
			if(flag==0){year += date.today[i];}
			if(flag==1){month += date.today[i];}
			if(flag==2){day += date.today[i];}
		}
		
		//console.log(year,month,day);
		if (window.XMLHttpRequest) {xmlhttp=new XMLHttpRequest();}
		
		else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}	
		xmlhttp.onreadystatechange=getResult;
		xmlhttp.open("POST","DataProperties",true);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send("year="+year+"&month="+month+"&day="+day+"&year1="+year1+"&month1="+month1+"&day1="+day1);		
	}
	
	function getResult(){
		if (xmlhttp.readyState==4) {
			var rec=xmlhttp.responseText;
			alert(rec);
			if(xmlhttp.status==200){
				var rec=xmlhttp.responseText;
				console.log(rec);
			}
			else{
				alert("连接失败");
			}
		}
	}
	$('#time_button').click(function(){
		time_issue();
	})
	
	var test_response = new Object();
	test_response.tousu=111;
	test_response.jianyi=222;
	test_response.zixun=333;
	test_response.ganxie=333;
	test_response.qiujue=444;
	test_response.qita=555;
	
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
                var oa = option.series[0].data;
                var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value + oa[4].value + oa[5].value;
                for(var i = 0; i < option.series[0].data.length; i++){
                    if(name==oa[i].name){
                        return name +  ' '+oa[i].value;
                    }
                }
            },
            data: ['投诉','建议','咨询','感谢','求决','其他']
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
					{value:test_response.qiujue, name:'求决'},
					{value:test_response.qita, name:'其他'},
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
	$('#content_pie').hide(0);
})
//统计图区域结束

//地图块开始
/* 地图 需要哪个省市的地图直接引用js 将下面的name以及mapType修改为对应省市名称*/
	function show_map(showd){
		$('.map').style.display='none';
		$('#'+showd).style.display='block';
	}
    var maps = echarts.init(document.getElementById('mapadd'));
    option = {
        tooltip : {
            trigger: 'item',
            formatter: '{b}'
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
                normal:{
                    label:{
                        show:true,
                        textStyle: {
                            color: "#231816"//地图上的字体颜色
                        }
                    },
                    areaStyle:{color:'#fff'},
                    color:'#fff',
                    borderColor:'#fff'//区块的边框颜色
                },
                emphasis:{//鼠标hover样式
                    label:{
                        show:true,
                        textStyle:{
                            color:'red'//hover后的字体颜色
                        }
                    },
                    areaStyle:{color:'#fff'}
                }
            },
            data:[
                {name:'坪山街道',
                    itemStyle: {
                        normal: {
                            areaColor: 'green',
                            borderColor: '#edce00'
                        }
                    }
                },
                {name:'马峦街道',
                    itemStyle: {
                        normal: {
                            areaColor: 'yellow',
                            borderColor: '#0abcee'
                        }
                    }
                }, 
                {name:'石井街道',
                    itemStyle: {
                        normal: {
                            areaColor: '#92d050',
                            borderColor: '#1ca9f2'
                        }
                    }
                },
                {name:'碧岭街道',
                    itemStyle: {
                        normal: {
                            areaColor: '#88ddf5',
                            borderColor: '#88ddf5',
                        }
                    }
                },
                {name:'坑梓街道',
                    itemStyle: {
                        normal: {
                            areaColor: '#13d5ff',
                            borderColor: '#45b5ef',
                        }
                    }
                },
                {name:'龙田街道',
                    itemStyle: {
                        normal: {
                            areaColor: 'red',
                            borderColor: '#45b5ef'
                        }
                    }
                },
               
                
               
            ]
        }]
    };
    maps.setOption(option);
	
	var map_longtian = echarts.init(document.getElementById('longtian'));
    option = {
        tooltip : {
            trigger: 'item',
            formatter: '{b}'
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
                normal:{
                    label:{
                        show:true,
                        textStyle: {
                            color: "#231816"
                        }
                    },
                    areaStyle:{color:'#B1D0EC'},
                    color:'#B1D0EC',
                    borderColor:'#dadfde'//区块的边框颜色
                },
                emphasis:{//鼠标hover样式
                    label:{
                        show:true,
                        textStyle:{
                            color:'#fa4f04'
                        }
                    },
                    areaStyle:{color:'red'}
                }
            },
            data:[
                {name:'龙田社区',
                    itemStyle: {
                        normal: {
                            areaColor: 'green',
                            borderColor: '#edce00'
                        }
                    }
                },
                {name:'竹坑社区',
                    itemStyle: {
                        normal: {
                            areaColor: 'yellow',
                            borderColor: '#0abcee'
                        }
                    }
                }, 
                {name:'南布社区',
                    itemStyle: {
                        normal: {
                            areaColor: '#92d050',
                            borderColor: '#1ca9f2'
                        }
                    }
                },
                {name:'老坑社区',
                    itemStyle: {
                        normal: {
                            areaColor: '#88ddf5',
                            borderColor: '#88ddf5',
                        }
                    }
                },
                
            ]
        }]
    };
    map_longtian.setOption(option);
	
	var map_kengzi = echarts.init(document.getElementById('kengzi'));
    option = {
        tooltip : {
            trigger: 'item',
            formatter: '{b}'
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
                normal:{
                    label:{
                        show:true,
                        textStyle: {
                            color: "#231816"
                        }
                    },
                    areaStyle:{color:'#B1D0EC'},
                    color:'#B1D0EC',
                    borderColor:'#dadfde'//区块的边框颜色
                },
                emphasis:{//鼠标hover样式
                    label:{
                        show:true,
                        textStyle:{
                            color:'#fa4f04'
                        }
                    },
                    areaStyle:{color:'red'}
                }
            },
            data:[
                {name:'坑梓社区',
                    itemStyle: {
                        normal: {
                            areaColor: 'green',
                            borderColor: '#edce00'
                        }
                    }
                },
                {name:'金沙社区',
                    itemStyle: {
                        normal: {
                            areaColor: 'yellow',
                            borderColor: '#0abcee'
                        }
                    }
                }, 
                {name:'沙田社区',
                    itemStyle: {
                        normal: {
                            areaColor: '#92d050',
                            borderColor: '#1ca9f2'
                        }
                    }
                },
                {name:'秀新社区',
                    itemStyle: {
                        normal: {
                            areaColor: '#88ddf5',
                            borderColor: '#88ddf5',
                        }
                    }
                },
                
            ]
        }]
    };
    map_kengzi.setOption(option);
	
	var map_pingshanjiedao = echarts.init(document.getElementById('pingshanjiedao'));
    option = {
        tooltip : {
            trigger: 'item',
            formatter: '{b}'
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
                normal:{
                    label:{
                        show:true,
                        textStyle: {
                            color: "#231816"
                        }
                    },
                    areaStyle:{color:'#B1D0EC'},
                    color:'#B1D0EC',
                    borderColor:'#dadfde'//区块的边框颜色
                },
                emphasis:{//鼠标hover样式
                    label:{
                        show:true,
                        textStyle:{
                            color:'#fa4f04'
                        }
                    },
                    areaStyle:{color:'red'}
                }
            },
            data:[
                {name:'坪山社区',
                    itemStyle: {
                        normal: {
                            areaColor: 'green',
                            borderColor: '#edce00'
                        }
                    }
                },
                {name:'六和社区',
                    itemStyle: {
                        normal: {
                            areaColor: 'yellow',
                            borderColor: '#0abcee'
                        }
                    }
                }, 
                {name:'六联社区',
                    itemStyle: {
                        normal: {
                            areaColor: '#92d050',
                            borderColor: '#1ca9f2'
                        }
                    }
                },
                {name:'和平社区',
                    itemStyle: {
                        normal: {
                            areaColor: '#88ddf5',
                            borderColor: '#88ddf5',
                        }
                    }
                },
                
            ]
        }]
    };
    map_pingshanjiedao.setOption(option);
	
	var map_biling = echarts.init(document.getElementById('biling'));
    option = {
        tooltip : {
            trigger: 'item',
            formatter: '{b}'
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
                normal:{
                    label:{
                        show:true,
                        textStyle: {
                            color: "#231816"
                        }
                    },
                    areaStyle:{color:'#B1D0EC'},
                    color:'#B1D0EC',
                    borderColor:'#dadfde'//区块的边框颜色
                },
                emphasis:{//鼠标hover样式
                    label:{
                        show:true,
                        textStyle:{
                            color:'#fa4f04'
                        }
                    },
                    areaStyle:{color:'red'}
                }
            },
            data:[
                {name:'碧岭社区',
                    itemStyle: {
                        normal: {
                            areaColor: 'green',
                            borderColor: '#edce00'
                        }
                    }
                },
                {name:'沙湖社区',
                    itemStyle: {
                        normal: {
                            areaColor: 'yellow',
                            borderColor: '#0abcee'
                        }
                    }
                }, 
                {name:'汤坑社区',
                    itemStyle: {
                        normal: {
                            areaColor: '#92d050',
                            borderColor: '#1ca9f2'
                        }
                    }
                },
                
            ]
        }]
    };
    map_biling.setOption(option);
	
	var map_maluan = echarts.init(document.getElementById('maluan'));
    option = {
        tooltip : {
            trigger: 'item',
            formatter: '{b}'
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
                normal:{
                    label:{
                        show:true,
                        textStyle: {
                            color: "#231816"
                        }
                    },
                    areaStyle:{color:'#B1D0EC'},
                    color:'#B1D0EC',
                    borderColor:'#dadfde'//区块的边框颜色
                },
                emphasis:{//鼠标hover样式
                    label:{
                        show:true,
                        textStyle:{
                            color:'#fa4f04'
                        }
                    },
                    areaStyle:{color:'red'}
                }
            },
            data:[
                {name:'江岭社区',
                    itemStyle: {
                        normal: {
                            areaColor: 'green',
                            borderColor: '#edce00'
                        }
                    }
                },
                {name:'坪环社区',
                    itemStyle: {
                        normal: {
                            areaColor: 'yellow',
                            borderColor: '#0abcee'
                        }
                    }
                }, 
                {name:'沙坣社区',
                    itemStyle: {
                        normal: {
                            areaColor: '#92d050',
                            borderColor: '#1ca9f2'
                        }
                    }
                },
                {name:'马峦社区',
                    itemStyle: {
                        normal: {
                            areaColor: '#92d050',
                            borderColor: '#1ca9f2'
                        }
                    }
                },
            ]
        }]
    };
    map_maluan.setOption(option);
	
	var map_shijing = echarts.init(document.getElementById('shijing'));
    option = {
        tooltip : {
            trigger: 'item',
            formatter: '{b}'
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
                normal:{
                    label:{
                        show:true,
                        textStyle: {
                            color: "#231816"
                        }
                    },
                    areaStyle:{color:'#B1D0EC'},
                    color:'#B1D0EC',
                    borderColor:'#dadfde'//区块的边框颜色
                },
                emphasis:{//鼠标hover样式
                    label:{
                        show:true,
                        textStyle:{
                            color:'#fa4f04'
                        }
                    },
                    areaStyle:{color:'red'}
                }
            },
            data:[
                {name:'金龟社区',
                    itemStyle: {
                        normal: {
                            areaColor: 'green',
                            borderColor: '#edce00'
                        }
                    }
                },
                {name:'田心社区',
                    itemStyle: {
                        normal: {
                            areaColor: 'yellow',
                            borderColor: '#0abcee'
                        }
                    }
                }, 
                {name:'田头社区',
                    itemStyle: {
                        normal: {
                            areaColor: '#92d050',
                            borderColor: '#1ca9f2'
                        }
                    }
                },
                {name:'石井社区',
                    itemStyle: {
                        normal: {
                            areaColor: '#92d050',
                            borderColor: '#1ca9f2'
                        }
                    }
                },
            ]
        }]
    };
    map_shijing.setOption(option);

//地图块开始
