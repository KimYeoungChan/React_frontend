const title = document.querySelector("#title");

title.onclick = () => {
  title.classList.add("clicked");
}
// 웹 요소에 접근하기
// 웹 문서에서 원하는 요소를 찾아가는 것을 "접근한다(access)"고 함
// querySelector(), querySelectorAll () 함수
// querySelector(선택자)
// querySelectorAll(선택자)
// 선택자
// id 이름 앞에는 해시 기호(#), class 이름 앞에는 마침표(.), 태그는 기호 없이 태그명 사용
// 반환 값
// querySelector() 메소드는 한개의 값만 반환
// querySelectorAll() 메소드는 반환 값이 여러 개일 때 모두 변환 -> 노드 리스트로 저장됨