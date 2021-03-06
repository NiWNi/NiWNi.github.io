'use strict';

// Add service worker
if ('serviceWorker' in navigator) {
	window.addEventListener('load', function() {
	  navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
		// Registration was successful
		console.log('ServiceWorker registration successful with scope: ', registration.scope);
	  }).catch(function(err) {
		// registration failed :(
		console.log('ServiceWorker registration failed: ', err);
	  });
	});
  }

// Show navigation bar on small screens
const navBar = document.querySelectorAll('.navigation-list');
const circleNav = document.querySelector('.circle-nav');
const navBarParent = document.querySelector('.navigation-bar');

function showHideNavBar() {
	if (navBar[0].classList.contains('show-bar')) {
		for (let i = 0; i < navBar.length; i++) {
			navBar[i].classList.toggle('show-bar');
		}
	} else {
		for (let i = 0; i < navBar.length; i++) {
			navBar[i].classList.toggle('show-bar');
		}
	}
}

function closeNavBar() {
	if (navBar[0].classList.contains('show-bar')) {
		for (let i = 0; i < navBar.length; i++) {
			navBar[i].classList.remove('show-bar');
		}
	}
}

circleNav.addEventListener('click', showHideNavBar);


// Once click on link close menu bar
const liLinks = document.querySelectorAll('.navigation-list div');

function addListenerToMenuLinks(list, event, handler) {
	for (let i = 0; i < list.length; i++) {
		list[i].addEventListener(event, handler);
	}
}

// Function to close nav bar once clicked on link
function closeCirNavBar() {
	if (navBar[0].classList.contains('show-bar')) {
		navBar[0].classList.remove('show-bar');
	}
}

addListenerToMenuLinks(liLinks, 'click', showHideNavBar);


//#region Animations

// Animate logo
document.onload = animateLogo();

// Function snippet from https://jakearchibald.com/2013/animated-line-drawing-svg/
function aniPath(length, pathFromArray) {
	const path = pathFromArray;
	// const length = path.getTotalLength(); //Not supported, changed to real length
	// Clear previous transition
	path.style.transition = path.style.WebkitTransition =
	'none';
	// Set up the starting positions
	path.style.strokeDasharray = length + ' ' + length;
	path.style.strokeDashoffset = length;
	// Trigger a layout so styles are calculated & the browser
	// picks up the starting position before animating
	path.getBoundingClientRect();
	// Define our transition
	path.style.transition = path.style.WebkitTransition =
	'stroke-dashoffset 3s ease-in-out';
	// Animate
	path.style.strokeDashoffset = '0';
}

// Function to animate entire logo
function animateLogo() {
	const firstN = document.querySelectorAll('.stlog0')[1];
	const secondN = document.querySelectorAll('.stlog0')[0];
	const w = document.querySelectorAll('.stlog1')[0];
	const wLine = document.querySelectorAll('.stlog1')[1];
	const svgLogo = document.querySelector('.logo');
	const nLength = 160.72344970703125;
	const wLength = 313.7012023925781;
	const wLineLength = 78.5999984741211;
	// Set logo to be visible
	svgLogo.style.visibility = 'visible';
	// Animate logo
	aniPath(nLength, firstN);
	aniPath(nLength, secondN);
	aniPath(wLength, w);
	aniPath(wLineLength, wLine);
	// Animate skyline
	setTimeout(() => {
		animateSkyline();
	}, 3000); 
}

