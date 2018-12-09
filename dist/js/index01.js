$(function(){
	$(window).scroll(function(){					
	var scrollTop = $(this).scrollTop();
					//console.log(scrollTop);		
	})
	$(".louti li:last").click(function(){
		$("html,body").stop().animate({"scrollTop":0},800);
	})
})