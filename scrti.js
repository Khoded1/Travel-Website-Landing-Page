'use strict';
const btnNavEl = document.querySelector('.btn_mobile_nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
	headerEl.classList.toggle('nav_open');
});
