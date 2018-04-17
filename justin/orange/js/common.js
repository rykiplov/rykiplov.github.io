$(document).ready(function() {
$("#portfolio_grid").mixItUp(); 
$(".s_portfolio li").click(function(){
	$(".s_portfolio li").removeClass("active");
	$(this).addClass("active");
});
	
$("input,select,textarea").not("[type=submit]").jqBootstrapValidation();

$(".top_mnu ul a").mPageScroll2id();	
	
$(".popup").magnificPopup({type:'image'});
$(".popup_content").magnificPopup({type:'inline'});
$(".animation_2").animated("fadeInLeft", "fadeOutDown");
$(".animation_3").animated("fadeInRight", "fadeOutDown");
$(".animation_1").animated("flipInY", "flipOutY");
$(".left .resume_item").animated("fadeInLeft", "fadeOutDown");
$(".right .resume_item").animated("fadeInRight", "fadeOutDown");
	
$(".top_text h1").animated("fadeInDown", "fadeOutUp");
$(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");
	
function heightDetect(){
		$(".main_head").css('height', $(window).height());
	}; 	
heightDetect();
$(window).resize(function(){
	heightDetect();
})
});

$(".portfolio_item").each(function(i){
	$(this).find("a").attr("href", "#work_" + i);
	$(this).find(".port_descr").attr("id", "work_" + i);
});

$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});

	$('.toggle_mnu').click(function() {
		$('#menu').toggleClass('nav-open');
	});

$(".toggle_mnu").click(function(){
//	$(".top_mnu").fadeToggle(600);
//	$(".top_mnu li a").toggleClass("fadeInUp animated")
	if($(".top_mnu").is(":visible")){
		$(".top_mnu").fadeOut(600);
		$(".top_mnu li a").removeClass("fadeInUp animated");
	}
	else{
		$(".top_mnu").fadeIn(600);
		$(".top_mnu li a").addClass("fadeInUp animated");
	}
});

$(".top_mnu ul a").click(function(){
	$(".top_mnu").fadeOut(600);
	$('#menu').toggleClass('nav-open');
});
