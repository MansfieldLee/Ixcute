//这里是小时钟
window.date = new Object();

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.strokeStyle = 'black';
ctx.lineWidth = 3;
ctx.shadowBlur= 5;
ctx.shadowColor = 'black';

var milliseconds = 0;
var minutes = 0;
var hour = 0;
var week = "";

var ms = 0;
var s = 0;
var m = 0;
var h = 0;

var ctxBack = canvas.getContext("2d");
var numBack = canvas.getContext("2d");
//Number	
ctxBack.lineWidth = 1;//外圈线粗
ctxBack.shadowBlur= 0;
ctxBack.shadowColor = 'black';

function pageInit(){
	ms = ms + 50;
	if(ms == 300){
		ms = -700;
		s++;	
	}
	if(s == 30){
		s = -30;
		m++;
	}
	if(m == 37){
		m = -23;
		h++;
	}
	if(h == 9){
		h = -15;
	}
	canvas.setAttribute('height', 100);//重新设置canvas的高度能够清除之前显示画布信息
	showTime(ms,s,m,h);
	showBack();
	drawSecPin();
	drawMinPin();
	drawHouPin();
	setPoint();
	setNum();
}

function setNum(){
	numBack.save();
	numBack.translate(51,50);//这是圆心位置
	numBack.beginPath();
	numBack.fillStyle = 'black';//这是1-12的颜色
	numBack.font="10px Helvetica";
	for (var i = 0;i<60;i++) {
		if(i % 5 ==0){
			numBack.lineWidth=2;
			var xPoint = Math.sin(i*6*2*Math.PI/360)*41;
			var yPoint = -Math.cos(i*6*2*Math.PI/360)*41;
			//这是横向半径和纵向半径
			numBack.fillText(i == 0 ? 12 : i/5,
				i == 0 ? -7.5 : xPoint-5, i == 0 ? -40 : i <= 30 ? yPoint+2.5 : yPoint+5);
		}
	}
	numBack.stroke();
	numBack.closePath();
	numBack.restore();
}



// 绘制秒针
function drawSecPin(){
	ctxBack.save();
	ctxBack.translate(50,50);
	ctxBack.rotate(milliseconds/60*2*Math.PI);
	ctxBack.beginPath();
	ctxBack.strokeStyle = '#AFEEEE';//秒针颜色
	ctxBack.lineWidth = 1;
	ctxBack.lineJoin="bevel";
	ctxBack.miterLimit=10;
	ctxBack.moveTo(0,16);
	ctxBack.lineTo(1,-36);
	ctxBack.lineTo(2,-40);
	ctxBack.lineTo(0,-44);
	ctxBack.lineTo(-2,-40);
	ctxBack.lineTo(-1,-36);
	ctxBack.lineTo(0,16);
	ctxBack.stroke();
	ctxBack.closePath();
	ctxBack.restore();
}

// 绘制分针
function drawMinPin(){
	ctxBack.save();
	ctxBack.translate(50,50);
	ctxBack.rotate(minutes*6*Math.PI/180);
	ctxBack.beginPath();
	ctxBack.strokeStyle = '#20B2AA';//分针颜色
	ctxBack.lineWidth = 1;
	ctxBack.lineJoin="bevel";
	ctxBack.miterLimit=10;

	ctxBack.moveTo(0,13);
	ctxBack.lineTo(1,-24);
	ctxBack.lineTo(2,-28);
	ctxBack.lineTo(0,-32);
	ctxBack.lineTo(-2,-28);
	ctxBack.lineTo(-1,-24);
	ctxBack.lineTo(0,13);
	ctxBack.stroke();
	ctxBack.closePath();
	ctxBack.restore();
	
}

