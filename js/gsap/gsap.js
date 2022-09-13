gsap.registerPlugin(ScrollTrigger);

gsap.to(".f", {
    scrollTrigger: {
        trigger: ".f",
        start: "-=100",
        end: "+=150",
        toggleActions: "restart play reverse reset"
    },
    x: 400,
    rotation: 360,
    duration: 3
});