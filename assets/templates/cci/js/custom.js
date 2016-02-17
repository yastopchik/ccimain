      $(document).ready(function () {
          $('.pgwSlider').pgwSlider({
              maxHeight: 425,
              intervalDuration: 10000,
              transitionDuration: 3000
          });
          $('ul.sf-menu').superfish();  
          $.lockfixed("#services-category", {
              offset: {
                  top: 0,
                  bottom: 1050,
                  width: 900
              }
          });          
          $.lockfixed("#services-category-two", {
              offset: {
                  top: 0,
                  bottom: 230,
                  width: 900
              }
          });
          $('.sidebar-menu li').hover(function() {
             $('.sidebar-menu .sub-menu-container li').css("display", "block");
          });
          $('.linkSlider').bxSlider({
              minSlides: 3,
              maxSlides: 6,
              slideWidth: 200,
              slideMargin: 10,
              adaptiveHeight: true,
              ticker: true,
              tickerHover: true,
              speed: 25000
          });
          /*Sidebar*/         
          $('ul.sidebar-menu').superfish();         
                   /*Gallery*/
          $('#gallery').photobox('a', {
              thumbs: true,
              loop: true
          }, callback);
          setTimeout(window._photobox.history.load, 2000);

          function callback() {
              console.log('callback for loaded content:', this);
          };

          $(window).scroll(function () {
              if ($(this).scrollTop() > 0) {
                  $('#to-top').fadeIn();
              } else {
                  $('#to-top').fadeOut();
              }
          });
          $('#to-top').click(function () {
              $('body,html').animate({
                  scrollTop: 0
              }, 400);
              return false;
          });
          var parallax = $('#parallax-window');
          if (parallax.length) {
			if( $(window).width() > 1080) {	
					$(window).scroll(function() {
                            var t=parallax.offset().top;
                            var speed=parallax.data('speed');
							var yPos = -( ( $(window).scrollTop() - parallax.offset().top) / parallax.data('speed')); 
							var coords = '50% '+ yPos + 'px';
							parallax.css({ backgroundPosition: coords });
					});
			};
          };
      });