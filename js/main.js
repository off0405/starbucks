// 검색 영역(.search) 클릭 시 강제 포커스 및 제어
// 검색 영역 찾기
const searchEl = document.querySelector('.search');
// const searchInputEl = document.querySelector('.search input'); // 문서 전체에서 찾지 말고 아래와 같이 최적화
const searchInputEl = searchEl.querySelector('input');

// 검색 영역을 클릭하면 input 요소를 포커스하도록 실행
searchEl.addEventListener('click', function () {
  searchInputEl.focus(); // 포커스 강제 적용
});

// input 요소에 포커스되면 실행
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색'); // HTML 속성을 추가하는 메소드
});

// input 요소에 포커스가 해제(블러)되면 실행
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', ''); // HTML 속성을 추가하는 메소드
});

// 스크롤 시 전역배지(고정배너) 숨기기
// 페이지 스크롤에 따른 요소 제어
const badgeEl = document.querySelector('header .badges')

// 페이지에 스크롤 이벤트를 추가하기
// window: 브라우저 창 객체
window.addEventListener('scroll', function () {
  
  if (window.scrollY > 500) {
    // badgeEl.style.display = 'none';

    // gsap 적용
    // gsap.to(요소, 지속시간, 옵션: {}) 메소드: css속성을 통해 애니메이션 처리
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    });

  }
});

  
// window.addEventListener('scroll', function () {
   // (Y축으로 얼마나 스크롤 했는지)페이지 스크롤 위치
// });

//Quiz :
//페이지 스크롤 위치가 500px을 넘으면 배지 요소를 숨기고, 
//페이지 스크롤 위치가 500px을 넘지 않으면 배지 요소를 보이기




// 순차적으로 visual 섹션 내 요소 보이기
// 나타날 요소(.fade-in)들을 찾기

const fadeEls = document.querySelectorAll('.visual .fade-in');
console.log(fadeEls);
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    opacity: 1, 
    delay: (index + 1) * 0.7
  });
});


//요소들을 하나씩 반복해서 처리
// gsap.to(요소, 지속시간, 옵션: {}) 메소드: css속성을 통해 애니메이션 처리
// delay : 몇 초 뒤에 실행될 것인가?
// delay: (index + 1) * 0.7 = 0.7s, 1.4s, 2.1s, 2.8s