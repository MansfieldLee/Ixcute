// JavaScript Document

//通过当前图片的SRC得到其名字即答案
function Check_code(){
	//先得到图片
	var img=document.getElementById("check_img");
	//得到图片路径
	var path=img.src;
	//从路径中截取图片名[包括后缀名]
	var filename;
	if(path.indexOf("/")>0)//如果包含有"/"号 从最后一个"/"号+1的位置开始截取字符串
	{
		filename=path.substring(path.lastIndexOf("/")+1,path.length);
	}
	else
	{
		filename=path;
	}
	return filename;
 }
 

//获取验证码
//需要打开yzm文件，在将文件中的图片全部存入一个数组中
function getYZM(){
	var check_img = document.getElementById('check_img');
	var yzms = new Array('0340.jpg','06L9.jpg','0BT8.jpg','2431.jpg','2QL7.jpg','3387.jpg','4193.jpg','4R51.jpg','54AZ.jpg',
				'57JS.jpg','5VK6.jpg','634C.jpg','63O6.jpg','7134.jpg','9173.jpg','A7GR.jpg','B028.jpg','B505.jpg',
				'L84G.jpg','W5B4.jpg','BLO3.jpg','X218.jpg','M721.jpg','L84G.jpg','DRZ4.jpg','D29Q.jpg','C8Y7.jpg');
	//var xhr = new XMLHttpRequest;
	//var yzms = fs.readFileSync('../JSON/yzm.json','UTF-8');
	//yzms = JSON.stringify(yzms);
	console.log(yzms);
	var i = parseInt(Math.random()*26,10);
	check_img.src = '../yzm/' + yzms[i];
}

//检验验证码是否正确
function check_code(img_src){
	var check = document.getElementById('check').value;
	if(check == img_src.substring(img_src.lastIndexOf("/")+1,img_src.length).replace('.jpg','')){
		return true;
	}
	else{
		return false;
	}
}

//检验用户名是否符合，符合后是普通工作人员那还是领导人员
//先确定正则表达式：普通：1+7位数字+.ixcute:/^1[0-9]{7}\.ixcute$/
//				领导：2+7位数字+.ixcute：/^2[0-9]{7}\.ixcute$/
function check_user(){
	var user = document.getElementById('user').value;
	var nomal = new RegExp('^1[0-9]{7}.ixcute$','ig');
	var leader = new RegExp('^2[0-9]{7}\.ixcute$','ig')
	if(nomal.test(user)){
		return true;
	}
	else if(leader.test(user)){
		return true;
	}
	else{
		return false;
	}
}

//检验密码是否正确
function check_psd(){
	var password = document.getElementById('psd').value;
	return true;
}

//登录按钮被按
function Login(){
	var check_img = document.getElementById('check_img');
	var pass1 = check_user();
	var pass2 = check_psd();
	var pass3 = check_code(check_img.src);
	if(!pass1){
		alert('Wrong user!');
	}
	else if(!pass2){
		alert('Wrong password!');
	}
	else if(!pass3){
		alert('Wrong check_code!');
	}
	else{
		alert('Welcome!');
	}
	
}

//失去焦点
function loseFocus(_id_){
	document.getElementById(_id_).blur();
}

	getYZM();
	