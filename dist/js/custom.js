$(document).ready(function(){function e(){console.log("callback for loaded content:",this)}function e(){console.log("callback for loaded content:",this)}function e(){console.log("callback for loaded content:",this)}var o=$(".pgwSlider");o.length&&$(".pgwSlider").pgwSlider({maxHeight:425,intervalDuration:1e4,transitionDuration:3e3});var i=$("ul.sf-menu");i.length&&$("ul.sf-menu").superfish();var l=$(".carousel");l.length&&(l.bxSlider({slideWidth:360,minSlides:2,maxSlides:2,slideMargin:10,onSliderLoad:function(){$(".carousel-wrap").css("visibility","visible")},infiniteLoop:!1}),l.photobox("a",{thumbs:!0,loop:!0}));var l=$(".carousel4");l.length&&(l.bxSlider({slideWidth:200,minSlides:2,maxSlides:4,slideMargin:10,onSliderLoad:function(){$(".carousel-wrap").css("visibility","visible")},infiniteLoop:!1}),l.photobox("a",{thumbs:!0,loop:!0}));var t=$(".gallery");t.length&&(t.photobox("a",{thumbs:!0,loop:!0},e),setTimeout(window._photobox.history.load,2e3));var n=$(".linkSlider");n.length&&n.bxSlider({minSlides:3,maxSlides:6,slideWidth:200,slideMargin:10,adaptiveHeight:!0,ticker:!0,tickerHover:!0,speed:25e3});var r=$("ul.sidebar-menu");r.length&&$("ul.sidebar-menu").superfish({delay:1e3,animation:{opacity:"show",height:"show"},speed:"fast",autoArrows:!1,onBeforeShow:function(){$("#sidebar-gallery").hide()},onBeforeHide:function(){$(window).width()>767&&$("#sidebar-gallery").show("slow")}}),$(".sidebar-menu li").hover(function(){$(".sidebar-menu .sub-menu-container li").css("display","block")});var t=$(".gallery");t.length&&(t.photobox("a",{thumbs:!0,loop:!0},e),setTimeout(window._photobox.history.load,2e3));var n=$(".linkSlider");n.length&&n.bxSlider({minSlides:3,maxSlides:6,slideWidth:200,slideMargin:10,adaptiveHeight:!0,ticker:!0,tickerHover:!0,speed:25e3});var a=$(".slider-promo");a.length&&a.bxSlider({slideWidth:285,minSlides:2,maxSlides:4,moveSlides:1,slideMargin:10,pager:!1});var r=$("ul.sidebar-menu");r.length&&r.superfish({delay:12e3,animation:{opacity:"show",height:"show"},speed:"fast",autoArrows:!1});var t=$("#gallery");t.length&&($("#gallery").photobox("a",{thumbs:!0,loop:!0},e),setTimeout(window._photobox.history.load,2e3)),$(window).scroll(function(){$(this).scrollTop()>0?$("#to-top").fadeIn():$("#to-top").fadeOut()}),$("#to-top").click(function(){return $("body,html").animate({scrollTop:0},400),!1});var s=$("#parallax-window");s.length&&$(window).width()>1080&&$(window).scroll(function(){var e=(s.offset().top,s.data("speed"),-(($(window).scrollTop()-s.offset().top)/s.data("speed"))),o="50% "+e+"px";s.css({backgroundPosition:o})});var d=$("#dateBegin");d.length&&d.datepicker({language:"ru",format:"dd-mm-yyyy",todayHighlight:!0,setStartDate:new Date});var c=$("#dateEnd");c.length&&c.datepicker({language:"ru",format:"dd-mm-yyyy",todayHighlight:!0,setStartDate:new Date}),$("body").delegate("#online","click",function(e){var o=$(e.currentTarget),i=$(o.attr("href"));return i.length&&(i.css("display","block"),$("html, body").animate({scrollTop:i.offset().top},1e3)),!1}),$('[data-toggle="tooltip"]').tooltip()}),$(window).resize(function(){var e=$(window).width();if(e>=768){var o=$("#sidebar-left");o.length&&o.hcSticky({top:0});var i=$("#sidebar-secondary");i.length&&i.hcSticky({top:0})}if(e>=768){var l=$("#sidebar-right");l.length&&l.hcSticky({top:0,bottom:0})}}).resize(),logindiv=$("#login-div"),$(document).on("click",".login-href",function(e){var o=$("#auth"),i=$("#registration");o.is(":hidden")?(i.is(":visible")&&i.hide(),o.slideDown("slow"),logindiv.css({opacity:"1"}),logindiv.fadeIn("slow")):(o.slideUp("slow"),logindiv.fadeOut("slow"))}),$(".login-close").click(function(){$("#auth").slideUp("slow")}),$(document).on("click",".reg-link",function(e){var o=$("#auth"),i=$("#registration");i.is(":hidden")?(o.hide(),i.slideDown("slow"),logindiv.css({opacity:"1"}),logindiv.fadeIn("slow")):(i.slideUp("slow"),logindiv.fadeOut("slow"))}),$(".registration-close").click(function(){$("#registration").slideUp("slow")}),$(document).on("click",".albums-item",function(e){var o=$("#albums-grid"),i=$("#album-items");if(o.length){var l=$(this).data(),t=$(this).attr("href");return o.remove(),$(".pagination").remove(),i.css("display","inline-block"),$.ajax({url:t,cache:!1,data:l,beforeSend:function(){i.html("<img src='assets/templates/mogilevcci/img/495.gif' />")},success:function(e){i.html(e)}}),!1}return e.preventDefault(),!1});var lexicon={ru:{members:"ФИО участника (полностью)*",position:"Должность*",mphone:"Мобильный телефон",wphone:"Рабочий телефон",email:"Адрес электронной почты"},en:{members:"Member name (fully)",position:"Position*",mphone:"Mobile phone",wphone:"Work phone",email:"E-mail"}};$(document).on("click",".addMembers",function(e){var o=($(".addMembers").attr("data-culture-key"),document.createElement("div"));o.className="form-group",o.innerHTML='<label for="members">'+lexicon.ru.members+'</label><input type="text" name=\'membersAdd[]\' class="form-control"  required/><span class="error error_members"></span>';var i=document.createElement("div");i.className="form-group",i.innerHTML='<label for="position">'+lexicon.ru.position+'</label><input type="text" name=\'positionAdd[]\' class="form-control" required/><span class="error error_position"></span>';var l=document.createElement("div");return l.className="form-inline",l.innerHTML='<div class="form-group"><label class="sr-only" for="mphone">'+lexicon.ru.mphone+'</label><input name=\'mphoneAdd[]\' type="text" class="form-control" placeholder="'+lexicon.ru.mphone+'"  /></div><div class="form-group"><label class="sr-only" for="wphone">'+lexicon.ru.wphone+'</label><input name=\'wphoneAdd[]\' type="text" class="form-control" placeholder="'+lexicon.ru.wphone+'"  /> </div><div class="form-group"><label class="sr-only" for="email">'+lexicon.ru.email+'</label><input name=\'emailAdd[]\' type="email" class="form-control" placeholder="'+lexicon.ru.email+'" /></div><span class="error error_error_mphone"></span><span class="error error_wphone"></span><span class="error error_email"></span>',document.getElementById("members-wrap").appendChild(o),document.getElementById("members-wrap").appendChild(i),document.getElementById("members-wrap").appendChild(l),e.preventDefault(),!1});