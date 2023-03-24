        anime({
            targets: 'header',
            translateY: [
                {value: 320, duration: 1, delay:0, easing: 'easeOutExpo' }, //началльные положения
                {value: 0, duration: 300, delay:2000, easing: 'easeInOutQuad' },
            ],
            opacity: [
                {value: 1, duration: 1, delay:0, easing: 'easeOutExpo' },  //началльные положения
            ],
        });
        anime({
            targets: '.text-1',
            translateX: [
                {value: -400, duration: 1, delay:0, easing: 'easeOutExpo' }, //началльные положения
                {value: 0, duration: 400, delay:1200, easing: 'easeInOutQuad' },
            ],
        });
        anime({
            targets: '.box1',
            translateX: [
                {value: 100, duration: 1, delay:0, easing: 'easeOutExpo' }, //началльные положения
                {value: 0, duration: 400, delay:1100, easing: 'easeInOutQuad' },
            ],
            width: [
                {value: 120, duration: 1, delay:0, easing: 'easeOutExpo' }, //началльные положения
                {value: 296.45, duration: 400, delay:1100, easing: 'easeInOutQuad' },
            ],
        });
        anime({
            targets: '.text-2',
            translateY: [
                {value: 400, duration: 1, delay:0, easing: 'easeOutExpo' }, //началльные положения
                {value: 0, duration: 400, delay:1200, easing: 'easeInOutQuad' },
            ],
        });
        anime({
            targets: '.box2',
            translateX: [
                {value: 100, duration: 1, delay:0, easing: 'easeOutExpo' }, //началльные положения
                {value: 0, duration: 400, delay:1100, easing: 'easeInOutQuad' },
            ],
        });
        anime({
            targets: '.logo',
            scale: [
                {value: 1.4, duration: 500, delay:500, easing: 'easeInOutQuad' },
                {value: 1, duration: 500, delay:1000, easing: 'easeInOutQuad' },
            ],
        });
        anime({
            targets: 'nav',
            opacity: [
                {value: 1, duration: 500, delay:2100, easing: 'easeInOutQuad' },
            ],
        });
        anime({
            targets: 'main',
            opacity: [
                {value: 1, duration: 500, delay:2100, easing: 'easeInOutQuad' },
            ],
        });
        anime({
            targets: 'footer',
            opacity: [
                {value: 1, duration: 500, delay:2100, easing: 'easeInOutQuad' },
            ],
        });