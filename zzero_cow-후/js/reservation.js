// window.addEventListener('load', () => {
//     let portfolioContainer = select('.portfolio-container');
//     if (portfolioContainer) {
//       let portfolioIsotope = new Isotope(portfolioContainer, {
//         itemSelector: '.portfolio-item',
//         layoutMode: 'fitRows'
//       });

//       let portfolioFilters = select('#portfolio-flters li', true);

//       on('click', '#portfolio-flters li', function(e) {
//         e.preventDefault();
//         portfolioFilters.forEach(function(el) {
//           el.classList.remove('filter-active');
//         });
//         this.classList.add('filter-active');

//         portfolioIsotope.arrange({
//           filter: this.getAttribute('data-filter')
//         });
//         portfolioIsotope.on('arrangeComplete', function() {
//           AOS.refresh()
//         });
//       }, true);
//     }

//   });


// 로그인 모달

function loginOpen() {

    var modalPop = $('.modal-login');
    var modalBg = $('.modal-bg'); 
  
    $(modalPop).show();
    $(modalBg).show();
  
}

function signupOpen() {

  var modalPop = $('.modal-signup');
  var modalBg = $('.modal-bg'); 

  $(modalPop).show();
  $(modalBg).show();
}

function popClose() {
    var loginPop = $('.modal-login');
    var signupPop = $('.modal-signup'); 
    var modalBg = $('.modal-bg'); 
  
    $(loginPop).hide();
    $(modalBg).hide();
    $(signupPop).hide();
}


// 회원가입 모달

// function popOpen() {

//     var modalPop = $('.modal-signup');
//     var modalBg = $('.modal-bg'); 
  
//     $(modalPop).show();
//     $(modalBg).show();
  
//   }

// page number start

// 페이지 버튼 클릭 시 이벤트 처리
const pageButtons = document.querySelectorAll('.page-btn');
pageButtons.forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault(); // 링크 이동 방지
    const clickedButton = event.target;
    if (clickedButton.getAttribute('aria-pressed') !== 'true') {
      // 이전 선택된 버튼 상태 변경
      const previousButton = document.querySelector('.page-btn[aria-pressed="true"]');
      previousButton.setAttribute('aria-pressed', 'false');
      // 현재 선택된 버튼 상태 변경
      clickedButton.setAttribute('aria-pressed', 'true');
      // 페이지 이동 처리
      // ...
    }
  });
});

// 이전/다음 버튼 클릭 시 이벤트 처리
const prevButton = document.querySelector('.btn_prev');
const nextButton = document.querySelector('.btn-next');
prevButton.addEventListener('click', function(event) {
  event.preventDefault(); // 링크 이동 방지
  if (!prevButton.getAttribute('aria-disabled')) {
    // 이전 페이지로 이동 처리
    // ...
  }
});
nextButton.addEventListener('click', function(event) {
  event.preventDefault(); // 링크 이동 방지
  if (!nextButton.getAttribute('aria-disabled')) {
    // 다음 페이지로 이동 처리
    // ...
  }
});
// page number end






// 지역모션 코드
  $(document).ready(function(){
    $("#portfolio-flters li").click(function(){
      var selected = $(this).attr('data-filter');
      $("#recommend_box").fadeTo(100, 0.1);
      $("#recommend_box .item").not("."+selected).fadeOut().removeClass('scale-anm');
      setTimeout(function() {
        $("."+selected).fadeIn().addClass('scale-anm');
        $("#recommend_box").fadeTo(300, 1);
      }, 300);
    });
  });


  // main content 임시코드


// 이미지슬라이드
$(".imgSlide > a:gt(0)").hide();

setInterval(function(){
  $('.imgSlide a:first-child').fadeOut()
  .next('a').fadeIn()
  .end().appendTo('.imgSlide');
}, 3000);
