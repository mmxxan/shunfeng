//轮播
var oImglist = document.getElementById("imglist");
var i = 0;
var aLi = oImglist.children;
var perWidth = aLi[0].offsetWidth;
var oNum = document.getElementById("num");
var aNumlist = oNum.children;
oImglist.style.width = aLi.length*perWidth + 'px';	
			var timer = setInterval(function(){
				move();
			},3000)	
			function move(){
				i++;
				if(i==aLi.length){
					oImglist.style.left = 0;
					i = 1;	
			 	}
				if(i==-1){
					oImglist.style.left = -(aLi.length-1)*perWidth + "px";
					i=aLi.length - 2;
				}
				
				for(var j = 0; j < aNumlist.length; j++){
					aNumlist[j].className = "";
				}
				if(i==aLi.length-1){
					aNumlist[0].className = "hover";
				}else{
					aNumlist[i].className = "hover";
				}
				
				startMove(oImglist,{left:-1309*i});
			}
				for(let k=0; k<aNumlist.length; k++){
					aNumlist[k].onmouseover = function(){
						i = k -1;
						move();
					}
				}
				
				var oBox = document.getElementById("box");
				oBox.onmouseover = function(){
					clearInterval(timer);
				}
				oBox.onmouseout = function(){
					timer = setInterval(function(){
						move();
					},2000)
				}
				
				

//热门评论
