// $("html, body").addClass("not_scroll");
// window.scrollTo(0, 0)

//로딩 끝나면 아래
// $("html, body").removeClass("not_scroll");

// var ve = document.getElementById("loadingVid"); // 비디오 엔드 이벤트를 감지하기 위함

// window.onload = function () { // 모든 것이 실제로 로딩완료되면,
//     setTimeout(function () {
//         if (ve != null && ve.addEventListener) { // 그리고 비디오가 끝나면 아래 실행
//             // 로딩소망나무 영상보다 로딩이 빨리 끝나는 것을 방지
//             ve.addEventListener('ended', function () {
//                 setTimeout(function () {
//                     window.scrollTo({ //뷰를 확실하게 한 번 더 맨 위로
//                         top: 0
//                     });
//                     loading = true;
//                     //로딩 관련 페이드아웃
//                     $('#loadingicon').delay(5900 / 7).fadeOut(800);
//                     $('#loadingwhite').delay(9300 / 7).fadeOut(1500);
//                     $('#loadingtext').delay(4500 / 7).fadeOut(500);
//                     $('#loadingVid').delay(6400 / 7).fadeOut(300);
//                     $('#browser1').delay(3500 / 7).fadeOut(800);
//                     $('#browser2').delay(3900 / 7).fadeOut(800);
//                     $('#browser3').delay(4300 / 7).fadeOut(800);
//                     $('#browser4').delay(4700 / 7).fadeOut(800);
//                     $('#browser5').delay(5100 / 7).fadeOut(800);
//                     $('#a').delay(3300 / 7).fadeOut(500);
//                 });
//                 // $("html, body").removeClass("not_scroll"); // 스크롤 가능 (position fixed 삭제)
//                 // '스크롤 가능'은 p5.js로 코드를 옮겼음. #loadingWhite의 알파값이 0이 되면 실행되도록 이벤트 캐치.
//             }, false);
//         }
//     }, 100);
// }