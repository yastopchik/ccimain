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
                  onSliderLoad: function () {
                      $(".carousel-wrap").css("visibility", "visible");
                  },
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
          var sidebar = $('ul.sidebar-menu');
          if (sidebar.length) {
              $('ul.sidebar-menu').superfish({
                  delay: 1000,
                  animation: {
                      opacity: 'show',
                      height: 'show'
                  },
                  speed: 'fast',
                  autoArrows: false,
                  onBeforeShow: function () {
                      $('#sidebar-gallery').hide();
                  },
                  onBeforeHide: function () {
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
                  pager: false
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
          var dateBegin = $('#dateBegin');
          if (dateBegin.length) {
              dateBegin.datepicker({
                  language: 'ru',
                  format: 'dd-mm-yyyy',
                  todayHighlight: true,
                  setStartDate: new Date()
              });
          };
          var dateEnd = $('#dateEnd');
          if (dateEnd.length) {
              dateEnd.datepicker({
                  language: 'ru',
                  format: 'dd-mm-yyyy',
                  todayHighlight: true,
                  setStartDate: new Date()
              });
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
          $('[data-toggle="tooltip"]').tooltip();

      });
      $(window).resize(function () {
          /*LockFixed*/
          var width = $(window).width();
          if (width >= 992) {
              var sidebarleft = $("#sidebar-left");
              if (sidebarleft.length) {
                  sidebarleft.hcSticky({
                      top: 0,
                  });
              }
              var sidebar_secondary = $("#sidebar-secondary");
              if (sidebar_secondary.length) {
                  sidebar_secondary.hcSticky({
                      top: 0
                  });
              }
              var mode = $("#mode");
              if (mode.length) {
                  mode.hcSticky({
                      top: 0
                  });
              }
          }
          if (width >= 768) {
              var sidebarright = $("#sidebar-right");
              if (sidebarright.length) {
                  sidebarright.hcSticky({
                      top: 0,
                      bottom: 0
                  });
              }
          }
      }).resize();
      /*Login*/
      logindiv = $("#login-div");      
      $(document).on('click', '#login-href', function (e) {
          var auth = $("#auth");
          var registration = $("#registration");
          if (auth.is(":hidden")) {
              if (registration.is(":visible")) {
                  registration.hide();
              }
              auth.slideDown("slow");
              logindiv.css({
                  "opacity": "1"
              });
              logindiv.fadeIn("slow");
          } else {
              auth.slideUp("slow");
              logindiv.fadeOut("slow");
          }
      });

      $("#login-close").click(function () {
          $("#auth").slideUp("slow");
      });
      //function for registration form dropdown
      function dropdownRegistration() {
          var officeauth = $("#auth");
          var officeregistration = $("#registration");
          if (officeregistration.is(":hidden")) {
              officeauth.hide();
              officeregistration.slideDown("slow");
              logindiv.css({
                  "opacity": "1"
              });
              logindiv.fadeIn("slow");
          } else {
              officeregistration.slideUp("slow");
              logindiv.fadeOut("slow");
          }
      }
      $("#registration").click(function () {
          dropdownRegistration()
      });
      $("#registration-close").click(function () {
          $("#registration").slideUp("slow");
      });




      $(document).on('click', '.albums-item', function (e) {
          var albumsGrid = $('#albums-grid');
          var albumItems = $('#album-items');
          if (albumsGrid.length) {
              var data = $(this).data();
              var urls = $(this).attr("href");
              albumsGrid.remove();
              $('.pagination').remove();
              albumItems.css("display", "block");
              $.ajax({
                  url: urls,
                  cache: false,
                  data: data,
                  beforeSend: function () {
                      albumItems.html("<div class=\"loaded\"><img src='assets/templates/mogilevcci/img/495.gif' /></div>");
                  },
                  success: function (html) {
                      albumItems.html(html);
                  }
              });
              return false;
          }
          e.preventDefault();
          return false;
      });
      var lexicon = {
          "ru": {
              "members": "ФИО участника (полностью)*",
              "position": "Должность*",
              "mphone": "Мобильный телефон",
              "wphone": "Рабочий телефон",
              "email": "Адрес электронной почты"
          },
          "en": {
              "members": "Member name (fully)",
              "position": "Position*",
              "mphone": "Mobile phone",
              "wphone": "Work phone",
              "email": "E-mail"
          }
      };
      $(document).on('click', '.addMembers', function (e) {
          var cultureKey = $('.addMembers').attr("data-culture-key");
          var membersGroup = document.createElement('div');
          membersGroup.className = "form-group";
          membersGroup.innerHTML = "<label for=\"members\">" + lexicon['ru']['members'] + "</label>" +
              "<input type=\"text\" name='membersAdd[]' class=\"form-control\"  required/>" +
              "<span class=\"error error_members\"></span>";
          var positionGroup = document.createElement('div');
          positionGroup.className = "form-group";
          positionGroup.innerHTML = "<label for=\"position\">" + lexicon['ru']['position'] + "</label>" +
              "<input type=\"text\" name='positionAdd[]' class=\"form-control\" required/>" +
              "<span class=\"error error_position\"></span>";
          var membersInline = document.createElement('div');
          membersInline.className = "form-inline";
          membersInline.innerHTML = "<div class=\"form-group\">" +
              "<label class=\"sr-only\" for=\"mphone\">" + lexicon['ru']['mphone'] + "</label>" +
              "<input name='mphoneAdd[]' type=\"text\" class=\"form-control\" placeholder=\"" + lexicon['ru']['mphone'] + "\"  /></div>" +
              "<div class=\"form-group\">" +
              "<label class=\"sr-only\" for=\"wphone\">" + lexicon['ru']['wphone'] + "</label>" +
              "<input name='wphoneAdd[]' type=\"text\" class=\"form-control\" placeholder=\"" + lexicon['ru']['wphone'] + "\"  /> </div>" +
              "<div class=\"form-group\">" +
              "<label class=\"sr-only\" for=\"email\">" + lexicon['ru']['email'] + "</label>" +
              "<input name='emailAdd[]' type=\"email\" class=\"form-control\" placeholder=\"" + lexicon['ru']['email'] + "\" /></div>" +
              "<span class=\"error error_error_mphone\"></span><span class=\"error error_wphone\"></span><span class=\"error error_email\"></span>";
          document.getElementById('members-wrap').appendChild(membersGroup);
          document.getElementById('members-wrap').appendChild(positionGroup);
          document.getElementById('members-wrap').appendChild(membersInline);
          e.preventDefault();
          return false;
      });