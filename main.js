// $(function() {
//     const $gallery = $('.gallery a').simpleLightbox();
//   });
const current = document.querySelector('#current');
const imgs = document.querySelector('.imgs');
const img = document.querySelectorAll('.imgs img');
const opacity = 0.6;

img[0].style.opacity = opacity;

imgs.addEventListener('click', imgClick);

function imgClick(e) {
  img.forEach(img => (img.style.opacity = 1));

  current.src = e.target.src;

  current.classList.add('fade-in');

  setTimeout(() => current.classList.remove('fade-in'), 500);
  e.target.style.opacity = opacity;
}



jQuery(document).ready(function($) {
        	"use strict";
	        $('#testimonials-list').owlCarousel({
	            loop: true,
	            center: true,
	            items: 3,
	            margin: 0,
	            autoplay: true,
	            dots:true,
	            autoplayTimeout: 3000,
	            smartSpeed: 650,
	            responsive: {
	              0: {
	                items: 1
	              },
	              368: {
	                items: 2
	              },
	              600: {
	                items: 3
	              }
	            }
	        });
			});
			
$(function(){
AOS.init(
	{
		duration:2000,
		delay:5000,
		once:false
		}
	
);
});
