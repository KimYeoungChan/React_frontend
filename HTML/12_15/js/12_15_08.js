// greeting 함수를 선언한 후 콜백 함수 사용
// function greeting() {
// console.log('안녕하세요?')  
// }

// setInterval(greeting,2000);

// 직접 함수를 선언하면서 실행
setInterval(() => {
  console.log("안녕하세요?")
},2000);
// 시간을 고려하는 타이머 함수
// 일정한 시간마다 반복하기 setInterval(콕백함수,시간) 1000ms 1초에 해당이 됩니다
// 반복실행 멈추기 clearInterval(timer)
// setInterval()함수로 시작한 타이머를 종료하는 함수입니다