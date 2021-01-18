$(document).ready(function(){	
	//===Burger===========

	$(document).ready(function(){
		$('.header__container_burger,.menu-top__item_link').click(function(event){
			$('.header__container_burger,.header__top_menu').toggleClass('active');
		});
	});

	//===SliderSettings====

	
		$('.products__slider').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			autoplay: true,
			autoplaySpeed: 4000,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						infinite: true,
						arrows: true
					}
				},
				{
					breakpoint: 767,
					settings: {
						infinite: true,
						slidesToShow: 1,
						slidesToScroll: 1,
						arrows: true
					}
				}
			]
		});

		$('.partners__list').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			autoplay: true,
			autoplaySpeed: 4000,
			arrows: false,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						infinite: true,
						arrows: false
					}
				},
				{
					breakpoint: 767,
					settings: {
						infinite: true,
						slidesToShow: 1,
						slidesToScroll: 1,
						arrows: false
					}
				}
			]
		});
	

	//Animation
	var windowHeight = $(window).height();
	var el = document.querySelectorAll('#animated');
	$(document).on('scroll', function() {
		$(el).each(function() {
			var self = $(this),
			height = self.offset().top + (self.height() / 4);
			if ($(document).scrollTop() + windowHeight >= height) {
				self.addClass('animated')
			}
		});
	});

	//===Modals==============

	//= Banana =
	$(document).ready(function(){
		$('#banana').click(function(){
			$('#bananaModal').addClass('activeM');
		});
		$('#bananaClose').click(function(){
			$('#bananaModal').removeClass('activeM');
		});
		$('.modal__overlay').click(function(){
			$('#bananaModal').removeClass('activeM');
		});
	});
	

	//= Tropical =
	$(document).ready(function(){
		$('#tropical').click(function(){
			$('#tropicalModal').addClass('activeM');
		});
		$('#tropicalClose').click(function(){
			$('#tropicalModal').removeClass('activeM');
		});
		$('.modal__overlay').click(function(){
			$('#tropicalModal').removeClass('activeM');
		});
	});
	

	//= Mango =
	$(document).ready(function(){
		$('#mango').click(function(){
			$('#mangoModal').addClass('activeM');
		});
		$('#mangoClose').click(function(){
			$('#mangoModal').removeClass('activeM');
		});
		$('.modal__overlay').click(function(){
			$('#mangoModal').removeClass('activeM');
		});
	});
	

	//= Persimmon =
	$(document).ready(function(){
		$('#persimmon').click(function(){
			$('#persimmonModal').addClass('activeM');
		});
		$('#persimmonClose').click(function(){
			$('#persimmonModal').removeClass('activeM');
		});
		$('.modal__overlay').click(function(){
			$('#persimmonModal').removeClass('activeM');
		});
	});
	

	//= Сoconut =
	$(document).ready(function(){
		$('#coconut').click(function(){
			$('#coconutModal').addClass('activeM');
		});
		$('#coconutClose').click(function(){
			$('#coconutModal').removeClass('activeM');
		});
		$('.modal__overlay').click(function(){
			$('#coconutModal').removeClass('activeM');
		});
	});
	

	//= Mulled-wine =
	$(document).ready(function(){
		$('#mulled-wine').click(function(){
			$('#mulled-wineModal').addClass('activeM');
		});
		$('#mulled-wineClose').click(function(){
			$('#mulled-wineModal').removeClass('activeM');
		});
		$('.modal__overlay').click(function(){
			$('#mulled-wineModal').removeClass('activeM');
		});
	});
	

	//= Callme-popup =
	$(document).ready(function(){
		$('#callme-popup').click(function(){
			$('#callme-popupModal-1').addClass('activeM');
		});
		$('#callme-popupClose-1').click(function(){
			$('#callme-popupModal-1').removeClass('activeM');
		});
		$('.modal__overlay').click(function(){
			$('#callme-popupModal-1').removeClass('activeM');
		});
	});
	

	$(document).ready(function(){
		$('#callme-popup-2').click(function(){
			$('#callme-popupModal').addClass('activeM');
		});
		$('#callme-popupClose').click(function(){
			$('#callme-popupModal').removeClass('activeM');
		});
		$('.modal__overlay').click(function(){
			$('#callme-popupModal').removeClass('activeM');
		});
	});
	
	//= Form =
	$("form.callme-form").submit(function() { // Событие отправки с формы
		var form_data = $(this).serialize(); // Собираем данные из полей
		$.ajax({
			type: "POST", // Метод отправки
			url: "sendform.php", // Путь к PHP обработчику sendform.php
			data: form_data,
			success: function() {
				$('#callme-popupModal').removeClass('activeM');
				$('.popup__thx').addClass('active');
				$('.popup__thx_close').click(function(){
					$('.popup__thx').removeClass('active');
				});	
				$('.overlay__thx').click(function(){
					$('.popup__thx').removeClass('active');
				});
			}
		});
		event.preventDefault();
	});

	$("form.order-form").submit(function() { // Событие отправки с формы
		var form_data = $(this).serialize(); // Собираем данные из полей
		$.ajax({
			type: "POST", // Метод отправки
			url: "sendform-01.php", // Путь к PHP обработчику sendform.php
			data: form_data,
			success: function() {
				$('#callme-popupModal-1').removeClass('activeM');
				$('.popup__thx-1').addClass('active');
				$('.popup__thx_close').click(function(){
					$('.popup__thx-1').removeClass('active');
				});	
				$('.overlay__thx').click(function(){
					$('.popup__thx-1').removeClass('active');
				});
			}
		});
		event.preventDefault();
	});
});

	$("#price-form").submit(function() { // Событие отправки с формы
		var form_data = $(this).serialize(); // Собираем данные из полей
		$.ajax({
			type: "POST", // Метод отправки
			url: "sendform-02.php", // Путь к PHP обработчику sendform.php
			data: form_data,
			success: function() {
				$('.popup__thx-2').addClass('active');
				$('.popup__thx_close').click(function(){
					$('.popup__thx-2').removeClass('active');
				});	
				$('.overlay__thx').click(function(){
					$('.popup__thx-2').removeClass('active');
				});
			}
		});
		event.preventDefault();
	});

//===Price Calc==============

function calc(){
	var bananaPrice = Number(document.getElementById("banana-price").value);         
	var bananaCount = Number(document.getElementById("banana-order").value);
	var banana = bananaPrice * bananaCount;
						        
	var tropicalPrice = Number(document.getElementById("tropical-price").value);      
	var tropicalCount = Number(document.getElementById("tropical-order").value);
	var tropical = tropicalPrice * tropicalCount;
						        
	var mangoPrice = Number(document.getElementById("mango-price").value);      
	var mangoCount = Number(document.getElementById("mango-order").value);
	var mango = mangoPrice * mangoCount;
						        
	var persimmonPrice = Number(document.getElementById("persimmon-price").value);    
	var persimmonCount = Number(document.getElementById("persimmon-order").value);
	var persimmon = persimmonPrice * persimmonCount;
						        
	var coconutPrice = Number(document.getElementById("coconut-price").value);    
	var coconutCount = Number(document.getElementById("coconut-order").value);
	var	coconut = coconutPrice * coconutCount;
						        
	var mulledPrice = Number(document.getElementById("mulled-price").value);    
	var mulledCount = Number(document.getElementById("mulled-order").value);
	var mulled = mulledPrice * mulledCount;
						        
	var result = banana + tropical + mango + persimmon + coconut + mulled;

	document.getElementById("result").innerHTML = result;					          
}