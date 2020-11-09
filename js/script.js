


$(document).ready(function(){
  $(window).scroll(function(){
    if ($(window).scrollTop() > 350) {
        // $('.about').addClass('scroll');
        $('.fixed-social').addClass('opacity-panel');
    }
    else {
        // $('.about').removeClass('scroll');
        $('.fixed-social').removeClass('opacity-panel');
    }
  });

  $('.header-wrapper__icon-burger').click(function(){
    $('.header-wrapper__burger').css('right', 0);
    // $('body').addClass('owerflow-hidden');
  });

  $('.header-wrapper__icon-close').click(function(){
    $('.header-wrapper__burger').css('right', -500);
    // $('body').removeClass('owerflow-hidden');
  });

  $('.arrow').click(function(){
    $('.header-wrapper__dropdown').slideToggle(300);
  });

  $('.arrow2').click(function(){
    $('.header-wrapper__dropdown2').slideToggle(300);
  });

  

});



let bg = document.querySelector('#banner').offsetHeight,
    whatsApp = document.querySelector('.whatsApp--link');
    whatsApp2 = document.querySelector('.whatsApp--link2');
    
    

window.addEventListener('scroll', () => {
  if(scrollY > bg){
    whatsApp.style.right = 20 + 'px';
    whatsApp2.style.right = 20 + 'px';
    // header2.style.top = 0;
  }else{
    whatsApp.style.right = -1000 + 'px';
    whatsApp2.style.right = -1000 + 'px';
    // header2.style.top = -1000 + 'px';
  }
});


$('[data-fancybox="gallery"]').fancybox({
	// Options will go here
});

var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
  },
  	breakpoints: {
				1200: {
					slidesPerView: 1,
					spaceBetween: 10
				},
				992: {
					slidesPerView: 1,
					spaceBetween: 50
				},
				827: {
					slidesPerView: 1,
					spaceBetween: 88
				},
				768: {
					slidesPerView: 1,
					spaceBetween: 100
				},
				480: {
					slidesPerView: 1,
					spaceBetween: 100
				},
				320: {
					slidesPerView: 1,
					spaceBetween: 90
				},
			}
});




  jQuery(document).ready(function() {
    jQuery(window).bind("load", function() {
      //Пример исключения ссылки
      //jQ ('a[href*="#"]:not([href="#"],[href="#spu-209"],[href="#spu-211"],[href="#spu-212"],[href="#spu-213"],[href="#spu-214"],[href="#spu-215"],[href="#spu-217"])').click(function() {
      jQuery('a:not(.spu-clickable)[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
          location.hostname == this.hostname) {
          var target = jQuery(this.hash);
          target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            jQuery("html, body").animate({
              // $('html, body').animate({
              scrollTop: target.offset().top - 10
            }, 1000);
            return false;
          }
        }
      });
    });
  });
  jQuery(window).load(function() {
    function goToByScroll(id) {
      jQuery("html, body").animate({
        scrollTop: jQuery("#" + id).offset().top - 10
      }, 1000);
    }
    if (window.location.hash != '') {
      goToByScroll(window.location.hash.substr(1));
    }
  });


 
