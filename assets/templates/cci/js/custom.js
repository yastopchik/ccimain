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
                  var services = ("#services-category");
                      if (services.length) {
                          $.lockfixed("#services-category", {
                              offset: {
                                  top: 0,
                                  bottom: 1122,
                                  width: 900
                              }
                  });
                      }
                      var services_two = $("#services-category-two");
                      if (services.length) {
                          $.lockfixed("#services-category-two", {
                              offset: {
                                  top: 0,
                                  bottom: 350,
                                  width: 900
                              }
                          });
                      }

                      $('.sidebar-menu li').hover(function () {
                          $('.sidebar-menu .sub-menu-container li').css("display", "block");
                      });
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
                      $('ul.sidebar-menu').superfish();
                      /*Gallery*/
                      var gallery = $('#gallery');
                      if (gallery.length) {
                          $('#gallery').photobox('a', {
                              thumbs: true,
                              loop: true
                          }, callback);
                          setTimeout(window._photobox.history.load, 2000);

                          function callback() {
                              console.log('callback for loaded content:', this);
                          };
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
                  });