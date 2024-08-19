// commons js
// nav >  gnb복제
// 복제대상을 변수에 저장
// m_nav_wrap 위 변수 붙여넣기

const gnb = document.querySelector('nav .gnb') //복사할 내용
const mNav = document.querySelector('.m_nav_wrap') //복사한 내용 붙여넣는곳
const gnbClone = gnb.cloneNode(true)
//복제대상.cloneNode() //괄호안 true 자식, 자속 추가복제
console.log(gnb, mNav, gnbClone)
mNav.appendChild(gnbClone)
//복사한거 붙여놓을 위치 마지막에 복제한 내용을 복사할거라는 뜻

//main-nav
//sub,sub_bg 숨기기
$('nav .sub').hide()
$('nav .sub_bg').hide()

//nav 마우스 오버 시 sub 보이기
$('nav').on('mouseover',function(){
    $('nav .sub').stop(true).slideDown(300)
    $('nav .sub_bg').stop(true).slideDown(300)
    //$('nav .sub').show()
    //$('nav .sub_bg').show()
})
$('nav').on('mouseout',function(){
    $('nav .sub').stop(true).slideUp(300)
    $('nav .sub_bg').stop(true).slideUp(300)
})

// mobile menu
$('.m_nav_wrap').hide();
//모바일 메뉴의 현재상태를 알기위한 논리형 데이터생성
var m_nav_state = true;


//전체메뉴 아이콘 클릭 시
/* $('.m_nav').on('click',function(){
    m_nav_state = !m_nav_state
    console.log(`현재 상태는 : ${m_nav_state}`)
    if(m_nav_state == false) {
        $('.m_nav_wrap').show();
        m_nav_state = true //상태변경
    }else{
        $('.m_nav_wrap').hide();
        //m_nav_state = false
    }
}) */
//(모바일메뉴가 숨겨진 상태라면) 보이기
//(모바일메뉴가 보이는 상태라면) 보이기
