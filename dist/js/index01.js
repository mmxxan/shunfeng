$(function(){
	$(window).scroll(function(){					
	var scrollTop = $(this).scrollTop();
					//console.log(scrollTop);		
	})
	$(".louti li:last").click(function(){
		$("html,body").stop().animate({"scrollTop":0},800);
	})
	
	
	$(".list-group li").mouseover(function(){
		var index = $(this).index();
		$(".join").eq(index).stop().slideDown("fast");
	})
	$(".list-group li").mouseout(function(){
		$(".join").stop().slideUp("fast");
	})
	
	
	$(".f-center dl").mouseover(function(){
		var index = $(this).index();
		
		$(".join1").eq(index).stop().slideDown("fast");	
	})
	$(".f-center dl").mouseout(function(){
		$(".join1").stop().slideUp("fast");
	})
	
	
	$(".m-center dl").mouseover(function(){
		var index = $(this).index();
		
		$(".join2").eq(index).stop().slideDown("fast");	
	})
	$(".m-center dl").mouseout(function(){
		$(".join2").stop().slideUp("fast");
	})
	
	
	$(".s-center dl").mouseover(function(){
		var index = $(this).index();
		
		$(".join3").eq(index).stop().slideDown("fast");	
	})
	$(".s-center dl").mouseout(function(){
		$(".join3").stop().slideUp("fast");
	})
	
	$(".g-center dl").mouseover(function(){
		var index = $(this).index();
		
		$(".join4").eq(index).stop().slideDown("fast");	
	})
	$(".g-center dl").mouseout(function(){
		$(".join4").stop().slideUp("fast");
	})
	
	$(".r-center dl").mouseover(function(){
		var index = $(this).index();
		
		$(".join5").eq(index).stop().slideDown("fast");	
	})
	$(".r-center dl").mouseout(function(){
		$(".join5").stop().slideUp("fast");
	})
	
	
	$(".t-center dl").mouseover(function(){
		var index = $(this).index();
		
		$(".join6").eq(index).stop().slideDown("fast");	
	})
	$(".t-center dl").mouseout(function(){
		$(".join6").stop().slideUp("fast");
	})
	
	
	$(".d-center dl").mouseover(function(){
		var index = $(this).index();
		
		$(".join7").eq(index).stop().slideDown("fast");	
	})
	$(".d-center dl").mouseout(function(){
		$(".join7").stop().slideUp("fast");
	})
	
	$(".tuijian dl").mouseover(function(){
		var index = $(this).index();
		
		$(".join8").eq(index-1).stop().slideDown("fast");	
	})
	$(".tuijian dl").mouseout(function(){
		$(".join8").stop().slideUp("fast");
	})
	
	
	/*$("b-down img:first").mouseover(function(){
		console.log("aa");
		$(this).animate({height:50,width:130},2000);
		
	})*/
	
	var a = 0;
	setInterval(function(){
		a = a-150;
		$(".pingjia").animate({top:a+"px"},1000);
		if(a==-450){
		//$(".pingjia").animate({top:0},1000);
		   a=150;
		}
	},2000)	
	
	
	$("#add").mouseenter(function(){
		$("#address").stop().show();
	})
	$("#add").mouseleave(function(){
		$("#address").hide();
	})
	
	$(".ss").mouseenter(function(){
		$(".sss").stop().show();
	})
	$(".ss").mouseleave(function(){
		$(".sss").hide();
	})
})