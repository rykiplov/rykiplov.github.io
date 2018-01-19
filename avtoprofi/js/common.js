$(document).ready(function() {

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	$(".mc_toggle").click(function (){
		$("body .mc_wrap .mc_item_wrap > ul").hide();
		$(this).parent().parent().children("ul").show(0);

	});
	//Stellar - Parallax Plugin
	//Документация: https://github.com/markdalgleish/stellar.js
	//HTML: <div class="parallax" data-stellar-background-ratio="0.5"></div>
	$.stellar({
		horizontalScrolling: false,
		verticalOffset: 40
	});

	//equalheight - одинаковая высота колонок
	//Пример списка элементов:
	//var eqElement = ".cat_container > div, .home_news > div"
	var eqElement = ".hi_item"
	$(window).load(function(){equalheight(eqElement);}).resize(function(){equalheight(eqElement);});

	//Masked Input Plugin
	//Документация: http://digitalbush.com/projects/masked-input-plugin/
	//$("#date").mask("99/99/9999", {placeholder : "mm/dd/yyyy"});

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	// //Навигация по Landing Page
	// //$(".top_mnu") - это верхняя панель со ссылками.
	// //Ссылки вида <a href="#contacts">Контакты</a>
	// $(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});
	//Скролл до id, указанного в hash URL
	var elem = window.location.hash;
	if(elem) {
		$.scrollTo(elem, 800, {
			offset: -90
		});
	};

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	function carousel_1() {
		var owl = $(".carousel");
		owl.owlCarousel({
			items : 1,
			loop : true,
			autoHeight : true,
			dots : true,
			singleItem : true
		});
		owl.on("mousewheel", ".owl-wrapper", function (e) {
			if (e.deltaY > 0) {
				owl.trigger("owl.prev");
			} else {
				owl.trigger("owl.next");
			}
			e.preventDefault();
		});
		$(".next_button").click(function() {
			owl.trigger("owl.next");
		});
		$(".prev_button").click(function() {
			owl.trigger("owl.prev");
		});
		owl.on("resized.owl.carousel", function(event) {
			var $this = $(this);
			$this.find(".owl-height").css("height", $this.find(".owl-item.active").height());
		});
		setTimeout(function() {
			owl.find(".owl-height").css("height", owl.find(".owl-item.active").height());
		}, 5000);
	};
	carousel_1();

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	if($("body, html").scrollTop() > 600) $("#top").fadeOut();
	console.log($("body, html").scrollTop());
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});
	
});

// Адаптивные скрипты, которые срабатывают только при определенном разрешении экрана
// Документация: https://github.com/maciej-gurban/responsive-bootstrap-toolkit
(function($, document, window, viewport) {
	function resizeWindow() {
		// $("a").click(function() {
		// 	if (viewport.is("lg")) {
		// 		return false;
		// 	};
		// });
};
$(document).ready(function() {
	resizeWindow();
});
$(window).bind("resize", function() {
	viewport.changed(function(){
		resizeWindow();
	});
});
})(jQuery, document, window, ResponsiveBootstrapToolkit);

$(window).scroll(function() {
	var element = $('#top');
	var elementWidth = element.width();
	var body = $('body');
	var bodyHeight = body.outerHeight(true);
	var scrolledBlock = $('.scrolled-block');
	var sbWidth = scrolledBlock.width();
	var winHeight = $(window).height();
	var maxScroll = bodyHeight - winHeight;
	var coeff = maxScroll/(sbWidth-elementWidth);

	var scrollTop = $(window).scrollTop();
	var move = scrollTop / coeff;
	element['fade' + (scrollTop > 200 ? 'In' : 'Out')](500);
});

$("body").niceScroll({
	cursorcolor: "#D12F22",
	cursorborder: "none",
	cursorborderradius: "0px"
});














(function ($) {
	"use strict";


	/*==================================================================
	[ Focus Contact2 ]*/
	$('.input2').each(function(){
		$(this).on('blur', function(){
			if($(this).val().trim() != "") {
				$(this).addClass('has-val');
			}
			else {
				$(this).removeClass('has-val');
			}
		})
	})



	/*==================================================================
	[ Validate ]*/
	var name = $('.validate-input input[name="name"]');
	var email = $('.validate-input input[name="email"]');
	var message = $('.validate-input textarea[name="message"]');


	$('.validate-form').on('submit',function(){
		var check = true;

		if($(name).val().trim() == ''){
			showValidate(name);
			check=false;
		}


		if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
			showValidate(email);
			check=false;
		}

		if($(message).val().trim() == ''){
			showValidate(message);
			check=false;
		}

		return check;
	});


	$('.validate-form .input2').each(function(){
		$(this).focus(function(){
			hideValidate(this);
		});
	});

	function showValidate(input) {
		var thisAlert = $(input).parent();

		$(thisAlert).addClass('alert-validate');
	}

	function hideValidate(input) {
		var thisAlert = $(input).parent();

		$(thisAlert).removeClass('alert-validate');
	}



})(jQuery);

/*-----------------------------------------------------------------------------------*/
/*	PRELOADER
/*-----------------------------------------------------------------------------------*/
jQuery(window).load(function () {
	//Preloader
	setTimeout("jQuery('#preloader').animate({'opacity' : '0'},300,function(){jQuery('#preloader').hide()})",500);
	setTimeout("jQuery('.preloader_hide, .selector_open').animate({'opacity' : '1'},500)",500);
	setTimeout("jQuery('footer').animate({'opacity' : '1'},500)",2000);

});