      $(document).ready(function () {
          var pgw = $('.pgwSlider');
          if (pgw.length) {
              $('.pgwSlider').pgwSlider({
                  maxHeight: 425,
                  intervalDuration: 10000,
                  transitionDuration: 3000
              });
          }

          var sfmenu = $('ul.sf-menu');
          if (sfmenu.length) {
              $('ul.sf-menu').superfish();
          }
          var sidebar = ("#sidebar");
               if (sidebar.length) {
                   $.lockfixed(sidebar, {
                       offset: {
                           top: 0,
                           bottom: 1142
                           //width: 900
                       }
           });
               }
              var sidebar_secondary = $("#sidebar-secondary");
               if (sidebar_secondary.length) {
                   $.lockfixed(sidebar_secondary, {
                       offset: {
                           top: 0,
                           bottom: 368
                          // width: 900
                       }
                   });
               } 
          var gallery = $('.gallery');
          if (gallery.length) {
              function callback() {
                  console.log('callback for loaded content:', this);
              };
              gallery.photobox('a', {
                  thumbs: true,
                  loop: true
              }, callback);
              setTimeout(window._photobox.history.load, 2000);              
          }

          var link_slider = $('.linkSlider');
          if (link_slider.length) {
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
          }
          /*Sidebar*/
          $('ul.sidebar-menu').superfish({
              delay: 1000,
              animation: {
                  opacity: 'show',
                  height: 'show'
              },
              speed: 'fast',
              autoArrows: false
          });
          $('.sidebar-menu li').hover(function () {
              $('.sidebar-menu .sub-menu-container li').css("display", "block");
          });
          /*Gallery*/
          var gallery = $('.gallery');
          if (gallery.length) {
              gallery.photobox('a', {
                  thumbs: true,
                  loop: true
              }, callback);
              setTimeout(window._photobox.history.load, 2000);

              function callback() {
                  console.log('callback for loaded content:', this);
              };
          }

          var link_slider = $('.linkSlider');
          if (link_slider.length) {
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
          }
          /*Sidebar*/
          var sidebar = $('ul.sidebar-menu');
          if (sidebar.length) {
              sidebar.superfish({
                  delay: 12000,
                  animation: {
                      opacity: 'show',
                      height: 'show'
                  },
                  speed: 'fast',
                  autoArrows: false
              });
          }
          /*Gallery*/
          var gallery = $('#gallery');
          if (gallery.length) {              
              function callback() {
                  console.log('callback for loaded content:', this);
              };
              $('#gallery').photobox('a', {
                  thumbs: true,
                  loop: true
              }, callback);
              setTimeout(window._photobox.history.load, 2000);
          }
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
              if ($(window).width() > 1080) {
                  $(window).scroll(function () {
                      var t = parallax.offset().top;
                      var speed = parallax.data('speed');
                      var yPos = -(($(window).scrollTop() - parallax.offset().top) / parallax.data('speed'));
                      var coords = '50% ' + yPos + 'px';
                      parallax.css({
                          backgroundPosition: coords
                      });
                  });
              };
          };
          $('body').delegate("#online","click", function(e){
              var el = $(e.currentTarget); 
              var formdiv=$(el.attr('href'));
              if (formdiv.length) {
                  formdiv.css("display", "block");
                  $('html, body').animate({
				         scrollTop: formdiv.offset().top
			      }, 1000);
              }
              return false;
          });
      });