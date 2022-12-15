function calcSum(n) {
  let sum = 0;
  for(let i = 0; i <= n; i++){
    sum += i; // sum = sum + i
  }
  return sum;
}
// 함수의 실행결과를 받아 또 다시 처리해야 할 경우가 많다
// 함수의 실행결과를 함수의 실행시점에 넘겨줘야만 한다 함수값을 반환한라고 정의한다.
let num = parseInt(prompt("몇까지 더할까요?"));
console.log(`1부터 ${num}까지 더하면 ${calcSum(num)}입니다.`);