// 绘制时针
function drawHouPin(){
	
	ctxBack.save();
	ctxBack.translate(50,50);
	ctxBack.rotate(hour*30*Math.PI/180);
	ctxBack.beginPath();
	ctxBack.strokeStyle = '#87CEFA';//时针颜色
	ctxBack.lineWidth = 1;
	ctxBack.lineJoin="bevel";
	ctxBack.miterLimit=10;

	ctxBack.moveTo(0,10);
	ctxBack.lineTo(1,-16);
	ctxBack.lineTo(2,-20);
	ctxBack.lineTo(0,-24);
	ctxBack.lineTo(-2,-20);
	ctxBack.lineTo(-1,-16);
	ctxBack.lineTo(0,10);
	ctxBack.stroke();
	ctxBack.closePath();
	ctxBack.restore();
	
}

function setPoint(){
	ctxBack.beginPath();
	ctxBack.fillStyle = 'black';
	ctxBack.arc(50,50,3, 0, 2*Math.PI);
	ctxBack.stroke();
}


function showBack(){
	for(var i = 0; i < 60; i++){
		ctxBack.save();
		ctxBack.translate(50,50);
		ctxBack.rotate(i/60*2*Math.PI);
		ctxBack.beginPath();
		ctxBack.strokeStyle = 'black';//刻度颜色
		ctxBack.moveTo(0,-48);
		ctxBack.lineWidth = i%5==0 ? 2 : 1;
		ctxBack.lineTo(0,-46);
		ctxBack.stroke();
		ctxBack.closePath();
		ctxBack.restore();
	}
	ctxBack.beginPath();
	ctxBack.arc(50,50,49, 0, 2*Math.PI);
	ctxBack.stroke();
}

function degToRad(degree){
	var result;
	var factor = Math.PI/180;
	if(degree == 0){
		result = 270*factor;
	}else{
		result = degree*factor;
	}
	return result;
}

function showTime(ms,s,m,h){

	var now = new Date();
	date.today = '2018/10/30';
	date.day = 3;
	date.hrs = 15 + h;
	date.min = 23 + m;
	date.sec = 30 + s;
	date.mil = 700 + ms;
	set_background_image(date.hrs);
	var time = String(date.hrs)+':'+String(date.min)+':'+String(date.sec);
	var smoothsec = date.sec+(date.mil/1000);
	var smoothmin = date.min+(smoothsec/60);
	var hours = date.hrs+(smoothmin/60);

	milliseconds = smoothsec;
	minutes = smoothmin;
	hour = hours;

	switch (date.day){
		case 1 : week = '一'
			break;
		case 2 : week = '二'
			break;
		case 3 : week =  '三'
			break;
		case 4 : week =  '四'
			break;
		case 5 : week =  '五'
			break;
		case 6 : week =  '六'
			break;
		case 0 : week =  '日'
			break;
	}

	//Background
	gradient = ctx.createRadialGradient(50, 50, 2, 50, 50, 50);//渐变方法：参数123是圆心和起始半径，456是终止半径
	gradient.addColorStop(0, "#03303a");//时钟圆盘背景由内向外渐变色
	gradient.addColorStop(1, "transparent");//时钟圆盘背景由外向内渐变色，第一个参数可以是0.1,0.5之类的小数，表示内外距离比
	ctx.fillStyle = gradient;
	ctx.fillRect(0, 0, 300, 100);

	//Date
	ctx.font = "20px Helvetica Bold";
	ctx.fillStyle = '#03303a';//整体日期
	ctx.fillText(date.today+"/星期"+week, 120, 45);
	//Time
	ctx.font = "16px Helvetica Bold";
	ctx.fillStyle = '#03303a';//整体时间
	//ctx.fillText(time+":"+mil, 160, 280);
	ctx.fillText(time, 140, 65);
}
//var now = new Date();
//	var today = now.toLocaleDateString();
//	var time = now.toLocaleTimeString();
//	var day = now.getDay();
//	var hrs = now.getHours();
//	var min = now.getMinutes();
//	var sec = now.getSeconds();
//	var mil = now.getMilliseconds();
//	console.log(today);
//	console.log(time);
//	console.log(day);
//	console.log(hrs);
//	console.log(min);
//	console.log(sec);
//	console.log(mil);
//小时钟结束


