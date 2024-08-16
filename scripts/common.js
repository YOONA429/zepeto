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