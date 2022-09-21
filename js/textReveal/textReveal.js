import Textify from "node_modules/textify.js/src/index.js";

const anim_a = new Textify({
    selector: ".textifyA",
    once: false,
    scale: 0,
    rotation: 20,
    easing: "back",
    fade: true,
    duration: 1000
})

document.getElementById("btns").addEventListener("click", () => {
    anim_a.show();
    console.log("asd;f!!!!");
})


const anim_b = new Textify({
    selector: ".textifyB",
    once: false,
    top: true,
    scale: 0,
    rotation: -10,
    easing: "elasticInOut",
    fade: true,
    duration: 1000
})

const anim_c = new Textify({
    selector: ".textifyC",
    once: false,
    top: true,
    rotation: -10,
    easing: "bounceInOut",
    fade: true,
    duration: 1000
})