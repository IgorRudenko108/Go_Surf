"use strict"
// --------------------------------------------------------------------------------------------------------------------------------
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});
// --------------------------------------------------------------------------------------------------------------------------------



// -- swiper-1 ------------------------------------------------------------------------------------------------------------------------------
const swiper = new Swiper('.swiper-1', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	effect: 'fade',
	grabCursor: true,
	slideToClickedSlide: true,
	// autoplay: true,
	// speed: 800,

 
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-1__btn-next',
	  prevEl: '.swiper-1__btn-prev',
	},
 

	thumbs: {
		swiper: {
			el: '.swiper-2', 
			slidesPerView: 4.5,  
		}                                 
	},

});
// -- /swiper-1 ------------------------------------------------------------------------------------------------------------------------------



// -- map-dots -------------------------------------------------------------------------------------------------------------------------------
// const mapDotsCurent1 = document.querySelector('.map__dots-curent-1');
// const mapDotsContent1 = document.querySelector('.map__dots-content-1');
// if (mapDotsCurent1) {
// 	mapDotsCurent1.addEventListener("click", function (e) {
// 		mapDotsCurent1.classList.toggle('_active');
// 		mapDotsContent1.classList.toggle('_active');

// 	});
// }


// const mapDotsCurent2 = document.querySelector('.map__dots-curent-2');
// const mapDotsContent2 = document.querySelector('.map__dots-content-2');
// if (mapDotsCurent2) {
// 	mapDotsCurent2.addEventListener("click", function (e) {
// 		mapDotsCurent2.classList.toggle('_active');
// 		mapDotsContent2.classList.toggle('_active');

// 	});
// }


// const mapDotsCurent3 = document.querySelector('.map__dots-curent-3');
// const mapDotsContent3 = document.querySelector('.map__dots-content-3');
// if (mapDotsCurent3) {
// 	mapDotsCurent3.addEventListener("click", function (e) {
// 		mapDotsCurent3.classList.toggle('_active');
// 		mapDotsContent3.classList.toggle('_active');

// 	});
// }

// const mapDotsCurent4 = document.querySelector('.map__dots-curent-4');
// const mapDotsContent4 = document.querySelector('.map__dots-content-4');
// if (mapDotsCurent4) {
// 	mapDotsCurent4.addEventListener("click", function (e) {
// 		mapDotsCurent4.classList.toggle('_active');
// 		mapDotsContent4.classList.toggle('_active');

// 	});
// }

// const mapDotsCurent5 = document.querySelector('.map__dots-curent-5');
// const mapDotsContent5 = document.querySelector('.map__dots-content-5');
// if (mapDotsCurent5) {
// 	mapDotsCurent5.addEventListener("click", function (e) {
// 		mapDotsCurent5.classList.toggle('_active');
// 		mapDotsContent5.classList.toggle('_active');

// 	});
// }

// const mapDotsCurent6 = document.querySelector('.map__dots-curent-6');
// const mapDotsContent6 = document.querySelector('.map__dots-content-6');
// if (mapDotsCurent6) {
// 	mapDotsCurent6.addEventListener("click", function (e) {
// 		mapDotsCurent6.classList.toggle('_active');
// 		mapDotsContent6.classList.toggle('_active');

// 	});
// }


// const mapDotsCurent7 = document.querySelector('.map__dots-curent-7');
// const mapDotsContent7 = document.querySelector('.map__dots-content-7');
// if (mapDotsCurent7) {
// 	mapDotsCurent7.addEventListener("click", function (e) {
// 		mapDotsCurent7.classList.toggle('_active');
// 		mapDotsContent7.classList.toggle('_active');

// 	});
// }


// const mapDotsCurent8 = document.querySelector('.map__dots-curent-8');
// const mapDotsContent8 = document.querySelector('.map__dots-content-8');
// if (mapDotsCurent8) {
// 	mapDotsCurent8.addEventListener("click", function (e) {
// 		mapDotsCurent8.classList.toggle('_active');
// 		mapDotsContent8.classList.toggle('_active');

// 	});
// }

// -- /map-dots ------------------------------------------------------------------------------------------------------------------------------


// -- surf-slider ------------------------------------------------------------------------------------------------------------------------------
const surfSlider = new Swiper('.surf-slider__body', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	effect: 'slide',
	grabCursor: true,
	slideToClickedSlide: true,
	slidesPerView: 'auto',
	centeredSlides: true,

	// Navigation arrows
	navigation: {
	  nextEl: '.surf-slider__next',
	  prevEl: '.surf-slider__prev',
	},
});
// -- /surf-slider ------------------------------------------------------------------------------------------------------------------------------


// -- slider-body ------------------------------------------------------------------------------------------------------------------------------
const sliderBody = new Swiper('.slider-body', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	effect: 'slide',
	grabCursor: true,
	slideToClickedSlide: true,

	// Navigation arrows
	navigation: {
	  nextEl: '.slider__arrow-btn--next',
	  prevEl: '.slider__arrow-btn--prev',
	},


});

// -- /slider-body ------------------------------------------------------------------------------------------------------------------------------


// -- shop-slider ------------------------------------------------------------------------------------------------------------------------------
const shopSlider = new Swiper('.section-shop__slider', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	effect: 'slide',
	grabCursor: true,
	slideToClickedSlide: true,

	// Navigation arrows
	navigation: {
	  nextEl: '.section-shop__next',
	  prevEl: '.section-shop__prev',
	},
});
// -- /shop-slider ------------------------------------------------------------------------------------------------------------------------------



// -- shop-point ------------------------------------------------------------------------------------------------------------------------------
// const point = document.querySelector('.shop-slide__product');

// function showConsole() {
// 	console.log('Ok!');
// }

// point.addEventListener("click", function (event) { 
// 	if (event.target.closest('.shop-slide__point')) {
		
// 	}
// });

//------------------------------------------
// document.addEventListener("click", function (event) {
// 	console.log('Click on button');
// 	console.log(event.target);
// });



//------------------------------------------
// if (point.classList.contains('_active')) {
// 	console.log('success');
//}

//------------------------------------------
// for (let className of point.classList) {
// 	console.log(className);
// }


// -- /shop-point ------------------------------------------------------------------------------------------------------------------------------



// const mapDotsCurent = document.querySelectorAll('.map__dots-curent');
// const mapDotsContent = document.querySelector('.map__dots-content');
// const map = document.querySelector('.map');



// if (mapDotsCurent.length > 0) {
// 	mapDotsCurent.forEach(mapDotsCurent => {
// 		mapDotsCurent.addEventListener("click", onMapDorsClick);
// 	});

// 	function onMapDorsClick(e) {
// 		const mapDotsCurent = e.target;
// 		if (mapDotsContent.classList.contains('_active')) {
// 			document.body.classList.remove('_lock');
// 			mapDotsContent.classList.remove('_active');
// 			map.classList.remove('_active');
// 		}
// 		e.preventDefault();
// 	}
// }


