jQuery(function($) {'use strict';
	// // Navigation Scroll
	// $(window).scroll(function(event) {
	// 	Scroll();
	// });

	// $('.navbar-collapse ul li a').on('click', function() {  
	// 	$('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
	// 	return false;
	// });

	// // User define function
	// function Scroll() {
	// 	var contentTop      =   [];
	// 	var contentBottom   =   [];
	// 	var winTop      =   $(window).scrollTop();
	// 	var rangeTop    =   200;
	// 	var rangeBottom =   500;
	// 	$('.navbar-collapse').find('.scroll a').each(function(){
	// 		contentTop.push( $( $(this).attr('href') ).offset().top);
	// 		contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
	// 	})
	// 	$.each( contentTop, function(i){
	// 		if ( winTop > contentTop[i] - rangeTop ){
	// 			$('.navbar-collapse li.scroll')
	// 			.removeClass('active')
	// 			.eq(i).addClass('active');			
	// 		}
	// 	})
	// };

	// $('#tohash').on('click', function(){
	// 	$('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
	// 	return false;
	// });

	//Initiat WOW JS
	new WOW().init();

	// portfolio filter
	// $(window).on("load",function(){'use strict';
	// 	var $portfolio_selectors = $('.portfolio-filter >li>a');
	// 	var $portfolio = $('.portfolio-items');
	// 	$portfolio.isotope({
	// 		itemSelector : '.portfolio-item',
	// 		layoutMode : 'fitRows'
	// 	});
		
	// 	$portfolio_selectors.on('click', function(){
	// 		$portfolio_selectors.removeClass('active');
	// 		$(this).addClass('active');
	// 		var selector = $(this).attr('data-filter');
	// 		$portfolio.isotope({ filter: selector });
	// 		return false;
	// 	});
	// });

	// // Contact form
	// var form = $('#main-contact-form');
	// form.submit(function(event){
	// 	event.preventDefault();
	// 	var form_status = $('<div class="form_status"></div>');
	// 	$.ajax({
	// 		url: $(this).attr('action'),
	// 		beforeSend: function(){
	// 			form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
	// 		}
	// 	}).done(function(data){
	// 		form_status.html('<p class="text-success">Thank you for contact us. As early as possible  we will contact you</p>').delay(3000).fadeOut();
	// 	});
	// });
});