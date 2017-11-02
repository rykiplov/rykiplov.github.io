	$(document).ready(function() {

              new WOW().init();
		// set up hover panels
		// although this can be done without JavaScript, we've attached these events
		// because it causes the hover to be triggered when the element is tapped on a touch device
		$('.hover').hover(function() {
			$(this).addClass('flip');
		},function(){
			$(this).removeClass('flip');
		});

		$('#gotop').gotop({
  	customHtml: '<i class="fa fa-angle-up fa-2x"></i>',
  	bottom: '10px',
  	right: '10px',
    background : '#F3411D',
    color: 'black',
    rounded: false, 
    speed:500
});




    $("#menu").on("click","a", function (event) {

        //отменяем стандартную обработку нажатия по ссылке

        event.preventDefault();

 

        //забираем идентификатор бока с атрибута href

        var id  = $(this).attr('href'),



      //узнаем высоту от начала страницы до блока на который ссылается якорь

          top = $(id).offset().top;

       

      //анимируем переход на расстояние - top за 1500 мс

      $('html, body').animate({scrollTop: top}, 500);
      //$(window).scrtollTo(top, 500);


  });

    $(".demo").flip({
      trigger: "hover",
      speed: 200
            });
     

});

