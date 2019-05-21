var isActive = false;
var isMenuActive = false;
var contentWidth = $('.content').outerWidth();

$('nav li').click(function() {
  if (isActive && $(this).hasClass('active')) {
    $(this).removeClass('active');
    $('.content.'+this.className).css({'right': 0-contentWidth});
    $('.content.'+this.className).removeClass('vision');
    $('nav').removeClass('active-menu');
    $('.main-text').css('left', '0');
    $('.main-quote').css('right', '0');
    $('.toggle-button').removeClass('start');
    isActive = false;
  } else if (isActive && !$(this).hasClass('active')) {
    $('nav li').removeClass('active');
    $('.content').removeClass('vision');
    $('.content.'+this.className).addClass('vision');
    $(this).addClass('active');
  } else {
    $('.content.'+this.className).addClass('vision');
    $(this).addClass('active');
    $('nav').addClass('active-menu');
    $('.toggle-button').addClass('start');
    $('.main-text').css('left', 0-contentWidth);
    $('.main-quote').css('right', 0-contentWidth);
    isActive = true;
  }
});

$('.mobile-menu').click(function() {
  if (isMenuActive && !isActive) {
    $('.content.menu').css({'right': 0-contentWidth});
    $(this).removeClass('active');
    $('.main-text').css('left', '0');
    $('.main-quote').css('right', '0');
    $('.toggle-button').removeClass('start');
    isMenuActive = false;
  } else if (!isMenuActive && isActive) {
    $('.content').css({'right': 0-contentWidth});
    $('.content.menu').css({'right': '0'});
    $('.toggle-button').addClass('start');
    isActive = false;
    isMenuActive = true;
  } else {
    $('.content.menu').css({'right': '0'});
    $(this).addClass('active');
    $('.toggle-button').addClass('start');
    $('.main-text').css('left', 0-contentWidth);
    $('.main-quote').css('right', '-80%');
    isMenuActive = true;
  }
});

$('.content.menu li').click(function() {
  if (isActive && !isMenuActive) {
    $('.content.'+this.className).css({'right': 0-contentWidth});
    $('.main').css({'overflow-y': 'hidden'});
    isActive = false;
  } else if (!isActive && isMenuActive) {
    $('.content.menu').css({'right': 0-contentWidth});
    $(this).removeClass('active');
    $('.toggle-button').removeClass('start');
    $('.main').css({'overflow-y': 'scroll'});
    $('.content.'+this.className).css({'right': '0'});
    $('.content.'+this.className).css({'overflow-y': 'scroll'});
    isActive = true;
    isMenuActive = false;
  } else {
    $('.content.'+this.className).css({'overflow-y': 'scroll'});
    $('.content.'+this.className).css({'right': '0'});
    isActive = true;
  }
});


$(function() {
  if ($('body').scrollLeft() > 0) {
    setTimeout(function(){
      $('body').scrollLeft(0);
    },30);
  }

  $('nav li').click(function() {
    $('.vision').scroll(function() {
      $('nav').css({'top': 70-$('.vision').scrollTop()})
    })
  });
});
