// JavaScript Document

//ウィンドウ幅取得
var wW = $(window).width();
//ウィンドウ高さ取得
var wH = $(window).height();
// モバイルサイズ
var mW = 640;
// ユーザーエージェント
var UA = window.navigator.userAgent.toLowerCase();

/*
jQuery.event.add(window,"load",function() {
	var pageH = $("#wrapper").height();
	$("#fade").css("height", pageH).fadeOut(300);
	$("#loader").fadeOut(300);
	$('#wrapper').animate({'opacity':'1'}, 800,'', function() {
		//
    $('.ttl_img').addClass('is-show');
    setTimeout(function () {
      $('.icon2020').addClass('is-show');
    }, 200);
    setTimeout(function () {
      $('.carousel_wrap').addClass('is-show');
    }, 500);
	});
});
*/
//jQuery.event.add(window,"load",function() {
document.onready = () => {
	// var pageH = $("#wrapper").height();
	// $("#fade").css("height", pageH).fadeOut(300);
	// $("#loader").fadeOut(300);
	//$('#wrapper').animate({'opacity':'1'}, 800,'', function() {
		//
    $('.ttl_img').addClass('is-show');
    setTimeout(function () {
      $('.icon2020').addClass('is-show');
    }, 200);
    setTimeout(function () {
      $('.carousel_wrap').addClass('is-show');
    }, 500);
	// });
};


jQuery(window).on("load resize", function(){
  var $win = $(window),
      $pagettl = $('.page_ttl_wrap'),
      $hamburger = $('.drawer-toggle'),
      pagettlHeight = $pagettl.outerHeight(),
      colorClass = 'is-white';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > pagettlHeight ) {
      $hamburger.removeClass(colorClass);
    } else {
      $hamburger.addClass(colorClass);
    }
  });
});

//jQuery(window).on("load resize", function(){
//    
//  var $win = $(window),
//      $main = $('main'),
//      $nav = $('.g_navi'),
//      navHeight = $nav.outerHeight(),
//      navPos = $nav.offset().top,
//      fixedClass = 'is-fixed';
//
//  $win.on('load scroll', function() {
//    var value = $(this).scrollTop();
//	var w = $(window).width();
//	var x = 768;
//    if ( value > navPos && w >= x) {
//      $nav.addClass(fixedClass);
//      $main.css('margin-top', navHeight);
//    } else {
//      $nav.removeClass(fixedClass);
//      $main.css('margin-top', '0');
//    }
//  });
//});


jQuery(window).on("load resize", function(){
var $win = $(window),
    $header = $('.site-header'),
    $headerChange = $('.header-change'),
    heroBottom;
 
$win.on('scroll',function(){
    heroBottom = $('.g_navi.site-header').height();
    if($win.scrollTop() > heroBottom){
        $headerChange.addClass('show');  
    }
    else{
        $headerChange.removeClass('show');
    }
});
 
$win.trigger('scroll');
    
});



//縦書きボックスの高さ指定
jQuery.event.add(window,"load resize",function() {
	
	var img_boxHeight = $("#about_content .about_detail li.photo .img_box").height();
	$("#about_content .about_detail li.description").css("height", img_boxHeight);
    
    var img_boxHeight2 = $("#product_content .product_detail li.photo .img_box").height();
	$("#product_content .product_detail li.description").css("height", img_boxHeight2);
	
});


//ページスクロールするごとに表示
$(function() {
  $('.fade-in div.inner').css("opacity","0");
  $(window).scroll(function (){
    $(".fade-in").each(function(){
      var imgPos = $(this).offset().top;    
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $("div.inner",this).css("opacity","1" );
      } else {
        $("div.inner",this).css("opacity","0" );
      }
    });
  });
});


//トップのスライドBGとスクロールダウン
$(function() {
  $('#topmain div.white_bg').css("opacity","0");
  $('#topmain div.down').css("opacity","1");
  $(window).scroll(function (){
    $("#topmain").each(function(){
      var imgPos = $(this).offset().top;    
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos + windowHeight/3){
        $("div.white_bg",this).css("opacity","1" );
        $("div.down",this).css("opacity","0" );
      } else {
        $("div.white_bg",this).css("opacity","0" );
        $("div.down",this).css("opacity","1" );
      }
    });
  });
});


