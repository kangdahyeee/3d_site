/* circle 변수저장 , article 변수저장
각 요소에 반복문 실행
article에 마우스 올라가면 애니메이션 중지
벗어나면 다시 실행 */

let circle = document.querySelector("#circle");
let article = circle.querySelectorAll("article");

// of 는 자바스크립트에서 사용되는 반복문 (유사 객체를 반복하여 가져옴)
// el - 아티클 요소에 진입했을때 이벤트 실행 리스너 정의
for(let el of article){
    el.addEventListener("mouseenter", e => {

        // e - 이벤트를 의미. 실행됨
        // .animationPlayState = "paused"; - 일시중지
        // paused 중지 <-> running 재생
        circle.style.animationPlayState = "paused";
    });
    el.addEventListener("mouseleave", e => {

        circle.style.animationPlayState = "running";
    });
}