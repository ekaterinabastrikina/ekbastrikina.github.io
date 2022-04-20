$(document).ready(function(){



$(".eng").click(function(){
	$(".eng").css({
		color:"red"
	});
	$(".nor").css({
		color:"black"
	});
	$(".english").addClass('active_lang')
	$(".english").removeClass('nonactive_lang')
	$(".norway").addClass('nonactive_lang')
	$(".norway").removeClass('active_lang')
	
});

$(".nor").click(function(){
	$(".nor").css({
		color:"red"
	});
	$(".eng").css({
		color:"black"
	});

	$(".english").removeClass('active_lang')
	$(".english").addClass('nonactive_lang')
	$(".norway").removeClass('nonactive_lang')
	$(".norway").addClass('active_lang')

});
	
	$(".arrow_link_right").click(function(){
		$(".new1").removeClass('active_card')
		$(".new2").removeClass('active_card')
		$(".new3").removeClass('active_card')
		$(".new1").addClass('no_active')
		$(".new2").addClass('no_active')
		$(".new3").addClass('no_active')
		$(".new4").removeClass('no_active')
		$(".new4").addClass('active_card')
		$(".new5").removeClass('no_active')
		$(".new5").addClass('active_card')
		$(".new6").removeClass('no_active')
		$(".new6").addClass('active_card')
		$(".circle1").removeClass("active_circle")
		$(".circle2").addClass("active_circle")
	});

	
	$(".arrow_link_left").click(function(){
		$(".new4").removeClass('active_card')
		$(".new4").addClass('no_active')
		$(".new5").removeClass('active_card')
		$(".new5").addClass('no_active')
		$(".new6").removeClass('active_card')
		$(".new6").addClass('no_active')
		$(".new1").removeClass('no_active')
		$(".new1").addClass('active_card')
		$(".new2").removeClass('no_active')
		$(".new2").addClass('active_card')
		$(".new3").addClass('active_card')
		$(".new3").removeClass('no_active')
		$(".circle2").removeClass("active_circle")
		$(".circle1").addClass("active_circle")
	});


});
