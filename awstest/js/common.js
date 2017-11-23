(function ($, undefined) {
    $(function () {

        $(".mobile_search").click(function () {
            $('.mobile_search_field').toggle();
            $(".mobile_search i").toggleClass("fa-search").toggleClass("fa-times");
        });


       console.log($( window ).width()); 
       if($( window ).width() > 1024) {$('.menu_wrap').addClass('original').clone().insertAfter('.menu_wrap').addClass('cloned').css('position', 'fixed').css('top', '0').css('margin-top', '0').css('z-index', '500').removeClass('original').hide();

        scrollIntervalID = setInterval(stickIt, 10);


        function stickIt() {

            var orgElementPos = $('.original').offset();
            orgElementTop = orgElementPos.top;

            if ($(window).scrollTop() >= (orgElementTop)) {
                // scrolled past the original position; now only show the cloned, sticky element.

                // Cloned element should always have same left position and width as original element.     
                orgElement = $('.original');
                coordsOrgElement = orgElement.offset();
                leftOrgElement = coordsOrgElement.left;
                widthOrgElement = orgElement.css('width');
                $('.cloned').css('left', leftOrgElement + 'px').css('top', 0).css('width', widthOrgElement).show();
                $('.original').css('visibility', 'hidden');
            } else {
                // not scrolled past the menu; only show the original menu.
                $('.cloned').hide();
                $('.original').css('visibility', 'visible');
            }
        }
                                     }
        
        
        
        
        
        
        
        
 $(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      items: 1,
      nav: true,
      navText : ["<button class='custom_left'><i class='fa fa-chevron-left'></i></button>","<button class='custom_right'><i class='fa fa-chevron-right'></i></button>"],
      URLhashListener:true
  });
     
     function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }
 
    $('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');
 
        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();
 
            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
        }
        
        $(".accordion-section-title i").removeClass("fa-chevron-up").addClass("fa-chevron-down");
 
        $(this).find("i").toggleClass("fa-chevron-down").toggleClass("fa-chevron-up");
        e.preventDefault();
    });
});
        
        
       
        
        
    $(document).ready(function($){
	//Местоположение: долгота, широта и коэффициент увеличения
	var latitude = 53.356525,
		longitude = -6.253810,
		map_zoom = 13;

	//Адрес до иконки с маркером
	var marker_url = 'img/icon-location.png';
		
	
	var	main_color = '#007148', //основной цвет
		saturation_value= -1, //насыщенность
		brightness_value= 1; //яркость

	//Стили для элементов на карте
	var style= [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f6fb"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            },
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#292d32"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#0049b0"
            },
            {
                "visibility": "on"
            }
        ]
    }
];
		
	//Создание точки на карте
	var map_options = {
      	center: new google.maps.LatLng(latitude, longitude),
      	zoom: map_zoom,
      	panControl: false,
      	zoomControl: false,
      	mapTypeControl: false,
      	streetViewControl: false,
      	mapTypeId: google.maps.MapTypeId.ROADMAP,
      	scrollwheel: false,
      	styles: style
    }
    //Инициализация карты
	var map = new google.maps.Map(document.getElementById('google-container'), map_options);
	//Добавляем свой маркер местонахождения на карту (свою иконку)			
	var marker = new google.maps.Marker({
	  	position: new google.maps.LatLng(latitude, longitude),
	    map: map,
	    visible: true,
	 	icon: marker_url,
	});

	//Добавляем свои иконки для кнопок увеличить/уменьшить на карту
	function CustomZoomControl(controlDiv, map) { 
	  	var controlUIzoomIn= document.getElementById('zoom-in'),
	  		controlUIzoomOut= document.getElementById('zoom-out');
	  	controlDiv.appendChild(controlUIzoomIn);
	  	controlDiv.appendChild(controlUIzoomOut);

		//Делаем привязку для кнопок увеличить/уменьшить при клике
		google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
		    map.setZoom(map.getZoom()+1)
		});
		google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
		    map.setZoom(map.getZoom()-1)
		});
	}

	var zoomControlDiv = document.createElement('div');
 	var zoomControl = new CustomZoomControl(zoomControlDiv, map);

  	//Помещаем кнопки увеличить/уменьшить на карту в левый верхний угол
  	map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
});    
        
    });
})(jQuery);