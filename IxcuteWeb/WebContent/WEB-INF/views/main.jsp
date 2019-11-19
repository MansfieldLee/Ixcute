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
    <div id='container'>
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
      
        
       <div id="menu">
       		<h2 id="menu-head">Ixcute</h2>
            <div><button class="menu-button" id="pie-button" onclick='javascript:myshow("pie","1")'><span class="glyphicon glyphicon-stats"></span> &nbsp; 问题性质汇总</button></div>
            <div><button class="menu-button" id="bar-button" onclick='javascript:myshow("bar","2")'><span class="glyphicon glyphicon-stats"></span> &nbsp; 各街道问题情况</button></div>
         <div><button class="menu-button" id="map-button" onclick='javascript:myshow("map","3")'><span class="glyphicon glyphicon-stats"></span> &nbsp; 热点地区</button></div>
       </div>
     
     
        <div id='show_desk'>
    		<div id='content_map' class='table'>
                <div class="border-container" style="height:95%">
                    <div id="mapadd" style="height:95%" class='map'></div>
                    <div id='longtian' style='height:400px;display: none;'><a href='javascript:show_map("mapadd")'class='map'>&lt;-返回</a></div>
                    <div id='kengzi' style='height:400px;display: none;'><a href='javascript:show_map("mapadd")'class='map'>&lt;-返回</a></div>
                    <div id='pingshanjiedao' style='height:400px;display: none;'><a href='javascript:show_map("mapadd")'class='map'>&lt;-返回</a></div>
                    <div id='biling' style='height:400px;display: none;'><a href='javascript:show_map("mapadd")'class='map'>&lt;-返回</a></div>
                    <div id='maluan' style='height:400px;display: none;'><a href='javascript:show_map("mapadd")'class='map'>&lt;-返回</a></div>
                    <div id='shijing' style='height:400px;display: none;'><a href='javascript:show_map("mapadd")'class='map'>&lt;-返回</a></div>
                </div>
            </div>
            <div id='content_bar' class="main clearfix table">
                <div class="border-container" style="height:95%">
                    <div class="name-title">
                        ===
                    </div>
                    <div id="edubalance" style="height:95%"></div>
                </div>
            </div>
            
            
            <div id='content_pie' class="main teacher-pie clearfix table">
            	<div class='border-container' style="height:95%">
                    <div id='time_selector' >
                        <table width="60%" border="0">
                          <tr>
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
							<td><button id='time_button'>查看</button></td>
                          </tr>
                        </table>

                    </div>
                    <div id="courserate" style="height:95%" align="center">
                    </div>
                </div>
            </div>
            
            
            
        </div>
    </div>
    <script src='Pages/JS/main.js' type='text/javascript' ></script>
</body>
	<script src="http://www.jq22.com/jquery/bootstrap-3.3.4.js"></script>
	<script type="text/javascript" src="Pages/JS/bootsnav.js"></script>
</html>
