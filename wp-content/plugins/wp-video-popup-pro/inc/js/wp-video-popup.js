/**
 * NodeList.forEach polyfill for IE
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
 */
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}

/**
 * Custom Event polyfill for >= IE9
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill
 */
(function() {
    if (typeof window.CustomEvent === "function") return false;

    function CustomEvent(event, params) {
        params = params || {
            bubbles: false,
            cancelable: false,
            detail: null
        };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }

    window.CustomEvent = CustomEvent;
})();

(function($) {
    var config = {
        // General animation speed.
        speed: 250,
        // Loading video needs a request to server. Waiting for it a bit can make the transition looks smoother.
        videoWaitingTime: 400,
        arrow: {
            // Arrow's width.
            size: 40,
            // Arrow's gap to the video.
            gap: 10,
        }
    };

    var state = {
        activeGallery: null,
        activePopup: null
    };

    var popups = document.querySelectorAll('.wp-video-popup-wrapper');
    var galleries = {};

    function init() {
        if (!popups.length) return;
        setupOpenActions();
        setupCloseActions();

        window.addEventListener('resize', function() {
            adjustPopupVideosHeight(state.activePopup);
            adjustGalleryVideosHeight(state.activeGallery)
        });
    }

    function setupOpenActions() {
        // Setup autoplay.
        window.addEventListener('load', function() {
            // Only allow 1 autoplay instance.
            var autoplayAssigned = false;

            popups.forEach(function(popup) {
                if (!popup.dataset.wpVideoPopupAutoplay) return;
                if (autoplayAssigned) return;

                if (popup.dataset.wpVideoPopupGallery) {
                    setupGallery(popup, true);
                } else {
                    openPopup(popup, true);
                }

                autoplayAssigned = true;
            });
        });

        // Setup open triggers.
        popups.forEach(function(popup) {
            var id = popup.dataset.wpVideoPopupId;
            if (id) setupOpenTriggers('.' + id, popup);
        });

        // If there's only single popup.
        if (popups.length === 1) {
            // Setup trigger for single popup.
            setupOpenTriggers('.wp-video-popup');

            // Setup trigger for single popup (backward compatibility support).
            setupOpenTriggers('.ryv-popup');
        }
    }

    function setupOpenTriggers(triggerSelector, popup) {
        var triggers = document.querySelectorAll(triggerSelector);
        if (!triggers.length) return;

        triggers.forEach(function(trigger) {
            trigger.addEventListener('click', function(e) {
                e.preventDefault();

                if (popup) {
                    if (popup.dataset.wpVideoPopupGallery) {
                        openGallery(popup);
                    } else {
                        openPopup(popup);
                    }
                } else {
                    openPopup(popups[0]);
                }

            });
        });
    }

    function setupCloseActions() {
        popups.forEach(function(popup) {
            // Close on click.
            popup.addEventListener('click', function(e) {
                if (e.target == this || e.target.classList.contains('wp-video-popup-close')) {
                    if (!popup.dataset.wpVideoPopupGallery) closePopup(this);
                }
            });
        });

        // Close on escape.
        document.addEventListener('keyup', function(e) {
            if (e.key !== 'Escape' && e.key !== 'Esc' && e.keyCode !== 27) return;

            popups.forEach(function(popup) {
                if ($(popup).is(':visible')) {
                    if (popup.dataset.wpVideoPopupGallery) {
                        closeGallery(popup.dataset.wpVideoPopupGallery);
                    } else {
                        closePopup(popup);
                    }
                }
            });
        });
    }

    function adjustPopupVideosHeight(popup) {
        if (!popup) return;

        var videos = document.querySelectorAll('.wp-video-popup-wrapper .wp-video-popup-video');
        var activeVideo = popup.querySelector('.wp-video-popup-video');

        if (!videos || !activeVideo) return;

        var height = activeVideo.clientWidth * 0.5625;

        videos.forEach(function(video) {
            if (video.classList.contains('is-resizable')) video.style.height = height + 'px';
        });
    }

    function adjustGalleryVideosHeight(gallery) {
        if (!gallery) return;

        var videos = gallery.querySelectorAll('.wp-video-popup-video');
        var activeVideo = gallery.querySelector('.active-slide .wp-video-popup-video');

        if (!videos || !activeVideo) return;

        var leftPos = activeVideo.getBoundingClientRect().left + document.body.scrollLeft;
        var width = activeVideo.clientWidth;
        var height = activeVideo.clientWidth * 0.5625;

        videos.forEach(function(video) {
            if (video.classList.contains('is-resizable')) video.style.height = height + 'px';
        });

        adjustArrowsPosition(gallery, leftPos, width);
    }

    function adjustArrowsPosition(gallery, videoLeftPos, videoWidth) {
        var leftArrow = gallery.querySelector('.wp-video-popup-arrow-left');
        var rightArrow = gallery.querySelector('.wp-video-popup-arrow-right');

        if (leftArrow) leftArrow.style.left = (videoLeftPos - config.arrow.gap - config.arrow.size) + 'px';

        if (rightArrow) {
            rightArrow.style.left = (videoLeftPos + videoWidth + config.arrow.gap) + 'px';
            rightArrow.style.right = 'auto';
        }
    }

    function openPopup(popup, autoOpen) {
        autoOpen = autoOpen || false;

        document.body.insertBefore(popup, document.body.firstChild);

        $(popup).css({
            display: 'flex'
        }).stop().animate({
            opacity: 1
        }, config.speed);

        playVideo(popup.querySelector('.wp-video-popup-video'), autoOpen);
        state.activePopup = popup;

        // Adjust video's height when it starts showing up.
        setTimeout(function() {
            adjustPopupVideosHeight(popup);
        }, config.videoWaitingTime);
    }

    function closePopup(popup) {
        $(popup).stop().animate({
            opacity: 0
        }, config.speed, function() {
            popup.style.display = 'none';
        });

        stopVideo(popup.querySelector('.wp-video-popup-video'));
        state.activePopup = null;
    }

    function setupGallery(popup, autoOpen) {
        var galleryName = popup.dataset.wpVideoPopupGallery;
        var wrappers = document.querySelectorAll('[data-wp-video-popup-gallery="' + galleryName + '"]');
        if (!wrappers.length) return;
        autoOpen = autoOpen || false;

        // Don't setup the gallery if it only contains 1 popup.
        if (wrappers.length <= 1) {
            openPopup(wrappers[0], autoOpen);
            return;
        }

        var gallery = document.createElement('div');
        gallery.className = 'wp-video-popup-gallery wp-video-popup-gallery-' + galleryName;
        gallery.dataset.wpVideoPopupGalleryName = galleryName;

        var slides = document.createElement('div');
        slides.className = 'wp-video-popup-slides';

        var closeButton = document.createElement('div');
        closeButton.className = 'wp-video-popup-close';

        var leftArrow = document.createElement('img');
        leftArrow.className = 'wp-video-popup-arrow wp-video-popup-arrow-left prev-slide';
        leftArrow.src = wpVideoPopupOpts.pluginUrl + 'inc/img/wp-video-popup-left.png';
        leftArrow.alt = 'left arrow';

        var rightArrow = document.createElement('img');
        rightArrow.className = 'wp-video-popup-arrow wp-video-popup-arrow-right next-slide';
        rightArrow.src = wpVideoPopupOpts.pluginUrl + 'inc/img/wp-video-popup-right.png';
        rightArrow.alt = 'right arrow';

        wrappers.forEach(function(wrapper, i) {
            wrapper.dataset.wpVideoPopupSlide = i;
            wrapper.className = 'wp-video-popup-slide slide-' + i;

            if (i === 0) wrapper.classList.add('first-slide');
            if (i === wrappers.length - 1) wrapper.classList.add('last-slide');

            slides.appendChild(wrapper);
        });

        gallery.appendChild(leftArrow);
        gallery.appendChild(slides);
        gallery.appendChild(rightArrow);
        gallery.appendChild(closeButton);
        document.body.insertBefore(gallery, document.body.firstChild);

        leftArrow.addEventListener('click', onArrowClick);
        rightArrow.addEventListener('click', onArrowClick);

        gallery.addEventListener('click', function(e) {
            if (e.target.classList.contains('wp-video-popup-slide') || e.target.classList.contains('wp-video-popup-close')) {
                closeGallery(galleryName);
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight' && e.keyCode !== 37 && e.keyCode !== 39) return;
            if (!state.activeGallery) return;

            var direction = e.key === 'ArrowLeft' || e.keyCode === 37 ? 'prev' : 'next';

            if (direction === 'prev') {
                gotoPrevSlide(state.activeGallery);
            } else {
                gotoNextSlide(state.activeGallery);
            }
        });

        galleries[galleryName] = {
            total: wrappers.length,
            el: gallery
        };

        openGallery(popup, autoOpen);
    }

    function onArrowClick(e) {
        var direction = this.classList.contains('next-slide') ? 'next' : 'prev';

        if (direction === 'prev') {
            gotoPrevSlide(this.parentNode);
        } else {
            gotoNextSlide(this.parentNode);
        }
    }

    function gotoPrevSlide(gallery) {
        var currentIndex = parseInt(gallery.dataset.wpVideoPopupCurrentIndex, 10);
        var slides = gallery.querySelectorAll('.wp-video-popup-slide');

        if (currentIndex === 0) {
            return;
        }

        stopVideo(slides[currentIndex].querySelector('.wp-video-popup-video'));
        setAsCurrentSlide(slides[currentIndex - 1]);
        playVideo(slides[currentIndex - 1].querySelector('.wp-video-popup-video'));
    }

    function gotoNextSlide(gallery) {
        var currentIndex = parseInt(gallery.dataset.wpVideoPopupCurrentIndex, 10);
        var slides = gallery.querySelectorAll('.wp-video-popup-slide');

        if (currentIndex === slides.length - 1) {
            return;
        }

        stopVideo(slides[currentIndex].querySelector('.wp-video-popup-video'));
        setAsCurrentSlide(slides[currentIndex + 1]);
        playVideo(slides[currentIndex + 1].querySelector('.wp-video-popup-video'));
    }

    function setAsCurrentSlide(targetSlide) {
        var galleryName = targetSlide.dataset.wpVideoPopupGallery;
        var gallery = galleries[galleryName].el;
        if (!gallery) return;
        var slides = gallery.querySelectorAll('.wp-video-popup-slide');
        var currentIndex = 0;

        if (slides.length) {
            slides.forEach(function(slide, i) {
                gallery.classList.remove('showing-slide-' + i);

                if (slide != targetSlide) {
                    slide.classList.remove('active-slide');
                } else {
                    slide.classList.add('active-slide');
                    currentIndex = i;
                }
            });
        }

        gallery.dataset.wpVideoPopupCurrentIndex = currentIndex;
        gallery.dataset.wpVideoPopupCurrentSlide = 'slide-' + currentIndex;

        gallery.classList.add('showing-slide-' + currentIndex);
        gallery.classList.remove('showing-last-slide');
        gallery.classList.remove('showing-first-slide');

        if (currentIndex === 0) {
            gallery.classList.add('showing-first-slide');
        } else if (currentIndex === slides.length - 1) {
            gallery.classList.add('showing-last-slide');
        }
    }

    function openGallery(popup, autoOpen) {
        autoOpen = autoOpen || false;
        var galleryName = popup.dataset.wpVideoPopupGallery;
        if (!galleryName) return;

        if (!galleries[galleryName]) {
            setupGallery(popup, autoOpen);
            return;
        }

        setAsCurrentSlide(popup);

        var gallery = document.querySelector('.wp-video-popup-gallery-' + galleryName);

        $(gallery).css({
            display: 'flex'
        }).stop().animate({
            opacity: 1
        }, config.speed);

        playVideo(gallery.querySelector('.active-slide .wp-video-popup-video'));
        gallery.classList.add('is-opened');
        state.activeGallery = gallery;

        // Adjust video's height when it starts showing up.
        setTimeout(function() {
            adjustGalleryVideosHeight(gallery);
        }, config.videoWaitingTime);
    }

    function closeGallery(galleryName) {
        var gallery = document.querySelector('.wp-video-popup-gallery-' + galleryName);
        var videos = gallery.querySelectorAll('.wp-video-popup-video');

        $(gallery).stop().animate({
            opacity: 0
        }, config.speed, function() {
            gallery.style.display = 'none';
        });

        if (videos.length) {
            videos.forEach(function(video) {
                stopVideo(video);
            });
        }

        gallery.classList.remove('is-opened');
        state.activeGallery = null;
    }

    function playVideo(video, autoOpen) {
        if (!video) return;

        video.src = video.dataset.wpVideoPopupUrl;

        if (video.classList.contains('is-self-hosted')) {
            if (autoOpen) video.muted = true;
            video.load();
            video.play();
        }

        // The delay is to wait the video to load, so that the fadeIn looks smoother.
        $(video).stop().delay(config.videoWaitingTime).fadeIn(config.speed);
    }

    function stopVideo(video) {
        if (!video) return;
        if (video.classList.contains('is-self-hosted')) video.pause();

        $(video).stop().fadeOut(config.speed, function() {
            video.src = '';
        });
    }

    init();
})(jQuery);