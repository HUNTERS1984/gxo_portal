$(document).ready(function(){
	var m_width = $(window).width();
	
	// SLIDER FASHIONISTA
	var swiper = new Swiper('.slide-fashionista', {
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        slidesPerColumn: 2,
        slidesPerView: 4,
        breakpoints:{
        	320:{
        		slidesPerView:2,
        		slidesPerColumn: 1,
        		centeredSlides: true,
        		spaceBetween: 5
        	},
        	640:{
        		slidesPerView:2,
        		centeredSlides: true,
        		slidesPerColumn: 1,
        		spaceBetween: 5
        	}
        }
    });

	 var swiper_cate = new Swiper('.slide-category',{
	 	slidesPerView: 3,
	 	spaceBetween:20
	 })


	// SERACH TRIGGER
	$('.search-icon').click(function(){
		$('.bg-search').fadeIn();
	})
	$('.btn-close').click(function(e){
		e.preventDefault();
		$('.bg-search').fadeOut();
	})
	// FAV
	$('.favi-icon').click(function(){
		$('.bg-fav').fadeIn();
	})
	$('.btn-close').click(function(e){
		e.preventDefault();
		$('.bg-fav').fadeOut();
	})

	// OWL CAROUSEL 
	$('.list-product-below').owlCarousel({
		items: 7,
		autoplay:true,
		responsive:{
			144: {
				items:3
			},
			767:{
				items: 7
			}
		}
	})

	// NAVIGATION MOBILE
	$('.slick-navigation').owlCarousel({
		items:1,
		nav:true,
		navText: [
			"<i class='fa lp-chevron-right nav-btn right-btn-nav'></i>",
			"<i class='fa lp-chevron-left nav-btn left-btn-nav'></i>"
		],
	}).on('changed.owl.carousel',function(ele){
		var name = $(ele.target).find('.owl-item.active').children('div').data('name');
		$('.section-banner img').hide();
		$(name).fadeIn();
	});

	$(window).load(function(){
		var he = parseInt($('.section-banner img:first').height());
		$('.section-banner').height(he);
		$('.second-navigation li a').click(function(e){
			e.preventDefault();
			$('.second-navigation li').removeClass('active');
			$(this).parent().addClass('active');
			var name = $(this).data('name');
			$('.section-banner img').hide();
			$(name).fadeIn();
		});
	})

})
