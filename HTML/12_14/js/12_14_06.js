// 화살표 함수 - 매개변수가 있을 때 ------------------------
// let hi = function(user){
//   console.log(`${user}님, 안녕하세요?`);
// }
// hi("홍길동");

let hi = user => {console.log(`${user}님, 안녕하세요?`)};
hi("홍길동");

// let sum = function(a,b) {
//   return a + b;
// }
//   sum(10, 20);

let sum = (a,b) => a + b;
sum(10, 20);