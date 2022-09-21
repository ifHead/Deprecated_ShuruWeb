import Typed from "./typed.js";

const auto = new Typed('.auto-text', {
  strings: [' ', '20XX년...', '번쩍이는 전깃불 속에서', '우리들의 토끼 히어로', '\"슈룽이\"가 태어났습니다.'],
  loop: false,
  backSpeed: 1,
  IPColor: 'white'
});

// Initialize Typing Effect
auto.start();