$( document ).ready(function() {
    jQuery('a.gallery').colorbox({rel:'group1', transition:'elastic'});
	$('.lazy').slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
		autoplay: true,
		autoplaySpeed: 3000
      });
	$('.toggle').onclick(function() {
		$('.sub').toggleClass('active');
	});
});