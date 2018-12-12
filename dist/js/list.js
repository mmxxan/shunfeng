$(function(){
				$.get("http://47.104.244.134:8080/goodsbytid.do",{tid:13,page:1,limit:10},function(data){
					/**/
					data = data.data;
					var str = "";
					console.log(data);
					for(var i = 1; i < data.length; i++){
						str += `<dl><dt><img src="${data[i].picurl}"></dt><dd>${data[i].price}</dd><dd><a href="detail.html?id=${data[i].id}">${data[i].name}</a></dd><dd class="eee" data-id="${data[i].id}"><a>加入购物车</a></dd><dd><a><span class="minus">-</span></a><a><span>1</span></a><a><span class="add">+</span></a></dd></dl>`
					}
					$(".t-list").html(str);
					
					$(".eee").click(function(){
						var id = $(this).attr("data-id");
						var token = $.cookie("token");
						$.get("http://47.104.244.134:8080/cartsave.do",{gid:id,token:token},function(data){
							//console.log(data);
							if(data.code==0){
								alert("添加成功");		
								location.href="cart.html";
							}
						})
					})
				})	
});
				
