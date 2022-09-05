console.clear();

// set initial states


gsap.set("#guy", {
    scaleX: 0.15
});

var wh = window.innerHeight,
    speed = 20,
    scrollDist = wh * speed,
    scrollEnd = wh * (speed - 1),
    route = document.getElementById('route'),
    routeWidth = route.getBoundingClientRect().width;
console.log(routeWidth);

gsap.set('#scrollDist', {
    width: '100%',
    height: scrollDist
})
gsap.set('#container', {
    position: 'fixed',
    width: routeWidth,
    left: 200,
    top: 0,
    autoAlpha: 1
})


//tween the svg path + cyclist + wheels 
gsap.timeline({
        defaults: {
            duration: 1,
            ease: 'none'
        },
        scrollTrigger: {
            trigger: '#scrollDist',
            start: 'top top',
            end: '+=' + scrollEnd,
            scrub: 0.3,
            onUpdate: (self) => {
                gsap.set('#container', {
                    x: -routeWidth * (self.progress)
                });

                gsap.set('.rad', {
                    rotation: () => self.direction === 1 ? 360 * 30 * (self.progress) : -360 * 30 * (self.progress),
                    transformOrigin: 'center',
                    overwrite: 'auto'
                })

                gsap.to("#guy", {
                    scaleX: () => self.direction === 1 ? 0.15 : -0.15,
                    overwrite: 'auto',
                    duration: 0.2
                });

                console.log(self.progress) //  info for position
            },

        }
    })
    .to('#guy', {
        motionPath: {
            path: "#path",
            align: "#path",
            alignOrigin: [0.5, 1],
            autoRotate: true,
            start: 0.1
        }
    })
    .to('#tree04', {
        rotation: 20,
        transformOrigin: 'center bottom',
        duration: 0.01,
        repeat: 1,
        yoyo: true
    }, 0.665)
    .to('#tree05', {
        rotation: -20,
        transformOrigin: 'center bottom',
        duration: 0.01,
        repeat: 1,
        yoyo: true
    }, 0.665)

window.onresize = () => {
    gsap.set('#container', {
        left: 200
    });
    routeWidth = route.getBoundingClientRect().width;
    ScrollTrigger.refresh()
}
