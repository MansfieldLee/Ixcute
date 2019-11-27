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
<script src="https://cdn.staticfile.org/jquery/2.1.1/jquery.min.js"></script>
<link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css">  
<script src="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="Pages/CSS/roll.css">
<link rel="stylesheet" type="text/css" href="Pages/CSS/jedate.css"/>
    <script src="https://www.jq22.com/jquery/jquery-1.10.2.js"></script>
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
        </div>
      
        
       <div id="menu">
       		<h2 id="menu-head">Ixcute</h2>
         	<div><button class="menu-button-keep" id="map-button" onclick='javascript:myshow("map","3")'><span class="glyphicon glyphicon-stats"></span> &nbsp; 热点地区</button></div>
            <div><button class="menu-button" id="pie-button" onclick='javascript:myshow("pie","1")'><span class="glyphicon glyphicon-stats"></span> &nbsp; 问题性质汇总</button></div>
            <div><button class="menu-button" id="bar-button" onclick='javascript:myshow("bar","2")'><span class="glyphicon glyphicon-stats"></span> &nbsp; 各街道问题情况</button></div>
         	<div><button class="menu-button" id="situation-button" onclick='javascript:myshow("situation","4")'><span class="glyphicon glyphicon-stats"></span> &nbsp; 事件结办情况</button></div>
       		<div><button class="menu-button" id="eventlist-button" onclick='javascript:myshow("eventlist","5")'><span class="glyphicon glyphicon-stats"></span> &nbsp; 事件列表</button></div>
       		<a href="loginOut"><button class="menu-button"><span class="glyphicon glyphicon-stats"></span> &nbsp; 退出</button></a>
       </div>
     
     	<div class="news-scroll" id='warning_event'>

		    <div  class="scroll-box" style="background-color:red">
		        <!--异常-->
		        <div class="roll">
		            <ul id='each_warning_event'>
		            </ul>
		        </div>
		    </div>
		</div>
     
     	<div class="news-scroll" id='sc'>

		    <div  class="scroll-box">
		        <!--未结办-->
		        <div class="roll">
		            <ul id='scroller'>
		            </ul>
		        </div>
		    </div>
		</div>

     
     
        <div id='show_desk'>
    		<div id='content_map' class='table'>
                <div class="border-container" style="height:95%">
                	<div style="height:100%" id='ps'>
                		<div style="text-align:center;font-size:2em">坪山区热点地区</div>
                    	<div id="mapadd_nav" style="height:95%" class='map'></div>	
                	</div>
					<div id='longtian_nav'>
						<a href='javascript:show_map("mapadd")'class='map'>&lt;-返回</a>
						<div style="text-align:center;font-size:2em"">龙田街道</div>
						<div id='longtian' style='height:400px;'></div>
					</div>
                    
					<div id='kengzi_nav'>
						<a href='javascript:show_map("mapadd")'class='map'>&lt;-返回</a>
						<div style='text-align:center;font-size:2em'>坑梓街道</div>
						<div id='kengzi' style='height:400px;'></div>
					</div>
                    
					<div id='pingshanjiedao_nav'>
						<a href='javascript:show_map("mapadd")'class='map'>&lt;-返回</a>
						<div style='text-align:center;font-size:2em'>坪山街道</div>
						<div id='pingshanjiedao' style='height:400px;'></div>
					</div>
					<div id='biling_nav'>
						<a href='javascript:show_map("mapadd")'class='map'>&lt;-返回</a>
						<div style='text-align:center;font-size:2em'>碧岭街道</div>
						<div id='biling' style='height:400px;'></div>
					</div>
					<div id='maluan_nav'>
						<a href='javascript:show_map("mapadd")'class='map'>&lt;-返回</a>
						<div style='text-align:center;font-size:2em'>马峦街道</div>
						<div id='maluan' style='height:400px;'></div>
					</div>
					<div id='shijing_nav'>
						<a href='javascript:show_map("mapadd")'class='map'>&lt;-返回</a>
						<div style='text-align:center;font-size:2em'>石井街道</div>
						<div id='shijing' style='height:400px;'></div>
					</div>
                </div>
            </div>
            
            <div id='content_bar' class="main clearfix table">
                <div class="border-container" style="height:95%">
                    <div>
                    	<div class='time_selector'>
                        <table>
                          <tr>
                            <td width='35%'>
								<select id='selected_year' class='time_select'>
									<option value='2018'>2018</option>
									<option value='2017'>2017</option>
									<option value='2016'>2016</option>
								</select>
							</td>
                            <td width='5%'>年</td>
                            <td width='35%'>
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
                            <td width='5%'>月</td>
                            <td width='10%'><input type='button' class='btn btn-primary' id='bar_button' value='查看'></td>
                            <td width='10%'><input type='button' id='bar_button_today' value='查看今日' class='btn btn-primary'></td>
                          </tr>
                        </table>
                        
                    	</div>
                    </div>
                    <div id="edubalance" style="height:95%"></div>
                </div>
            </div>
           
            <div id='content_pie' class="main teacher-pie clearfix table">
            	<div class='border-container' style="height:13%">
            		
                    <div id='time_selector'>
                        <label>开始日期
                        	<input id='startTime' type='text' value='2018-10-29' width='250px'/>
                        </label>
                        <label>结束日期
                        	<input id='endTime' type='text' value='2018-10-30' width='250px'/>
                        </label>
                        <label>
                        	<button id='time_button' class='btn btn-primary'>查看</button>
                        </label>
                    </div>  
                </div>
                <div id="courserate"  align="center">
                    </div>
            </div>
            
            <div id='content_situation' class="main teacher-pie clearfix table table" style="height:95%">
            	<table border="0">
                          <tr>	
                            <td width='20%'>
								<select id='selected_year_situation' class='time_select'>
									<option value='2018'>2018</option>
									<option value='2018'>2017</option>
									<option value='2018'>2016</option>
								</select>
							</td>
							<td width='3%'>年</td>
							<td width='20%'>
								<select id='selected_month_situation' class='time_select'>
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
							<td width='3%'>月</td>
							<td width='14%'><input type='button' class='btn btn-primary' value='按月份查' id='on_month'></td>
						  	
						  	<td width='20%'>
						  		<select id='selected_season_situation' class='time_select'>
									<option value='1'>第一季度</option>
									<option value='2'>第二季度</option>
									<option value='3'>第三季度</option>
									<option value='4'>第四季度</option>
								</select>
							</td>
							<td width='3%'> </td>
							<td width='14%'><input type='button' class='btn btn-primary' value='按季度查'id='on_season'></td>
								
						  	<td width='14%'><input type='button' class='btn btn-primary' value='查今日' width='60%' id='on_today'></td>
						  </tr>
				</table>
                  <div id="situation1" style="height:500px;width:500px;float:left;left:7%;" ></div>
                  <div id="situation2" style="height:500px;width:500px;float:left;" ></div>
            </div>
            
            <div id='content_eventlist' class='table'>
            	<div style="text-align:center;font-size:2em">未结办和异常事件列表</div>
		        	<table id="event_table" class="table table-striped table-condensed">
		        		<thead>
		        			<tr>
		        				<th width="10%" text-align='center'>时间</th>
		        				<th width="10%" text-align='center'>街道</th>
		        				<th width="15%" text-align='center'>社区</th>
		        				<th width="10%" text-align='center'>来源</th>
		        				<th width="10%" text-align='center'>小类名称</th>
		        				<th width="10%" text-align='center'>性质</th>
		        				<th width="10%" text-align='center'>处置部门</th>
		        				<th width="10%" text-align='center'>优先级</th>
		        			</tr>
		        		</thead>
		        		<tbody id="dataTable"></tbody>
		        	</table>
		        	<ul class="pager">
						<li class="previous"><a href="javascript:previous_page()">&larr; 上一页</a></li>
						<li class="next"><a href="javascript:next_page()">下一页 &rarr;</a></li>
					</ul>
            </div>
            
        </div>
    </div>
    <script src='Pages/JS/main.js' type='text/javascript' ></script>
    <script src='Pages/JS/jedate.min.js'></script>
    <script src="Pages/JS/roll.js"></script>
    
</body>
	<script src="http://www.jq22.com/jquery/bootstrap-3.3.4.js"></script>
	<script type="text/javascript" src="Pages/JS/bootsnav.js"></script>
</html>