//大时钟开始
var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext("2d");

ctx2.strokeStyle = '#3BAABB';
ctx2.lineWidth = 3;
ctx2.shadowBlur= 5;
ctx2.shadowColor = '#3BAABB';

var ctx2Back = canvas2.getContext("2d");
var num2Back = canvas2.getContext("2d");
//Number	
ctx2Back.lineWidth = 2;//外圈线粗
ctx2Back.shadowBlur= 0;
ctx2Back.shadowColor = '##3BAABB';

function pageInit2(){
	ms = ms + 50;
	if(ms == 300){
		ms = -700;
		s++;	
	}
	if(s == 30){
		s = -30;
		m++;
	}
	if(m == 37){
		m = -23;
		h++;
	}
	if(h == 4){
		h = -20;
	}
	canvas2.setAttribute('height', 440);//重新设置canvas的高度能够清除之前显示画布信息
	showTime2(ms,s,m,h);
	showBack2();
	drawSecPin2();
	drawMinPin2();
	drawHouPin2();
	setPoint2();
	setNum2();
}

function setNum2(){
	num2Back.save();
	num2Back.translate(188,192);//这是圆心位置
	num2Back.beginPath();
	num2Back.fillStyle = '#3BAABB';//这是1-12的颜色
	num2Back.font="18px Helvetica";
	for (var i = 0;i<60;i++) {
		if(i % 5 ==0){
			num2Back.lineWidth=10;
			var xPoint = Math.sin(i*6*2*Math.PI/360)*160;
			var yPoint = -Math.cos(i*6*2*Math.PI/360)*160;
			//这是横向半径和纵向半径
			num2Back.fillText(i == 0 ? 12 : i/5,
				i == 0 ? -7.5 : xPoint-5, i == 0 ? -152 : i <= 30 ? yPoint+2.5 : yPoint+5);
		}
	}
	num2Back.stroke();
	num2Back.closePath();
	num2Back.restore();
}



// 绘制秒针
function drawSecPin2(){
	ctx2Back.save();
	ctx2Back.translate(190,190);
	ctx2Back.rotate(milliseconds/60*2*Math.PI);
	ctx2Back.beginPath();
	ctx2Back.strokeStyle = '#3BAABB';//秒针颜色
	ctx2Back.lineWidth = 2;
	ctx2Back.lineJoin="bevel";
	ctx2Back.miterLimit=10;
	ctx2Back.moveTo(0,30);
	ctx2Back.lineTo(4,-120);
	ctx2Back.lineTo(10,-100);
	ctx2Back.lineTo(0,-146);
	ctx2Back.lineTo(-10,-100);
	ctx2Back.lineTo(-4,-120);
	ctx2Back.lineTo(0,30);
	ctx2Back.stroke();
	ctx2Back.closePath();
	ctx2Back.restore();
}

// 绘制分针
function drawMinPin2(){
	ctx2Back.save();
	ctx2Back.translate(190,190);
	ctx2Back.rotate(minutes*6*Math.PI/180);
	ctx2Back.beginPath();
	ctx2Back.strokeStyle = '#BFDDDA';//分针颜色
	ctx2Back.lineWidth = 2;
	ctx2Back.lineJoin="bevel";
	ctx2Back.miterLimit=10;

	ctx2Back.moveTo(0,20);
	ctx2Back.lineTo(4,-110);
	ctx2Back.lineTo(8,-100);
	ctx2Back.lineTo(0,-132);
	ctx2Back.lineTo(-8,-100);
	ctx2Back.lineTo(-4,-110);
	ctx2Back.lineTo(0,20);
	ctx2Back.stroke();
	ctx2Back.closePath();
	ctx2Back.restore();
	
}

