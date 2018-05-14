const slideBuildings = document.querySelector('#Buildings');
const slideClouds = document.querySelector('#Clouds');
const slideRain = document.querySelector('#Rain');
const cloudFive = document.querySelector('#Cloud5');

function checkClass() {
	if (slideBuildings.classList.contains('buildings')) {
		let computedStyle = window.getComputedStyle(slideBuildings);
		slideBuildings.style.transform = computedStyle.transform;
		slideBuildings.classList.remove('buildings');
		slideClouds.classList.remove('clouds');
		slideRain.classList.remove('rain');
		cloudFive.classList.remove('.clouds');
	} else {
		slideBuildings.style.transform = '';
		slideBuildings.classList.add('buildings');
		slideClouds.classList.add('clouds');
		slideRain.classList.add('rain');
		cloudFive.classList.add('clouds');
	}
}

document.querySelector('.skyline').addEventListener('click', checkClass);
slideBuildings.addEventListener('touch', checkClass);


// Show navigation bar on small screens
const navBar = document.querySelector('.navigation-list');
const circleNav = document.querySelector('.circle-nav');

function showHideNavBar() {
	if (navBar.classList.contains('show-bar')) {
		return navBar.classList.remove('show-bar');
	} else {
		return navBar.classList.add('show-bar');
	}
}

circleNav.addEventListener('click', showHideNavBar);

// Once click on link close menu bar
const liLinks = document.querySelectorAll('.navigation-list li');

function addListenerToMenuLinks(list, event, handler) {
	for (let i = 0; i < list.length; i++) {
		list[i].addEventListener(event, handler);
	}  
}


addListenerToMenuLinks(liLinks, 'click', showHideNavBar);





// Smooth scroll jquery
$(document).ready(function(){
	$('#hamburgerIcon').click(function(){ //turns hamburger icon to X and back
		$('#line1').toggleClass('active');
		$('#line2').toggleClass('active');
		$('#line3').toggleClass('active');
	});
  
	// Add smooth scrolling to all links
	$('a').on('click', function(event) {
  
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== '') {
			// Prevent default anchor click behavior
			event.preventDefault();
  
			// Store hash
			var hash = this.hash;
  
			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
  
				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // End if
	});
});

// Snippet for typewritter effect from https://css-tricks.com/snippets/css/typewriter-effect/
var TxtType = function(el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
};

TxtType.prototype.tick = function() {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];

	if (this.isDeleting) {
		this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

	var that = this;
	var delta = 200 - Math.random() * 100;

	if (this.isDeleting) { delta /= 2; }

	if (!this.isDeleting && this.txt === fullTxt) {
		delta = this.period;
		this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		this.loopNum++;
		delta = 500;
	}

	setTimeout(function() {
		that.tick();
	}, delta);
};

window.onload = function() {
	var elements = document.getElementsByClassName('typewrite');
	for (var i=0; i<elements.length; i++) {
		var toRotate = elements[i].getAttribute('data-type');
		var period = elements[i].getAttribute('data-period');
		if (toRotate) {
			new TxtType(elements[i], JSON.parse(toRotate), period);
		}
	}
	// INJECT CSS
	var css = document.createElement('style');
	css.type = 'text/css';
	css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #fff}';
	document.body.appendChild(css);
};