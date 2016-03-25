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

          var carousel = $(".carousel");
          if (carousel.length) {
              carousel.bxSlider({
                  slideWidth: 360,
                  minSlides: 2,
                  maxSlides: 2,
                  slideMargin: 10,
				  infiniteLoop: false,
              });
			  carousel.photobox('a', {
                  thumbs: true,
                  loop: true
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
              link_slider.bxSlider({
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
          var sidebar=$('ul.sidebar-menu');
          if (sidebar.length) {
              $('ul.sidebar-menu').superfish({
                  delay: 1000,
                  animation: {
                      opacity: 'show',
                      height: 'show'
                  },
                  speed: 'fast',
                  autoArrows: false, 
                  onBeforeShow: function(){                      
                      $('#sidebar-gallery').hide();
                  },
                  onBeforeHide: function(){                     
                      $('#sidebar-gallery').show("slow");
                  }
             });
          }
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
              link_slider.bxSlider({
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
          var slide_promo = $('.slider-promo');
          if (slide_promo.length) {
             slide_promo.bxSlider({
                   slideWidth: 285,
    minSlides: 2,
    maxSlides: 4,
    moveSlides: 1,
    slideMargin: 10,
                 pager:false
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
          $('body').delegate("#online", "click", function (e) {
              var el = $(e.currentTarget);
              var formdiv = $(el.attr('href'));
              if (formdiv.length) {
                  formdiv.css("display", "block");
                  $('html, body').animate({
                      scrollTop: formdiv.offset().top
                  }, 1000);
              }
              return false;
          });
      });
$(window).resize( function(){
 /*LockFixed*/
        var width = $(window).width();
          if(width >= 992) {
          var sidebarleft = $("#sidebar-left");
              if (sidebarleft.length) {             
                  sidebarleft.hcSticky({
                    top:0,                    
                   });                   
		       }
          var sidebar_secondary = $("#sidebar-secondary");
               if (sidebar_secondary.length) {                    
                   sidebar_secondary.hcSticky({
                       top: 0                   
                   }); 
               }  
          }
          if(width >= 768) {
           var sidebarright = $("#sidebar-right");
              if (sidebarright.length) {             
                  sidebarright.hcSticky({
                    top:0,  
                      bottom:0
                   });                    
		       }             
          }          
}).resize(); 