$(window).on('load resize', function() {
if (window.matchMedia('(max-width: 768px)').matches){
    $('#topmain .slide_con li.centre').before( $('#topmain .slide_con li.right'));
    $('#topmain .slide_con li.centre').after( $('#topmain .slide_con li.left'));
    $('#shop_manu .shop_manu_list.shop_manu2 > li.img').after( $('#shop_manu .shop_manu_list.shop_manu2 > li.txt'));
    $('#shop_manu .shop_manu_list.shop_manu4 > li.img').after( $('#shop_manu .shop_manu_list.shop_manu4 > li.txt'));
} else {
    $('#topmain .slide_con li.centre').after( $('#topmain .slide_con li.right'));
    $('#topmain .slide_con li.centre').before( $('#topmain .slide_con li.left'));
    $('#shop_manu .shop_manu_list.shop_manu2 > li.img').before( $('#shop_manu .shop_manu_list.shop_manu2 > li.txt'));
    $('#shop_manu .shop_manu_list.shop_manu4 > li.img').before( $('#shop_manu .shop_manu_list.shop_manu4 > li.txt'));
}
});


$(function() {
    var pagetop = $('#page_top');
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500); //0.5秒かけてトップへ移動
        return false;
    });
});


//$(function(){
//  $('a[href^="#"]').click(function(){
//    var speed = 500;
//    var href= $(this).attr("href");
//    var target = $(href == "#" || href == "" ? 'html' : href);
//    var position = target.offset().top;
//    $("html, body").animate({scrollTop:position}, speed, "swing");
//    return false;
//  });
//});

//$(function() {
//    $('.pure-drawer li a img').on('click', function(){
//        if (window.innerWidth <= 3000) {
//            $('.pure-overlay').click();
//        }
//    });
//});


//drawr閉じる
//$(function() {
//    $('#top .drawer-nav li a').on('click', function(){
//        if (window.innerWidth <= 3000) {
//            $('.drawer-toggle').click();
//        }
//    });
//});


//ページ内リンク時のズレ防止
jQuery(function(){
//var headerHeight = $('.g_navi').outerHeight();
var windowWidth = $(window).width();
    var windowSm = 768; // スマホに切り替わる横幅
      if (windowWidth <= windowSm) {
        var headerHeight = 60; // スマホのヘッダー等の高さ分の数値を入れる
       } else {
        var headerHeight = 120; // PC のヘッダー等の高さ分の数値を入れる
      }
var urlHash = location.hash;
if(urlHash) {
    $('body,html').stop().scrollTop(0);
    setTimeout(function(){
        var target = $(urlHash);
        var position = target.offset().top - headerHeight;
        $('body,html').animate({scrollTop:position}, 500);
		return false;
    }, 100);
}
$('a[href^="#"]').click(function() {
    var href= $(this).attr("href");
    var target = $(href);
    var position = target.offset().top - headerHeight;
    $('body,html').animate({scrollTop:position}, 500);
	return false;
});
});


//カレント付与
$(function(){
  $('.navigation li a').each(function(){
    var $href = $(this).attr('href');
    if(location.href.match($href)) {
      $(this).parent().addClass('current');
    } else {
      $(this).parent().removeClass('current');
    }
  });
});


//カレント付与
$(function(){
  $('#exhibitor .exhibitorcatlist > li a').each(function(){
    var $href = $(this).attr('href');
    if(location.href.match($href)) {
      $(this).parent().addClass('current');
    } else {
      $(this).parent().removeClass('current');
    }
  });
});


//カレント付与
$(function(){
  $('#newscatlist_wrap .newscatlist > li a').each(function(){
    var $href = $(this).attr('href');
    if(location.href.match($href)) {
      $(this).parent().addClass('current');
    } else {
      $(this).parent().removeClass('current');
    }
  });
});