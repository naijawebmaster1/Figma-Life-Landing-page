
        $('#owl-carousel').owlCarousel({
            loop: true,
            margin: 80,
            autoplay: true,
            autoplayTimeout: 5000,
            dots: true,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 3
                }
            }
        })

        $('#owl-carousel-2').owlCarousel({
            loop: true,
            margin: 80,
            autoplay: true,
            autoplayTimeout: 2500,
            dots: true,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 3
                }
            }

        })

        $('#advertise-owl-carousel').owlCarousel({
            loop: true,
            margin: 80,
            autoplay: true,
            autoplayTimeout: 2000,
            dots: true,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 5
                }
            }
        })



        console.clear();


        const elements = document.querySelectorAll('[data-action="parallax"]');

        // Detect support for IntersectionObserver
        if (!('IntersectionObserver' in window)) {
            let ticking = false;

            window.addEventListener('scroll', function () {
                if (!ticking) {
                    requestAnimationFrame(function () {
                        // reset the tick so we can capture the next onScroll
                        ticking = false;
                        elements.forEach(element => {
                            if (element.getBoundingClientRect().top < window.innerHeight && element.getBoundingClientRect().top + element.getBoundingClientRect().height > 0) {
                                scrollParallax(element);
                            }
                        });
                    });
                }
                ticking = true;
            }, false);
        } else {
            let observer = new IntersectionObserver(onIntersection, {
                rootMargin: '0px 0px',
                threshold: [0.0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2, 0.21, 0.22, 0.23, 0.24, 0.25, 0.26, 0.27, 0.28, 0.29, 0.3, 0.31, 0.32, 0.33, 0.34, 0.35, 0.36, 0.37, 0.38, 0.39, 0.4, 0.41, 0.42, 0.43, 0.44, 0.45, 0.46, 0.47, 0.48, 0.49, 0.5, 0.51, 0.52, 0.53, 0.54, 0.55, 0.56, 0.57, 0.58, 0.59, 0.6, 0.61, 0.62, 0.63, 0.64, 0.65, 0.66, 0.67, 0.68, 0.69, 0.7, 0.71, 0.72, 0.73, 0.74, 0.75, 0.76, 0.77, 0.78, 0.79, 0.8, 0.81, 0.82, 0.83, 0.84, 0.85, 0.86, 0.87, 0.88, 0.89, 0.9, 0.91, 0.92, 0.93, 0.94, 0.95, 0.96, 0.97, 0.98, 0.99, 1.0]
            });

            // observe each element
            elements.forEach(element => {
                observer.observe(element);
            });
        }

        function scrollParallax(event) {
            const element = (event.target || event);
            const distanceValue = element.getAttribute('data-parallax-distance').match(/\d+/g);
            const distanceUnit = element.getAttribute('data-parallax-distance').match(/\D+/g);
            const direction = element.getAttribute('data-parallax-direction');
            const ratio = Math.abs(Math.abs(element.getBoundingClientRect().top / element.getBoundingClientRect().height * 100) - 100) / 100;
            let distance = 0;

            if (element.getBoundingClientRect().top > 0) {
                if (direction === 'follow') {
                    // move down when scroll down
                    distance = (ratio * distanceValue) - distanceValue;
                } else {
                    // move up when scroll down
                    distance = Math.abs((ratio * distanceValue) - distanceValue);
                }
            } else {
                if (direction === 'follow') {
                    // move down when scroll down
                    distance = Math.abs((ratio * distanceValue) - distanceValue);
                } else {
                    // move up when scroll down
                    distance = (ratio * distanceValue) - distanceValue;
                }
            }

            if (element.querySelector('.background-text') !== null) {
                element.querySelector('.background-text').style.transform = 'translateY(' + -(distance) + distanceUnit + ')';
            }
            if (element.querySelector('.shadow') !== null) {
                element.querySelector('.shadow').style.transform = 'translateY(' + (distance * 1.2) + distanceUnit + ')';
            }
            if (element.querySelector('.image') !== null) {
                element.querySelector('.image').style.transform = 'translateY(' + distance + distanceUnit + ')';
            }
            if (element.querySelector('.alt .image img') !== null) {
                element.querySelector('.alt .image img').style.transform = 'translateY(' + -(distance) + distanceUnit + ')';
            }
        }

        function observerParallax(event) {
            const element = event.target;
            const distanceValue = element.getAttribute('data-parallax-distance').match(/\d+/g);
            const distanceUnit = element.getAttribute('data-parallax-distance').match(/\D+/g);
            const direction = element.getAttribute('data-parallax-direction');
            const ratio = event.intersectionRatio;
            let distance = 0;

            if (event.boundingClientRect.top > 0) {
                // first half of the element
                if (direction === 'follow') {
                    // move down when scroll down
                    distance = (ratio * distanceValue) - distanceValue;
                } else {
                    // move up when scroll down
                    distance = Math.abs((ratio * distanceValue) - distanceValue);
                }
            } else {
                // second half of the element
                if (direction === 'follow') {
                    // move down when scroll down
                    distance = Math.abs((ratio * distanceValue) - distanceValue);
                } else {
                    // move up when scroll down
                    distance = (ratio * distanceValue) - distanceValue;
                }
            }

            if (element.querySelector('.background-text') !== null) {
                element.querySelector('.background-text').style.transform = 'translateY(' + -(distance) + distanceUnit + ')';
            }
            if (element.querySelector('.shadow') !== null) {
                element.querySelector('.shadow').style.transform = 'translateY(' + (distance * 1.2) + distanceUnit + ')';
            }
            if (element.querySelector('.image') !== null) {
                element.querySelector('.image').style.transform = 'translateY(' + distance + distanceUnit + ')';
            }
            if (element.querySelector('.alt .image img') !== null) {
                element.querySelector('.alt .image img').style.transform = 'translateY(' + -(distance) + distanceUnit + ')';;
            }
        }

        /**
         * On intersection
         * @param {array} entries 
         */
        function onIntersection(elements) {
            // Loop through the elements
            elements.forEach(element => {
                observerParallax(element);
            });
        }



