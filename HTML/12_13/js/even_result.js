let userNumber = prompt("숫자를 입력하세요");

if ( userNumber !== null ) {
  userNumber = parseInt(userNumber); // null이 아니라면 정수로 변환
  (userNumber % 2 === 0) ? alert (`${userNumber} : 짝수`) : alert (`${userNumber} : 홀수`) //userNumber이 2로 나누었을 경우 0이면 짝수 아니면 홀수로 술력
}
// === !== 연산자는 값뿐만 아니라 데이터 유형까지 비교합니다.

// 함수 선언 & 실행
// 함수를 선언할 때에는 function이라는 예약어를 사용하고
// 함수 이름을 적은 후 중괄호 안에 실행할 여러 명령들을 묶는다.
// 함수를 실행(호출)할 떄는 함 이름 뒤에 중괄호 ()를 붙인다.

// 함수 선언
// function 함수명() {
// 명령(들)
// }

// 함수실행
// 함수명()

// 매개변수 와 인수
// 매개변수와 인수르 동틀어 인자라고 한다
// 매개변수
// 함수를 선언할 때 외부에서 값을 받는 변수
// 함수 이름 옆의 괄 안에 매개변수 이름을 넣어준다.
// 매개변수에 이름을 붙이는 방법은 일반적인 변수 이름을 붙이는 방법과 같다.
// 매개변수는 선언된 함수에서만 사용된다.
// 함수에 여러 개의 매개변수가 필요할 때에는 매개변수 사이에 쉼표(,)를 찍으면서 나열한다

// 인수
// 매개변수가 있는 함수를 실행할 때 매개변수로 값을 넘겨주는 변수

