const bttn = document.querySelector("button"); // 버튼 요소 가져옴

// function display() {
//   alert("클릭했습니다.");
// }

// bttn.addEventListener("click",display); // 버튼 클릭하면 display 함수 실행

// 화살표 함수로 가능
bttn.addEventListener("click", () => {
  alert("클릭했습니다.");
}); // 버튼 클릭하면 display 함수 실행