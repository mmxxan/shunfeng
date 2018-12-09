function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
	return getComputedStyle(obj,null)[attr];
}
//startMove(oDiv,{width:500,height:500})
function startMove(obj,json,fn){  //定义一个函数，obj要改变的是dom对象，json要改变的属性及属性的属性值，fn实现链式调用
	clearInterval(obj.timer);//开启一个定时器之前先清除，保证针对某个dom对象的操作始终有一个定时器控制
	obj.timer = setInterval(function(){//开启一个定时器
		var flag = true;//碰到先不用管，至于有什么用后面再说
		for(var attr in json){  //遍历存放样式属性和目标值的json数据
			if(attr == "opacity"){// 获取定时器每走一次时的当前值
				var iCur = parseInt(getStyle(obj,attr)*100);
			}else{
				var iCur = parseInt(getStyle(obj,attr));
			}
			var iTarget = json[attr];
			
			var iSpeed = (iTarget-iCur)/7;//取每一次变化的值
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
			
			if(attr == "opacity"){
				obj.style.opacity = (iCur + iSpeed)/100;
				obj.style.filter = "alpha(opacity="+(iCur+iSpeed)+")";
			}else{
				obj.style[attr] = iCur + iSpeed + "px";//属性值的变化是当前值加上每次变化值
			}
			if(iCur!=iTarget){
				flag = false;//如果有一个没有达到目标值，上面的假设不成立
			}
		}
		if(flag){  //当前值和目标值相等时，清除定时器
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}
		
		
	},20);
}
