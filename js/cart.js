$(function() {
	$("#checkAll").click(function() {
		$(".dd input").prop("checked", $(this).prop("checked"));
	})

	$(".dd input").click(function() {
		var len = $(".dd input:checked").length;
		var total = $(".dd input").length;

		if(len == total) {
			$("#checkAll").prop("checked", true);
		} else {
			$("#checkAll").prop("checked", false);
		}

	})
})

$(function() {
	var token = $.cookie("token");

	$.get("http://47.104.244.134:8080/cartlist.do", {
		token: token
	}, function(data) {
		var str = "";
		console.log(data);
		/*var iid=data[3].id;
		var count=data[3].count;
		console.log(iid);*/
		for(var i = 0; i < data.length; i++) {
			str += `<div class="dd"><input type="checkbox" name="" id="check" value="" /><img src="${data[i].goods.picurl}"><p>${data[i].goods.name}</p><span>${data[i].goods.price}</span><b><em class="add">+</em><em class="shu">${data[i].count}</em><em class="minus">-</em></b><a class="delete">删除</a></div>`;



			var aa = data[i].id;
			console.log(aa);
			var count = data[i].count;
			console.log(count);
			var bb = data[i].gid;
			console.log(bb);
		}
		$(".cart-list").html(str);

		$(".minus").click(function() {
			$.get("http://47.104.244.134:8080/cartupdate.do", {
				id: aa,
				gid: bb,
				num: -1,
				token: token
			}, function(data) {
				count--;
				$(".shu").html(count);
				if(count == 0) {

				}
			})
		})
		$(".add").click(function() {
			$.get("http://47.104.244.134:8080/cartupdate.do", {
				id: aa,
				gid: bb,
				num: 1,
				token: token
			}, function(data) {
				count++;
				$(".shu").html(count);
			})
		})
		$(".delete").click(function() {
			$.get("http://47.104.244.134:8080/cartupdate.do", {
				id: aa,
				gid: bb,
				num: 0,
				token: token
			}, function(data) {
				location.reload();
			})
		})

	})
})


	
