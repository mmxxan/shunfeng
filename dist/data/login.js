var loginName = document.getElementById("yh");
var loginPassword = document.getElementById("mima");
var oYz = document.getElementById("yanzheng");
var oDl = document.getElementById("dl");

oDl.onclick = function(){
		$.post("http://47.104.244.134:8080/userlogin.do",{
				"name":loginName.value,
				"password":loginPassword.value
			},function(data){
				console.log(data);
				if(data.msg=="OK"){
					//alert("登录成功");
					location.href="index.html?"+"name="+loginName.value;
					//location.assign("index.html");
				}				
		})
}