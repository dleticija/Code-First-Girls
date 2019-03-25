
$(document).ready(function(){
			$('.customer-logos').slick({
				slidesToShow: 4,
				slidesToScroll: 1,
        centerMode: true,
				autoplay: true,
				autoplaySpeed: 1100,
				arrows: false,
				dots: false,
				pauseOnHover: true,
					responsive: [{
					breakpoint: 768,
					settings: {
						slidesToShow: 3
					}
				}, {
					breakpoint: 520,
					settings: {
						slidesToShow: 2
					}
				}]
			});
		});
