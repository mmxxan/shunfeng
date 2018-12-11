var oZoomBox = document.getElementsByClassName("cc-left")[0];
var oMidArea = document.getElementsByClassName("middle")[0];
var oBigArea = document.getElementById("bigArea");
var oZoom = document.getElementById("zoom")
var oBigImg = oBigArea.children[0];
//console.log(oBigImg);

			oMidArea.onmouseover = function(){
				oZoom.style.display = "block";
				oBigArea.style.display = "block";
			}
			oMidArea.onmouseout = function(){
				oZoom.style.display = "none";
				oBigArea.style.display = "none";
			}
			
           oMidArea.onmousemove = function(e){
				var evt = e || event;
				var x = evt.pageX - oZoomBox.offsetLeft;
				var y = evt.pageY - oZoomBox.offsetTop;
				//console.log(x,y);
				var _left = x - oZoom.offsetWidth/2;
				var _top = y - oZoom.offsetHeight/2;
				//console.log(_left);
				var cw = oMidArea.clientWidth;
				var ch = oMidArea.clientHeight;
				
				var zw = oZoom.offsetWidth;
				var zh = oZoom.offsetHeight;
				
				if(_left <= 0){
					_left = 0;
				}
				if(_left >= cw-zw){
					_left = cw-zw;
				}
				
				if(_top<=0){
					_top = 0;
				}
				if(_top>=ch-zh){
					_top = ch-zh;
				}
			
				oZoom.style.left = _left + "px";
				oZoom.style.top = _top + "px";
				
				
				oBigImg.style.left = - _left/oMidArea.offsetWidth*oBigImg.offsetWidth + "px";
				oBigImg.style.top = - _top/oMidArea.offsetHeight*oBigImg.offsetHeight + "px";
				//console.log(- _left/oMidArea.offsetWidth*oBigImg.offsetWidth);
			}
           
var oImg=document.getElementsByClassName("aaa");
console.log(oImg)
$.post("http://47.104.244.134:8080/goodsbyid.do",{
	"id":9
},function(data){
	console.log(data);
	var url = data.picurl;
	console.log(url);
	oImg[0].src = url;
	oImg[1].src = url;
})
//