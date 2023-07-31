// 변수지정
var sliderWrapper = document.getElementsByClassName('slidebox'),
    sliderContainer = document.getElementsByClassName('slides'),
    slides = document.getElementsByClassName('slide'),
    slideCount = slides.length,  // 슬라이드의 개수
currentIndex = 0,                // 지금 내가 보고 있는 슬라이드의 순서
topHeight =0,                   // 슬라이드의 높이
navPrev = document.getElementById('left-button') // 아이디 prev 지정
navNext = document.getElementById('right-button');  // 아이디 next지정
// 슬라이드의 높이 확인하여 부모의 높이를 지정하기
// calculateTallestSlide = () => {
// for(var i=0; i<slideCount; i++){
//     if(slides[i].offsetHeight > topHeight){
//     topHeight = slides[i].offsetHeight;
//     }
// }
    // sliderWrapper[0].style.height = topHeight;
    // sliderContainer[0].style.height = topHeight;
// }

// calculateTallestSlide();

// 슬라이드가 있으면 가로로 배열하기

for(var i = 0; i< slideCount; i++){
    slides[i].style.left = i*100+'%';
}

// 슬라이드 이동 함수
goToSlide = (idx) => {
    sliderContainer[0].style.left= idx * -100 + '%';
    sliderContainer[0].classList.add('animated');
    currentIndex = idx;
    // updateNav();
}
//  처음일때
// updateNav = () => {
//     if(currentIndex =0){
//         navPrev.classList.add('disabled');
//     }else{
//         navPrev.classList.remove('disabled');
//     }
// 마지막일대
// if(currentIndex = slideCount-1){
//         navPrev.classList.add('disabled');
//     }else{
//         navPrev.classList.remove('disabled');
//      }
// }
// 버튼 기능 업데이트 함수

// 버튼을 클릭하면 슬라이드 이동시키기
navPrev.addEventListener('click', e => {
e.preventDefault();
// 기본 기능을 없앤다.
    if(currentIndex >0) {
  goToSlide(currentIndex-1);
    }else{
            goToSlide(slideCount-1);
        }
})
navNext.addEventListener('click', e => {
e.preventDefault();
if(currentIndex<slideCount-1){
    goToSlide(currentIndex+1);
}else{
    goToSlide(0);

}
})



//  작은 화면일때 목록 아이콘 관련 버튼



// 반응형 웹일때 메뉴 버튼 관련된것
const toggleBtn = document.querySelector('.menu-button');
const menu = document.querySelector('.list')
const up = document.querySelector('.up')
const down = document.querySelector('.down')

toggleBtn.addEventListener('click', ( ) => {
 menu.classList.toggle('active');
 up.classList.toggle('active');
 down.classList.toggle('active');
});

