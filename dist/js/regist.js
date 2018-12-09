var username = document.getElementById("zh");
var pass = document.getElementById("mima");
var email = document.getElementById("yx");
var oSex = document.getElementById("sex");
var oZhuce = document.getElementById("zhuce");

oZhuce.onclick = function(){
	//debugger;
	if(oSex.value !="男" || oSex.value !="女"){
		alert("性别输入有误，只可输入男或女！");
		return;
	}
	
		$.post("http://47.104.244.134:8080/usersave.do",{
				"username":username.value,
				"password":pass.value,
				"email":email.value,
				"sex":oSex.value
			},function(data){
				console.log(data);
				if(data.msg=="成功"){
					//alert("注册成功");
					location.assign("login.html");
				}
			})
}