// Create timeline object from GSAP
function animateSkyline() {
	let tl = new TimelineLite({onUpdate:updateSlider});

	const timeSlide = 100;
	const windWidth = window.innerWidth;
	const slideBuildingsWidth = document.querySelector('#Buildings');
	const skylineWidth = slideBuildingsWidth.getBoundingClientRect().width;
	const skylineLeftSlide = -1 * skylineWidth / 1.86;

	tl.to('.skyline', timeSlide, {left: skylineLeftSlide}, 'first-section')
		.to('.cloud-one', 100, {left: skylineLeftSlide / 6, top: 30, autoAlpha: 0}, 'first-section+=1.25')
		.to('.cloud-two', 100, {left: skylineLeftSlide / 3, autoAlpha: 0.1}, 'first-section+=1.5')
		.to('.cloud-three', 100, {left: -1 * skylineLeftSlide / 12, top: -40, autoAlpha:0.3, rotate: 20}, 'first-section')
		.to('.cloud-four', 20, {left: 200}, 'first-section+=1.5')
		.to('.cloud-five', 35, {left: -900}, 'first-section+=2')
		.to('.cloud-six', 35, {left: -1900}, 'first-section')
		.to('.cloud-seven', 55, {left: -1900, top: 100, autoAlpha: 0}, 'first-section')
		.to('.cloud-eight', 35, {left: -1900, autoAlpha: 0.2}, 'first-section')
		.to('.cloud-nine', 65, {left: -2400}, 'first-section')
		.to('.rain', 20, {left: -500,  top: -100}, 'first-section')
		.to('.rain', 2, {top: 50, autoAlpha:0}, 'first-section+=2.5')
		.to('.rain', 0, {top: -75, autoAlpha: 1}, 'first-section+=13')
		.to('.rain', 2, {top: 50, autoAlpha:0}, 'first-section+=13')
		.to('.rain', 0, {top: -100, autoAlpha: 1}, 'first-section+=24')
		.to('.rain', 2, {top: 50, autoAlpha:0}, 'first-section+=24')
		.to('.rain', 0, {top: -100, autoAlpha: 1}, 'first-section+=53')
		.to('.rain', 4, {top: 50, autoAlpha:0}, 'first-section+=53')
		.to('.rain', 0, {top: -100, autoAlpha: 1}, 'first-section+=58')
		.to('.rain', 4, {top: 50, autoAlpha:0}, 'first-section+=58')
		.to('.rain', 0, {top: -100, autoAlpha: 1}, 'first-section+=60')
		.to('.rain', 4, {top: 50, autoAlpha:0}, 'first-section+=60')
		.to('.rain', 0, {top: -100, autoAlpha: 1}, 'first-section+=65')
		.to('.rain', 4, {top: 50, autoAlpha:0}, 'first-section+=65')
		.to('.rain', 0, {top: -100, autoAlpha: 1}, 'first-section+=69')
		.to('.rain', 4, {top: 50, autoAlpha:0}, 'first-section+=69')
		.to('.rain', 0, {top: -100, autoAlpha: 1}, 'second-section')
		.to('.rain', 4, {top: 50, autoAlpha:0}, 'second-section')
		.to('.rain', 0, {top: -100, autoAlpha: 1}, 'second-section+=3')
		.to('.rain', 4, {top: 50, autoAlpha:0}, 'second-section+=3')
		.to('.rain', 0, {top: -100, autoAlpha: 1}, 'second-section+=8')
		.to('.rain', 4, {top: 50, autoAlpha:0}, 'second-section+=8')
		.to('.rain', 0, {top: -100, autoAlpha: 1}, 'second-section+=13')
		.to('.rain', 4, {top: 50, autoAlpha:0}, 'second-section+=13')
		.to('.cloud-rain', 20, {left: -500, top: -100}, 'first-section');
	
	let count = 0;
	document.querySelector('.home').addEventListener('click', () => {
		count += 1;
		if (count % 2 !== 0) {
			tl.pause();
		} else {
			tl.play();
		}
	}
	);
	// tl.seek('end');
	// tl.timeScale(3);

	$('#slider').slider({
		orientation: "horizontal",
		range: "min",
		min: 0,
		max: 100,
		step: 0.1,
		value: 127,
		slide: function (event, ui) {
			tl.pause();
			tl.progress(ui.value/100);
		}
	});

	function updateSlider() {
		$('#slider').slider('value', tl.progress() * 100);
	}
}

//#endregion Animations

// Smooth scroll jquery
$(document).ready(function () {
	$('#hamburgerIcon').click(function () {
		//turns hamburger icon to X and back
		$('#line1').toggleClass('active');
		$('#line2').toggleClass('active');
		$('#line3').toggleClass('active');
	});

	// Add smooth scrolling to all links
	$('a').on('click', function (event) {

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
			}, 800, function () {

				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // End if
	});
});

// Snippet for typewritter effect from https://css-tricks.com/snippets/css/typewriter-effect/
var TxtType = function (el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
};

TxtType.prototype.tick = function () {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];

	if (this.isDeleting) {
		this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

	var that = this;
	var delta = 200 - Math.random() * 100;

	if (this.isDeleting) {
		delta /= 2;
	}

	if (!this.isDeleting && this.txt === fullTxt) {
		delta = this.period;
		this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		this.loopNum++;
		delta = 500;
	}

	setTimeout(function () {
		that.tick();
	}, delta);
};

