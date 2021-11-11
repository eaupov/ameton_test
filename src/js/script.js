@@include('bootstrap.min.js')
@@include('jquery.min.js')
@@include('owl.carousel.min.js')

$( function() {
	$('.owl-carousel').owlCarousel({
		items: 4,
		loop: true,
		margin: 24,
		autoWidth: true,
		nav: true,
		responsiveClass:'owl-responsive',
		onInitialized: good_shadow,
		touchDrag: true,
		mouseDrag: true,
		responsive:{
			0:{
				items:1,
				margin:20
			},
			381:{
				items:1,
				margin:40
			},
			941:{
				items:2,
				margin:30
			},
			1161:{
				items:3,
				margin:25,
			}
		}
	});

	function good_shadow(event) {
		if($(window).width() <= '768'){
			$(".owl-carousel .owl-item").each(function(index){
				$(this).find(".one_faq").addClass("shadow_faq");
			});
		}else{
			var item = $(".owl-carousel .owl-item.active .one_faq").length-1;
		}
		$(".owl-carousel .owl-item.active").each(function(index){
			if(index!=item){
				$(this).find(".one_faq").addClass("shadow_faq");
			}
		});
	};

	$('.owl-next').on("click", function () {
		if($(window).width() > '768'){
			$(".owl-carousel .owl-item .one_faq").each(function(index){
				$(this).removeClass("shadow_faq");
			});
			var item = $(".owl-carousel .owl-item.active .one_faq").length-1;
			$(".owl-carousel .owl-item.active .one_faq").each(function(index){
				//alert(index);
				if(index!=item){
					$(this).addClass("shadow_faq");
				}
			});
		}
	});

	$('.owl-prev').on("click", function () {
		if($(window).width() > '768'){
			$(".owl-carousel .owl-item .one_faq").each(function(index){
				$(this).removeClass("shadow_faq");
			});
			var item = $(".owl-carousel .owl-item.active .one_faq").length-1;
			$(".owl-carousel .owl-item.active .one_faq").each(function(index){
				//alert(index);
				if(index!=item){
					$(this).addClass("shadow_faq");
				}
			});
		}
	});
});