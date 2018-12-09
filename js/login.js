var loginName = document.getElementById("yh");
var loginPassword = document.getElementById("mima");
var oYz = document.getElementById("yanzheng");
var oDl = document.getElementById("dl");
var oSp = document.getElementById("sp");

oDl.onclick = function(){
	if(loginName.value.length==0 && loginPassword.value.length==0){
		alert("用户名和密码不能为空");
		oMima03.style.display="none";
		return;
	}
	if(loginName.value.length==0){
		alert("用户名不能为空");
		return;
	}
	if(loginPassword.value.length==0){
		alert("密码不能为空");
		return;
	}
	if(oYz.value!==str){
		alert("验证码不正确");
		return;
	}
		$.post("http://47.104.244.134:8080/userlogin.do",{
				"name":loginName.value,
				"password":loginPassword.value
			},function(data){
				console.log(data);
				if(data.msg=="OK"){
					//alert("登录成功");
					//location.href="index.html?"+"name="+loginName.value;
					location.assign("index.html");
				}else{
					alert("登录失败");
					return;
				}
		})
}

//验证码部分
            var str="" ;
			for(var i = 1 ; i <= 4 ; i++){
				var num = parseInt(Math.random()*3+1) ;//1,2,3 三个类型
				switch(num){
					case 1 :  //数字
					var a = parseInt(Math.random()*9+1);//[1,10)
					var str1 = String(a) ;
					break;
					case 2 :  //大写
					var b = parseInt(Math.random()*26+65);//[65,90]
					var str1 = String.fromCharCode(b) ;
					break;
					case 3 :   //小写
					var c = parseInt(Math.random()*26+97);//[97,122]
					var str1 = String.fromCharCode(c) ;
					break;
				}
				str+=str1;
			}
			oSp.innerHTML=str ;
			