window.onload = function () {
	var elements = document.getElementsByClassName('typewrite');
	for (var i = 0; i < elements.length; i++) {
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
/*!
 * Lightbox v2.10.0
 * by Lokesh Dhakar
 *
 * More info:
 * http://lokeshdhakar.com/projects/lightbox2/
 *
 * Copyright 2007, 2018 Lokesh Dhakar
 * Released under the MIT license
 * https://github.com/lokesh/lightbox2/blob/master/LICENSE
 *
 * @preserve
 */

// Uses Node, AMD or browser globals to create a module.
(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// Node. Does not work with strict CommonJS, but
		// only CommonJS-like environments that support module.exports,
		// like Node.
		module.exports = factory(require('jquery'));
	} else {
		// Browser globals (root is window)
		root.lightbox = factory(root.jQuery);
	}
})(this, function ($) {

	function Lightbox(options) {
		this.album = [];
		this.currentImageIndex = void 0;
		this.init();

		// options
		this.options = $.extend({}, this.constructor.defaults);
		this.option(options);
	}

	// Descriptions of all options available on the demo site:
	// http://lokeshdhakar.com/projects/lightbox2/index.html#options
	Lightbox.defaults = {
		albumLabel: 'Image %1 of %2',
		alwaysShowNavOnTouchDevices: false,
		fadeDuration: 600,
		fitImagesInViewport: true,
		imageFadeDuration: 600,
		// maxWidth: 800,
		// maxHeight: 600,
		positionFromTop: 50,
		resizeDuration: 700,
		showImageNumberLabel: true,
		wrapAround: false,
		disableScrolling: false,
		/*
    Sanitize Title
    If the caption data is trusted, for example you are hardcoding it in, then leave this to false.
    This will free you to add html tags, such as links, in the caption.
     If the caption data is user submitted or from some other untrusted source, then set this to true
    to prevent xss and other injection attacks.
     */
		sanitizeTitle: false
	};

	Lightbox.prototype.option = function (options) {
		$.extend(this.options, options);
	};

	Lightbox.prototype.imageCountLabel = function (currentImageNum, totalImages) {
		return this.options.albumLabel.replace(/%1/g, currentImageNum).replace(/%2/g, totalImages);
	};

	Lightbox.prototype.init = function () {
		var self = this;
		// Both enable and build methods require the body tag to be in the DOM.
		$(document).ready(function () {
			self.enable();
			self.build();
		});
	};

	// Loop through anchors and areamaps looking for either data-lightbox attributes or rel attributes
	// that contain 'lightbox'. When these are clicked, start lightbox.
	Lightbox.prototype.enable = function () {
		var self = this;
		$('body').on('click', 'a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]', function (event) {
			self.start($(event.currentTarget));
			return false;
		});
	};

	// Build html for the lightbox and the overlay.
	// Attach event handlers to the new DOM elements. click click click
	Lightbox.prototype.build = function () {
		if ($('#lightbox').length > 0) {
			return;
		}

		var self = this;
		$('<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo($('body'));

		// Cache jQuery objects
		this.$lightbox = $('#lightbox');
		this.$overlay = $('#lightboxOverlay');
		this.$outerContainer = this.$lightbox.find('.lb-outerContainer');
		this.$container = this.$lightbox.find('.lb-container');
		this.$image = this.$lightbox.find('.lb-image');
		this.$nav = this.$lightbox.find('.lb-nav');

		// Store css values for future lookup
		this.containerPadding = {
			top: parseInt(this.$container.css('padding-top'), 10),
			right: parseInt(this.$container.css('padding-right'), 10),
			bottom: parseInt(this.$container.css('padding-bottom'), 10),
			left: parseInt(this.$container.css('padding-left'), 10)
		};

		this.imageBorderWidth = {
			top: parseInt(this.$image.css('border-top-width'), 10),
			right: parseInt(this.$image.css('border-right-width'), 10),
			bottom: parseInt(this.$image.css('border-bottom-width'), 10),
			left: parseInt(this.$image.css('border-left-width'), 10)
		};

		// Attach event handlers to the newly minted DOM elements
		this.$overlay.hide().on('click', function () {
			self.end();
			return false;
		});

		this.$lightbox.hide().on('click', function (event) {
			if ($(event.target).attr('id') === 'lightbox') {
				self.end();
			}
			return false;
		});

		this.$outerContainer.on('click', function (event) {
			if ($(event.target).attr('id') === 'lightbox') {
				self.end();
			}
			return false;
		});

		this.$lightbox.find('.lb-prev').on('click', function () {
			if (self.currentImageIndex === 0) {
				self.changeImage(self.album.length - 1);
			} else {
				self.changeImage(self.currentImageIndex - 1);
			}
			return false;
		});

		this.$lightbox.find('.lb-next').on('click', function () {
			if (self.currentImageIndex === self.album.length - 1) {
				self.changeImage(0);
			} else {
				self.changeImage(self.currentImageIndex + 1);
			}
			return false;
		});

		/*
      Show context menu for image on right-click
       There is a div containing the navigation that spans the entire image and lives above of it. If
      you right-click, you are right clicking this div and not the image. This prevents users from
      saving the image or using other context menu actions with the image.
       To fix this, when we detect the right mouse button is pressed down, but not yet clicked, we
      set pointer-events to none on the nav div. This is so that the upcoming right-click event on
      the next mouseup will bubble down to the image. Once the right-click/contextmenu event occurs
      we set the pointer events back to auto for the nav div so it can capture hover and left-click
      events as usual.
     */
		this.$nav.on('mousedown', function (event) {
			if (event.which === 3) {
				self.$nav.css('pointer-events', 'none');

				self.$lightbox.one('contextmenu', function () {
					setTimeout(function () {
						this.$nav.css('pointer-events', 'auto');
					}.bind(self), 0);
				});
			}
		});

		this.$lightbox.find('.lb-loader, .lb-close').on('click', function () {
			self.end();
			return false;
		});
	};

	// Show overlay and lightbox. If the image is part of a set, add siblings to album array.
	Lightbox.prototype.start = function ($link) {
		var self = this;
		var $window = $(window);

		$window.on('resize', $.proxy(this.sizeOverlay, this));

		$('select, object, embed').css({
			visibility: 'hidden'
		});

		this.sizeOverlay();

		this.album = [];
		var imageNumber = 0;

		function addToAlbum($link) {
			self.album.push({
				alt: $link.attr('data-alt'),
				link: $link.attr('href'),
				title: $link.attr('data-title') || $link.attr('title')
			});
		}

		// Support both data-lightbox attribute and rel attribute implementations
		var dataLightboxValue = $link.attr('data-lightbox');
		var $links;

		if (dataLightboxValue) {
			$links = $($link.prop('tagName') + '[data-lightbox="' + dataLightboxValue + '"]');
			for (var i = 0; i < $links.length; i = ++i) {
				addToAlbum($($links[i]));
				if ($links[i] === $link[0]) {
					imageNumber = i;
				}
			}
		} else {
			if ($link.attr('rel') === 'lightbox') {
				// If image is not part of a set
				addToAlbum($link);
			} else {
				// If image is part of a set
				$links = $($link.prop('tagName') + '[rel="' + $link.attr('rel') + '"]');
				for (var j = 0; j < $links.length; j = ++j) {
					addToAlbum($($links[j]));
					if ($links[j] === $link[0]) {
						imageNumber = j;
					}
				}
			}
		}

		// Position Lightbox
		var top = $window.scrollTop() + this.options.positionFromTop;
		var left = $window.scrollLeft();
		this.$lightbox.css({
			top: top + 'px',
			left: left + 'px'
		}).fadeIn(this.options.fadeDuration);

		// Disable scrolling of the page while open
		if (this.options.disableScrolling) {
			$('html').addClass('lb-disable-scrolling');
		}

		this.changeImage(imageNumber);
	};

	// Hide most UI elements in preparation for the animated resizing of the lightbox.
	Lightbox.prototype.changeImage = function (imageNumber) {
		var self = this;

		this.disableKeyboardNav();
		var $image = this.$lightbox.find('.lb-image');

		this.$overlay.fadeIn(this.options.fadeDuration);

		$('.lb-loader').fadeIn('slow');
		this.$lightbox.find('.lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption').hide();

		this.$outerContainer.addClass('animating');

		// When image to show is preloaded, we send the width and height to sizeContainer()
		var preloader = new Image();
		preloader.onload = function () {
			var $preloader;
			var imageHeight;
			var imageWidth;
			var maxImageHeight;
			var maxImageWidth;
			var windowHeight;
			var windowWidth;

			$image.attr({
				'alt': self.album[imageNumber].alt,
				'src': self.album[imageNumber].link
			});

			$preloader = $(preloader);

			$image.width(preloader.width);
			$image.height(preloader.height);

			if (self.options.fitImagesInViewport) {
				// Fit image inside the viewport.
				// Take into account the border around the image and an additional 10px gutter on each side.

				windowWidth = $(window).width();
				windowHeight = $(window).height();
				maxImageWidth = windowWidth - self.containerPadding.left - self.containerPadding.right - self.imageBorderWidth.left - self.imageBorderWidth.right - 20;
				maxImageHeight = windowHeight - self.containerPadding.top - self.containerPadding.bottom - self.imageBorderWidth.top - self.imageBorderWidth.bottom - 120;

				// Check if image size is larger then maxWidth|maxHeight in settings
				if (self.options.maxWidth && self.options.maxWidth < maxImageWidth) {
					maxImageWidth = self.options.maxWidth;
				}
				if (self.options.maxHeight && self.options.maxHeight < maxImageWidth) {
					maxImageHeight = self.options.maxHeight;
				}

				// Is the current image's width or height is greater than the maxImageWidth or maxImageHeight
				// option than we need to size down while maintaining the aspect ratio.
				if (preloader.width > maxImageWidth || preloader.height > maxImageHeight) {
					if (preloader.width / maxImageWidth > preloader.height / maxImageHeight) {
						imageWidth = maxImageWidth;
						imageHeight = parseInt(preloader.height / (preloader.width / imageWidth), 10);
						$image.width(imageWidth);
						$image.height(imageHeight);
					} else {
						imageHeight = maxImageHeight;
						imageWidth = parseInt(preloader.width / (preloader.height / imageHeight), 10);
						$image.width(imageWidth);
						$image.height(imageHeight);
					}
				}
			}
			self.sizeContainer($image.width(), $image.height());
		};

		preloader.src = this.album[imageNumber].link;
		this.currentImageIndex = imageNumber;
	};

	// Stretch overlay to fit the viewport
	Lightbox.prototype.sizeOverlay = function () {
		this.$overlay.width($(document).width()).height($(document).height());
	};

	// Animate the size of the lightbox to fit the image we are showing
	Lightbox.prototype.sizeContainer = function (imageWidth, imageHeight) {
		var self = this;

		var oldWidth = this.$outerContainer.outerWidth();
		var oldHeight = this.$outerContainer.outerHeight();
		var newWidth = imageWidth + this.containerPadding.left + this.containerPadding.right + this.imageBorderWidth.left + this.imageBorderWidth.right;
		var newHeight = imageHeight + this.containerPadding.top + this.containerPadding.bottom + this.imageBorderWidth.top + this.imageBorderWidth.bottom;

		function postResize() {
			self.$lightbox.find('.lb-dataContainer').width(newWidth);
			self.$lightbox.find('.lb-prevLink').height(newHeight);
			self.$lightbox.find('.lb-nextLink').height(newHeight);
			self.showImage();
		}

		if (oldWidth !== newWidth || oldHeight !== newHeight) {
			this.$outerContainer.animate({
				width: newWidth,
				height: newHeight
			}, this.options.resizeDuration, 'swing', function () {
				postResize();
			});
		} else {
			postResize();
		}
	};

	// Display the image and its details and begin preload neighboring images.
	Lightbox.prototype.showImage = function () {
		this.$lightbox.find('.lb-loader').stop(true).hide();
		this.$lightbox.find('.lb-image').fadeIn(this.options.imageFadeDuration);

		this.updateNav();
		this.updateDetails();
		this.preloadNeighboringImages();
		this.enableKeyboardNav();
	};

	// Display previous and next navigation if appropriate.
	Lightbox.prototype.updateNav = function () {
		// Check to see if the browser supports touch events. If so, we take the conservative approach
		// and assume that mouse hover events are not supported and always show prev/next navigation
		// arrows in image sets.
		var alwaysShowNav = false;
		try {
			document.createEvent('TouchEvent');
			alwaysShowNav = this.options.alwaysShowNavOnTouchDevices ? true : false;
		} catch (e) {}

		this.$lightbox.find('.lb-nav').show();

		if (this.album.length > 1) {
			if (this.options.wrapAround) {
				if (alwaysShowNav) {
					this.$lightbox.find('.lb-prev, .lb-next').css('opacity', '1');
				}
				this.$lightbox.find('.lb-prev, .lb-next').show();
			} else {
				if (this.currentImageIndex > 0) {
					this.$lightbox.find('.lb-prev').show();
					if (alwaysShowNav) {
						this.$lightbox.find('.lb-prev').css('opacity', '1');
					}
				}
				if (this.currentImageIndex < this.album.length - 1) {
					this.$lightbox.find('.lb-next').show();
					if (alwaysShowNav) {
						this.$lightbox.find('.lb-next').css('opacity', '1');
					}
				}
			}
		}
	};

	// Display caption, image number, and closing button.
	Lightbox.prototype.updateDetails = function () {
		var self = this;

		// Enable anchor clicks in the injected caption html.
		// Thanks Nate Wright for the fix. @https://github.com/NateWr
		if (typeof this.album[this.currentImageIndex].title !== 'undefined' && this.album[this.currentImageIndex].title !== '') {
			var $caption = this.$lightbox.find('.lb-caption');
			if (this.options.sanitizeTitle) {
				$caption.text(this.album[this.currentImageIndex].title);
			} else {
				$caption.html(this.album[this.currentImageIndex].title);
			}
			$caption.fadeIn('fast').find('a').on('click', function (event) {
				if ($(this).attr('target') !== undefined) {
					window.open($(this).attr('href'), $(this).attr('target'));
				} else {
					location.href = $(this).attr('href');
				}
			});
		}

		if (this.album.length > 1 && this.options.showImageNumberLabel) {
			var labelText = this.imageCountLabel(this.currentImageIndex + 1, this.album.length);
			this.$lightbox.find('.lb-number').text(labelText).fadeIn('fast');
		} else {
			this.$lightbox.find('.lb-number').hide();
		}

		this.$outerContainer.removeClass('animating');

		this.$lightbox.find('.lb-dataContainer').fadeIn(this.options.resizeDuration, function () {
			return self.sizeOverlay();
		});
	};

	// Preload previous and next images in set.
	Lightbox.prototype.preloadNeighboringImages = function () {
		if (this.album.length > this.currentImageIndex + 1) {
			var preloadNext = new Image();
			preloadNext.src = this.album[this.currentImageIndex + 1].link;
		}
		if (this.currentImageIndex > 0) {
			var preloadPrev = new Image();
			preloadPrev.src = this.album[this.currentImageIndex - 1].link;
		}
	};

	Lightbox.prototype.enableKeyboardNav = function () {
		$(document).on('keyup.keyboard', $.proxy(this.keyboardAction, this));
	};

	Lightbox.prototype.disableKeyboardNav = function () {
		$(document).off('.keyboard');
	};

	Lightbox.prototype.keyboardAction = function (event) {
		var KEYCODE_ESC = 27;
		var KEYCODE_LEFTARROW = 37;
		var KEYCODE_RIGHTARROW = 39;

		var keycode = event.keyCode;
		var key = String.fromCharCode(keycode).toLowerCase();
		if (keycode === KEYCODE_ESC || key.match(/x|o|c/)) {
			this.end();
		} else if (key === 'p' || keycode === KEYCODE_LEFTARROW) {
			if (this.currentImageIndex !== 0) {
				this.changeImage(this.currentImageIndex - 1);
			} else if (this.options.wrapAround && this.album.length > 1) {
				this.changeImage(this.album.length - 1);
			}
		} else if (key === 'n' || keycode === KEYCODE_RIGHTARROW) {
			if (this.currentImageIndex !== this.album.length - 1) {
				this.changeImage(this.currentImageIndex + 1);
			} else if (this.options.wrapAround && this.album.length > 1) {
				this.changeImage(0);
			}
		}
	};

	// Closing time. :-(
	Lightbox.prototype.end = function () {
		this.disableKeyboardNav();
		$(window).off('resize', this.sizeOverlay);
		this.$lightbox.fadeOut(this.options.fadeDuration);
		this.$overlay.fadeOut(this.options.fadeDuration);
		$('select, object, embed').css({
			visibility: 'visible'
		});
		if (this.options.disableScrolling) {
			$('html').removeClass('lb-disable-scrolling');
		}
	};

	return new Lightbox();
});