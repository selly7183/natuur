$(document).ready(function(){

$(".content").hide();
$(".content").first().show();
$(".tabs li").first().addClass("select");

$(".tabs li").on("click",function(){
	event.preventDefault();
	var active=$(this).find("a").attr("href");
	$(".content").hide();
	$(active).show();
	$(".tabs li").removeClass("select");
	$(this).addClass("select");
});


$(".slides").slick({		//슬릭 초기화 구문
	//dots:true,			//컨트롤 버튼여부
	autoplay:true,		//자동전환여부
	autoplaySpeed:1000,	//전환되는 속도
	speed:1500,			//이동하는 속도
	infinite:true,		//무한반복여부
	fade:true,
	cssEase:'linear'

});


$(".event-slide").slick({		//슬릭 초기화 구문
	autoplay:true,		//자동전환여부
	autoplaySpeed:1000,	//전환되는 속도
	speed:1000,			//이동하는 속도
	infinite:true,		//무한반복여부
	slidesToShow:2,
	slidesToScroll:2

});

/* 박스 */
$(window).on("scroll",function(){
	var pos=$(window).scrollTop();
	//alert(pos);
	$(".box")[pos>800?"addClass":"removeClass"]("on");
});

/* fixed */
$(window).on("scroll",function(){
	var pos=$("html,body").scrollTop();
	$("header")[pos>=35?"addClass":"removeClass"]("headfix");
});
	


});