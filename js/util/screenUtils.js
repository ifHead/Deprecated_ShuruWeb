function setScreenSize() {
    //먼저 뷰포트 높이를 얻고 1%를 곱하여 vh 단위 값을 얻습니다.
    let vh = window.innerHeight * 0.01;
    //그런 다음 --vh 사용자 정의 속성의 값을 문서의 루트로 설정합니다.
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setScreenSize();
window.addEventListener('resize', setScreenSize);


function disableScroll() {
    // console.log(modal_state);
    sidebar_bool = $("#menuicon").is(":checked");
    if (sidebar_bool || modal_state || isHang /*|| loading*/ ) {
        $('html, body').css({
            overflow: 'hidden',
            height: 'auto'
        });
    } else {
        $('html, body').css(
            'overflow-x', 'hidden'
        ).css('overflow-y', 'auto');
    }
}

function scrollgo(e) {
    if (!isTextExist) {
        if (scrollValue > 8600) {
            modal_state = true;
            window.scrollTo({
                left: 0,
                top: 8080
            });
        }
    }
}




$("html, body").addClass("not_scroll"); // 스크롤 불가능 (position fixed 이용)
