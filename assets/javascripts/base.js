"use strict"

$(function () {
  var aDay        = (new Date).getDay(),
      aCurrentTab = (aDay > 0 && aDay < 6) ? (aDay-1) : 0,
      aActiveTab  = $('ul.schedule-days li')[aCurrentTab],
      aCurrentSchedule = $('#schedule').find('[data-schedule]')[aCurrentTab];

  $(aActiveTab).addClass('active');
  $(aCurrentSchedule).fadeIn();

// menu
  var gNav          = $('.main-nav'),
      gMobileStripe = $('.menu-stripe'),
      gMobileMenu   = $('.mobile-menu');

  gNav.on('click', 'li', function(e){
    e.preventDefault();
    $('html,body').scrollTo($(this).find('a').attr('href'), 500);
  });

  gMobileMenu.on('click', function(){
    $(this).fadeToggle();
  });

  gMobileStripe.on('click', function(){
    gMobileMenu.fadeToggle();
  });

});
