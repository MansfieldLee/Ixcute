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
function myshow(showed){
	$('.table').hide(100);
	$('#content_'+showed).show(200);
}
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
    var courserate = echarts.init(document.getElementById('courserate'));
    option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            right: '5%',
            y:'middle',
            textStyle:{
                color:"#000"
            },

            formatter:function(name){
                var oa = option.series[0].data;
                var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value+oa[4].value+oa[5].value;
                for(var i = 0; i < option.series[0].data.length; i++){
                    if(name==oa[i].name){
                        return name +  ' '+oa[i].value;
                    }
                }
            },
            data: ['test1','test2','test3','test4','test5','text6']
        },
        series : [
            {
                name: 'FK',
                type: 'pie',
                radius : '65%',
                color:['#27c2c1','#9ccb63','#fcd85a','#60c1de','#0084c8','#d8514b'],
                center: ['30%', '50%'],
                data:[
                    {value:335, name:'test1'},
                    {value:310, name:'test2'},
                    {value:234, name:'test3'},
                    {value:135, name:'test4'},
                    {value:234, name:'test5'},
                    {value:234, name:'text6'}
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