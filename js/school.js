$(document).ready(function(){
	$("h2").click(function(){
		$("span").show();
		$("h2").css("color","red");
		$("h2").html("收起内容");
	});
	$("h2").dblclick(function(){
		$("span").hide();
		$("h2").css("color","blue");
		$("h2").html("查看更多");
	});
});


$(document).ready(function(){
	$(".button").click(function(){
		$("#layer").show();
		$(".wish").show();
	});
	$("#close").click(function(){
		$("#layer").hide();
		$(".wish").hide();
	});
});


$(document).ready(function(){
	$(".first").click(function(){
		$(".money").show();
		$(this).animate({
			height:'350'
		});
		$(".two").animate({
			height:'10%'
		});
		$(".moneys").hide();
	});
	$(".two").click(function(){
		$(".money").hide();
		$(".first").animate({
			height:'10%'
		});
		$(".two").animate({
			height:'350'
		});
		$(".moneys").show();
	});
});

