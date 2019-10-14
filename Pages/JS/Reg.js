// JavaScript Document
var realname = document.getElementById('realname');
var ID = document.getElementById('idnumber');
var user = document.getElementById('user');
var psd = document.getElementById('password');
var psd2 = document.getElementById('password2');
var namecheck = document.getElementById('namecheck');
var idcheck = document.getElementById('idcheck');
var usercheck = document.getElementById('usercheck');
var psdcheck = document.getElementById('psdcheck');
var psdcheck2 = document.getElementById('psdcheck2');

console.log(namecheck);
function regExpCheck(id,regExp,ret){
	console.log(id === name);
	if(id.value == ''||id.value == null){
		ret.innerHTML = '不能为空';
		$(ret).attr('class','false');
	}
	else if(regExp.test(id.value)){
		ret.innerHTML = '√';
		$(ret).attr('class','true');
	}
	else{
		ret.innerHTML = '格式不对';
		$(ret).attr('class','false');
	}
}

function psdconfirm(){
	if(psd2.value == ''||psd2.value == null){
		psdcheck2.innerHTML = '不能为空';
		$(psdcheck2).attr('class','false');
	}
	else if(psd.value === psd2.value){
		psdcheck2.innerHTML = '√';
		$(psdcheck2).attr('class','true');
	}
	else{
		psdcheck2.innerHTML = '前后密码不同';
		$(psdcheck2).attr('class','false');
	}
}

function regcheck(){
	if(namecheck.className==='true' && 
		idcheck.className==='true' && 
		usercheck.className==='true' && 
		psdcheck.className==='true' && 
		psdcheck2.className==='true'){
		alert('注册成功');		
	}
	else{
		alert('请重新注册');
	}
}
//ID.blur=regExpCheck(ID,/\d{15}(\d\d[0-9]xX)?/,idcheck);
//user.blur=regExpCheck(user,/\m{3,}/,usercheck);
//psd.blur=regExpCheck(psd,/(?=^.{6,18}$)(?=.*\d)(?=.*[A-z]).*$/,psdcheck);