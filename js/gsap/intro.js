const tl = gsap.timeline({
        paused: true,
        defaults: {
            duration: 1
        }
    })
    .to("#divtest", {
        opacity: 100
    })
    .to("#divtest", {
        opacity: 0
    })
    .set("#divtest", {
        backgroundColor: "black",
        innerText: "End the test."
    })
    // .to("#divtest", {
    //     opacity: 1
    // }, "+=1");

function doFade() {
    tl.restart();
}

doFade();