// 绘制时针
function drawHouPin2(){
	
	ctx2Back.save();
	ctx2Back.translate(190,190);
	ctx2Back.rotate(hour*30*Math.PI/180);
	ctx2Back.beginPath();
	ctx2Back.strokeStyle = '#87CEFA';//时针颜色
	ctx2Back.lineWidth = 2;
	ctx2Back.lineJoin="bevel";
	ctx2Back.miterLimit=10;

	ctx2Back.moveTo(0,20);
	ctx2Back.lineTo(4,-80);
	ctx2Back.lineTo(8,-70);
	ctx2Back.lineTo(0,-118);
	ctx2Back.lineTo(-8,-70);
	ctx2Back.lineTo(-4,-80);
	ctx2Back.lineTo(0,20);
	ctx2Back.stroke();
	ctx2Back.closePath();
	ctx2Back.restore();
	
}

function setPoint2(){
	ctx2Back.beginPath();
	ctx2Back.fillStyle = 'black';
	ctx2Back.arc(190,190,3, 0, 2*Math.PI);
	ctx2Back.stroke();
}


function showBack2(){
	for(var i = 0; i < 60; i++){
		ctx2Back.save();
		ctx2Back.translate(190,190);
		ctx2Back.rotate(i/60*2*Math.PI);
		ctx2Back.beginPath();
		ctx2Back.strokeStyle = '#3BAABB';//刻度颜色
		ctx2Back.moveTo(0,-180);
		ctx2Back.lineWidth = i%5==0 ? 4 : 2;
		ctx2Back.lineTo(0,-168);
		ctx2Back.stroke();
		ctx2Back.closePath();
		ctx2Back.restore();
	}
	ctx2Back.beginPath();
	ctx2Back.arc(190,190,182, 0, 2*Math.PI);
	ctx2Back.stroke();
	ctx2Back.beginPath();
	ctx2Back.arc(190,190,183, 0, 2*Math.PI);
	ctx2Back.stroke();
	ctx2Back.beginPath();
	ctx2Back.arc(190,190,184, 0, 2*Math.PI);
	ctx2Back.stroke();
	ctx2Back.beginPath();
	ctx2Back.arc(190,190,185, 0, 2*Math.PI);
	ctx2Back.stroke();
}

function degToRad2(degree){
	var result;
	var factor = Math.PI/180;
	if(degree == 0){
		result = 270*factor;
	}else{
		result = degree*factor;
	}
	return result;
}

