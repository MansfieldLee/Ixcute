<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Ixcute</title>
<link rel="stylesheet" type="text/css" href="http://www.jq22.com/jquery/bootstrap-3.3.4.css">
<link rel='stylesheet' type='text/css' href='Pages/CSS/echarts_ele.css'>
<link rel="stylesheet" type="text/css" href="http://www.jq22.com/jquery/font-awesome.4.6.0.css">
<link rel="stylesheet" type="text/css" href="Pages/CSS/bootsnav.css">
<link rel='stylesheet' type='text/css' href='Pages/CSS/main.css'>
	<script src="http://www.jq22.com/jquery/jquery-1.10.2.js"></script>
    <script src="https://cdn.bootcss.com/echarts/4.2.0-rc.2/echarts.min.js"></script>
	<script src='Pages/JS/pingshan.js'></script>
	<script src='Pages/JS/longtian.js'></script>
	<script src='Pages/JS/kengzi.js'></script>
	<script src='Pages/JS/pingshanjiedao.js'></script>
	<script src='Pages/JS/biling.js'></script>
	<script src='Pages/JS/maluan.js'></script>
	<script src='Pages/JS/shijing.js'></script>
	
</head>
<body>
    <div id='container' >
    	<div id='time_box' class='box_showed'>
        	<div id='clock_box'>
                <canvas id="canvas" width="400px" height="100px" style="margin:0px"/>
                <div id='scroll'></div>
            </div>
            <div id='clock_box2'>
                <canvas id="canvas2" width="380px" height="440px" style="margin:0px;left:65%;top:15%;position:relative;"/>
            </div>
            <script src="Pages/JS/clock.js"></script>
            
            <!--<script type='text/javascript'>
            
                var box1 = document.getElementById('clock_box');
                box1.onmousedown = function(){
                    document.onmousemove = function(e){
                        e = event ||window.event;
                        var left = e.pageX;
                        var top = e.pageY;
                        box1.style.left = left + 'px';
                        box1.style.top = top + 'px';
                    };
                    document.onmouseup = function(){
                        document.onmousemove = null;
                        document.onmouseup = null;
                    };
                };
                box1.onmousedown = function(e){
                    e = event ||window.event;
                    var reX = e.pageX;
                    var reY = e.pageY;
                    var box_left = Number(box1.style.left.replace('px',''));
                    var box_top = Number(box1.style.top.replace('px',''));
                    //注意，一定要在鼠标按下事件中保存原坐标，如果是在移动过程中保留，会是一个时刻变化的值
                    document.onmousemove = function(e){
                        e = event ||window.event;
                        var X_change = e.pageX - reX;
                        var Y_change = e.pageY - reY;
                        
                        var left = X_change + box_left;
                        var top = Y_change + box_top;
                        
                        box1.style.left = left + 'px';
                        box1.style.top = top + 'px';
                    
                    }
                    document.onmouseup = function(){
                        document.onmousemove = null;//取消move，让div停下来
                        document.onmouseup = null;//取消up事件是必须的，如果不取消，后面继续点击鼠标，up时还会执行这里
                    }
                }
            </script>-->
        </div>
    	<div id='head'>
        	<div class="jq22-container">
                <div class="demo" style="padding: 2em 0;">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <nav class="navbar navbar-default navbar-mobile bootsnav">
                                    <div class="navbar-header">
                                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                            <i class="fa fa-bars"></i>
                                        </button>
                                    </div>
                                    <div class="collapse navbar-collapse" id="navbar-menu">
                                    	
                                        <ul class="nav navbar-nav" data-in="fadeInDown" data-out="fadeOutUp" id='headmenu'>
                                            <li><a href="#">主页</a></li>
                                            <li><a href="#">关于</a></li>
                                            <li class="dropdown">
                                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">街道</a>
                                                <ul class="dropdown-menu" id='select_street'>
                                                    <select id='selected_street'>
                                                        <option value='0' >选择街道</option>
                                                        <option value='100'>碧岭街道</option>
                                                        <option value='101'>龙田街道</option>
                                                        <option value='102'>马峦街道</option>
                                                        <option value='103'>石井街道</option>
                                                        <option value='104'>坪山街道</option>
                                                        <option value='105'>坑梓街道</option>
                                                    </select>
                                                    <select id='blank'>
                                                        <option>请先选择街道</option>
                                                    </select>
                                                    <select class='selected_community' id='100'>
                                                        <option value='0'>选择社区</option>
                                                        <option value='10002'>汤坑社区</option>
                                                        <option value='10009'>碧岭社区</option>
                                                        <option value='10010'>沙湖社区</option>
                                                    </select>
                                                    <select class='selected_community' id='101'>
                                                        <option value='0'>选择社区</option>
                                                        <option value='10013'>竹坑社区</option>
                                                        <option value='10014'>老坑社区</option>
                                                        <option value='10018'>南布社区</option>
                                                        <option value='10020'>龙田社区</option>
                                                    </select>
                                                    <select class='selected_community' id='102'>
                                                        <option value='0'>选择社区</option>
                                                        <option value='10003'>江岭社区</option>
                                                        <option value='10004'>坪环社区</option>
                                                        <option value='10006'>沙坣社区</option>
                                                        <option value='10006'>马峦社区</option>
                                                    </select>
                                                    <select class='selected_community' id='103'>
                                                        <option value='0'>选择社区</option>
                                                        <option value='10001'>金龟社区</option>
                                                        <option value='10008'>田头社区</option>
                                                        <option value='10011'>田心社区</option>
                                                        <option value='10017'>石井社区</option>
                                                    </select>
                                                    <select class='selected_community' id='104'>
                                                        <option value='0'>选择社区</option>
                                                        <option value='10005'>坪山社区</option>
                                                        <option value='10007'>六联社区</option>
                                                        <option value='10012'>六和社区</option>
                                                        <option value='10016'>和平社区</option>
                                                    </select>
                                                    <select class='selected_community' id='105'>
                                                        <option value='0'>选择社区</option>
                                                        <option value='10015'>坑梓社区</option>
                                                        <option value='10019'>金沙社区</option>
                                                        <option value='10021'>沙田社区</option>
                                                        <option value='10022'>秀新社区</option>
                                                    </select>
                                                </ul>
                                            </li>
                                            <li class="dropdown">
                                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">事件类型</a>
                                                <ul class="dropdown-menu">
                                                    <li><a href="#">市容环卫</a></li>
                                                    <li><a href="#">教学管理</a></li>
                                                    <li class="dropdown">
                                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">城市管理</a>
                                                        <ul class="dropdown-menu">
                                                            <li><a href="#">乱摆摊</a></li>
                                                            <li><a href="#">交通信号设施</a></li>
                                                            <li class="dropdown">
                                                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">公共设施维护</a>
                                                                <ul class="dropdown-menu multi-dropdown">
                                                                    <li><a href="#">下水道堵塞</a></li>
                                                                    <li><a href="#">道路破损</a></li>
                                                                    <li><a href="#">电力井盖</a></li>
                                                                    <li><a href="#">通讯井盖</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a href="#">违法建设</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">拖欠工人薪资</a></li>
                                                    <li><a href="#">涉黄</a></li>
                                                    <li><a href="#">涉暴</a></li>
                                                    <li><a href="#">其他</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">紧急事件</a></li>
                                            <li><a href="#">本日评估</a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
        <div id='menu'>
        	<ul class="cd-accordion-menu animated">
                <li class="has-children">
                    <input type="checkbox" name ="group-1" id="group-1" checked>
                    <label for="group-1">功能1</label>
            
                    <ul>
                        <li>
                            <a href='javascript:myshow("map")'>地图</a>
                        </li>
                        <li>
                            <a href='javascript:myshow("bar")'>柱状图</a>
                        </li>
                        <li>
                            <a href='javascript:myshow("pie")'>饼图</a>
                        </li>
                    </ul>
                </li>
            
                <li class="has-children">
                    <input type="checkbox" name ="group-2" id="group-2">
                    <label for="group-2">功能2</label>
            
                    <ul>
                        <li><a href="#0">Image</a></li>
                        <li><a href="#0">Image</a></li>
                    </ul>
                </li>
            
                <li class="has-children">
                    <input type="checkbox" name ="group-3" id="group-3">
                    <label for="group-3">功能3</label>
            
                    <ul>
                        <li><a href="#0">Image</a></li>
                        <li><a href="#0">Image</a></li>
                    </ul>
                </li>
            
                <li class="has-children">
                    <input type="checkbox" name ="group-4" id="group-4">
                    <label for="group-4">功能4</label>
            
                    <ul>
                        <li><a href="#0">Image</a></li>
                        <li><a href="#0">Image</a></li>
                        <li><a href="#0">Image</a></li>
                        <li><a href="#0">Image</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div id='show_desk'>
    		<div id='content_map' class='table'>
                <div class="border-container" style="height:95%">
                    <div id="mapadd_nav" style="height:95%" class='map'></div>
					<div id='longtian_nav'>
						<a href='javascript:show_map("mapadd")'class='map'>&lt;-返回</a>
						<div id='longtian' style='height:400px;'></div>
					</div>
                    
					<div id='kengzi_nav'>
						<a href='javascript:show_map("mapadd")'class='map'>&lt;-返回</a>
						<div id='kengzi' style='height:400px;'></div>
					</div>
                    
					<div id='pingshanjiedao_nav'>
						<a href='javascript:show_map("mapadd")'class='map'>&lt;-返回</a>
						<div id='pingshanjiedao' style='height:400px;'></div>
					</div>
					<div id='biling_nav'>
						<a href='javascript:show_map("mapadd")'class='map'>&lt;-返回</a>
						<div id='biling' style='height:400px;'></div>
					</div>
					<div id='maluan_nav'>
						<a href='javascript:show_map("mapadd")'class='map'>&lt;-返回</a>
						<div id='maluan' style='height:400px;'></div>
					</div>
					<div id='shijing_nav'>
						<a href='javascript:show_map("mapadd")'class='map'>&lt;-返回</a>
						<div id='shijing' style='height:400px;'></div>
					</div>
                    <span class="top-left border-span"></span>
                    <span class="top-right border-span"></span>
                    <span class="bottom-left border-span"></span>
                    <span class="bottom-right border-span"></span>
                </div>
            </div>
            <div id='content_bar' class="main clearfix table">
                <div class="border-container" style="height:95%">
                    <div class="name-title">
                        <input type='button' id='bar_button' value='check' width='50px' height='30px'>
                    </div>
                    <div id="edubalance" style="height:95%"></div>
                    <span class="top-left border-span"></span>
                    <span class="top-right border-span"></span>
                    <span class="bottom-left border-span"></span>
                    <span class="bottom-right border-span"></span>
                </div>
            </div>
            
            
            <div id='content_pie' class="main teacher-pie clearfix table">
            	<div class='border-container' style="height:95%">
            		<div id='time_selector_pre'>
					    <table width="60%" border="0">
					      <tr>
							<td width='6%'>从：</td>	
					        <td width='21%'>
								<select id='selected_year_pre' class='time_select'>
									<option value='2018'>2018</option>
									<option value='2017'>2017</option>
									<option value='2016'>2016</option>
									<option value='2015'>2015</option>
									<option value='2014'>2014</option>
									<option value='2013'>2013</option>
									<option value='2012'>2012</option>
								</select>
							</td>
					        <td width='10%'>年</td>
					        <td width='21%'>
								<select id='selected_month_pre' class='time_select'>
									<option value='1'>1</option>
									<option value='2'>2</option>
									<option value='3'>3</option>
									<option value='4'>4</option>
									<option value='5'>5</option>
									<option value='6'>6</option>
									<option value='7'>7</option>
									<option value='8'>8</option>
									<option value='9'>9</option>
									<option value='10'>10</option>
									<option value='11'>11</option>
									<option value='12'>12</option>
								</select>
							</td>
					        <td width='10%'>月</td>
					        <td width='21%'>
								<select id='selected_day_pre' class='time_select'>
									<option value='1'>1</option>
									<option value='2'>2</option>
									<option value='3'>3</option>
									<option value='4'>4</option>
									<option value='5'>5</option>
									<option value='6'>6</option>
									<option value='7'>7</option>
									<option value='8'>8</option>
									<option value='9'>9</option>
									<option value='10'>10</option>
									<option value='11'>11</option>
									<option value='12'>12</option>
									<option value='13'>13</option>
									<option value='14'>14</option>
									<option value='15'>15</option>
									<option value='16'>16</option>
									<option value='17'>17</option>
									<option value='18'>18</option>
									<option value='19'>19</option>
									<option value='20'>20</option>
									<option value='21'>21</option>
									<option value='22'>22</option>
									<option value='23'>23</option>
									<option value='24'>24</option>
									<option value='25'>25</option>
									<option value='26'>26</option>
									<option value='27'>27</option>
									<option value='28'>28</option>
									<option value='29'>29</option>
									<option value='30'>30</option>
									<option value='31'>31</option>
								</select></td>
					        <td width='10%'>日</td>
					      </tr>
					    </table>
					</div>
                    <div id='time_selector'>
                        <table width="60%" border="0">
                          <tr>
                            <td width='6%'>至：</td>	
                            <td width='21%'>
								<select id='selected_year' class='time_select'>
									<option value='2018'>2018</option>
									<option value='2017'>2017</option>
									<option value='2016'>2016</option>
									<option value='2015'>2015</option>
									<option value='2014'>2014</option>
									<option value='2013'>2013</option>
									<option value='2012'>2012</option>
								</select>
							</td>
                            <td width='10%'>年</td>
                            <td width='21%'>
								<select id='selected_month' class='time_select'>
									<option value='1'>1</option>
									<option value='2'>2</option>
									<option value='3'>3</option>
									<option value='4'>4</option>
									<option value='5'>5</option>
									<option value='6'>6</option>
									<option value='7'>7</option>
									<option value='8'>8</option>
									<option value='9'>9</option>
									<option value='10'>10</option>
									<option value='11'>11</option>
									<option value='12'>12</option>
								</select>
							</td>
                            <td width='10%'>月</td>
                            <td width='21%'>
								<select id='selected_day' class='time_select'>
									<option value='1'>1</option>
									<option value='2'>2</option>
									<option value='3'>3</option>
									<option value='4'>4</option>
									<option value='5'>5</option>
									<option value='6'>6</option>
									<option value='7'>7</option>
									<option value='8'>8</option>
									<option value='9'>9</option>
									<option value='10'>10</option>
									<option value='11'>11</option>
									<option value='12'>12</option>
									<option value='13'>13</option>
									<option value='14'>14</option>
									<option value='15'>15</option>
									<option value='16'>16</option>
									<option value='17'>17</option>
									<option value='18'>18</option>
									<option value='19'>19</option>
									<option value='20'>20</option>
									<option value='21'>21</option>
									<option value='22'>22</option>
									<option value='23'>23</option>
									<option value='24'>24</option>
									<option value='25'>25</option>
									<option value='26'>26</option>
									<option value='27'>27</option>
									<option value='28'>28</option>
									<option value='29'>29</option>
									<option value='30'>30</option>
									<option value='31'>31</option>
								</select></td>
                            <td width='10%'>日</td>
                          </tr>
                          <tr>
                          	<td width='6%' colspan='2'><input type='button' value='查看' id='time_button'></td>
                          </tr>
                        </table>

                    </div>
                    <div id="courserate" style="height:95%">
                    </div>
                    <span class="top-left border-span"></span>
                    <span class="top-right border-span"></span>
                    <span class="bottom-left border-span"></span>
                    <span class="bottom-right border-span"></span>
                </div>
            </div>
            
            
            
        </div>
    </div>
    <script src='Pages/JS/main.js' type='text/javascript' ></script>
</body>
	<script src="http://www.jq22.com/jquery/bootstrap-3.3.4.js"></script>
	<script type="text/javascript" src="Pages/JS/bootsnav.js"></script>
</html>