function showTime2(ms,s,m,h){

	var now = new Date();
	date.today = '2018/10/30';
	date.day = 3;
	date.hrs = 20 + h;
	date.min = 23 + m;
	date.sec = 30 + s;
	date.mil = 700 + ms;
	set_background_image(date.hrs);
	var time = String(date.hrs)+':'+String(date.min)+':'+String(date.sec);
	var smoothsec = date.sec+(date.mil/1000);
	var smoothmin = date.min+(smoothsec/60);
	var hours = date.hrs+(smoothmin/60);

	milliseconds = smoothsec;
	minutes = smoothmin;
	hour = hours;

	switch (date.day){
		case 1 : week = '一'
			break;
		case 2 : week = '二'
			break;
		case 3 : week =  '三'
			break;
		case 4 : week =  '四'
			break;
		case 5 : week =  '五'
			break;
		case 6 : week =  '六'
			break;
		case 0 : week =  '日'
			break;
	}

	//Background
	gradient = ctx2.createRadialGradient(190, 190, 5, 190, 190, 200);//渐变方法：参数123是圆心和起始半径，456是终止半径
	gradient.addColorStop(0, "#3BAABB");//时钟圆盘背景由内向外渐变色
	gradient.addColorStop(1, "transparent");//时钟圆盘背景由外向内渐变色，第一个参数可以是0.1,0.5之类的小数，表示内外距离比
	ctx2.fillStyle = gradient;
	ctx2.fillRect(0, 0, 380, 440);

	//Hours
	ctx2.beginPath();
	ctx2.strokeStyle = '#87CEFA';//时针轨迹圆圈颜色
	ctx2.arc(190,190,118, degToRad2(0), degToRad2((hours*30)-90));
	ctx2.stroke();
	ctx2.beginPath();
	ctx2.strokeStyle = '#87CEFA';//时针轨迹圆圈颜色
	ctx2.arc(190,190,119, degToRad2(0), degToRad2((hours*30)-90));
	ctx2.stroke();
	//Minutes
	ctx2.beginPath();
	ctx2.strokeStyle = '#BFDDDA';//分针轨迹圆圈颜色
	ctx2.arc(190,190,132, degToRad2(0), degToRad2(smoothmin*6-90));
	ctx2.stroke();
	ctx2.beginPath();
	ctx2.strokeStyle = '#BFDDDA';//分针轨迹圆圈颜色
	ctx2.arc(190,190,133, degToRad2(0), degToRad2(smoothmin*6-90));
	ctx2.stroke();
	//Seconds
	ctx2.beginPath();
	ctx2.strokeStyle = '#3BAABB';//秒针轨迹圆圈颜色
	ctx2.arc(190,190,146, degToRad2(0), degToRad2(smoothsec*6-90));
	ctx2.stroke();
	ctx2.beginPath();
	ctx2.strokeStyle = '#3BAABB';//秒针轨迹圆圈颜色
	ctx2.arc(190,190,147, degToRad2(0), degToRad2(smoothsec*6-90));
	ctx2.stroke();
	//Date
	ctx2.font = "28px Helvetica Bold";
	ctx2.fillStyle = '#03303a';//整体日期
	ctx2.fillText(date.today+"/星期"+week, 74, 400);
	//Time
	ctx2.font = "24px Helvetica Bold";
	ctx2.fillStyle = '#03303a';//整体时间
	//ctx2.fillText(time+":"+mil, 160, 280);
	ctx2.fillText(time, 140, 424);
}
pageInit2();
setInterval(function(){
				pageInit();
				pageInit2();
				}, 100);//循环调用pageInit函数，50ms一次
//setInterval(pageInit2, 50);//循环调用pageIn2it函数，50ms一次

//大时钟结束

function set_background_image(hrs){
	bg = document.getElementById('clock_box');
	bg2 = document.getElementById('clock_box2');
	if(hrs>=6 && hrs<12){
		bg.style.background = 'url(Pages/images/morning.png) no-repeat center center';
		bg.style.backgroundSize = 'cover';
		bg.style.backgroundAttachment = 'fixed';
		bg2.style.background = 'url(Pages/images/morning.png) no-repeat center center';
		bg2.style.backgroundSize = 'cover';
		bg2.style.backgroundAttachment = 'fixed';
	}
	else if(hrs>=12 && hrs<19){
		bg.style.background = 'url(Pages/images/afternoon.jpg) no-repeat center center';
		bg.style.backgroundSize = 'cover';
		bg.style.backgroundAttachment = 'fixed';
		bg2.style.background = 'url(Pages/images/afternoon.jpg) no-repeat center center';
		bg2.style.backgroundSize = 'cover';
		bg2.style.backgroundAttachment = 'fixed';
	}
	else{
		bg.style.background = 'url(Pages/images/evening.jpg) no-repeat center center';
		bg.style.backgroundSize = 'cover';
		bg.style.backgroundAttachment = 'fixed';
		bg2.style.background = 'url(Pages/images/evening.jpg) no-repeat center center';
		bg2.style.backgroundSize = 'cover';
		bg2.style.backgroundAttachment = 'fixed';
	}
}
//
//function get_date(){
//	//console.log(date);
//	var temp = new Object();
//	temp.today = date.today;
//	temp.hrs = date.hrs;
//	temp.min = date.min;
//	temp.sec = date.sec;
//	console.log(temp);
//	return temp;
//}