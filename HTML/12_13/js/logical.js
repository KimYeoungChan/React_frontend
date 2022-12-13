const num1 = parseInt(prompt("첫 번째 양의 정수 : "));
const num2 = parseInt(prompt("두 번쨰 양의 정수 : "));
let str;

// AND 연산. 둘다 true여야 결과값 true
if ( num1 % 2 === 0 && num2 % 2 === 0) { // === 값과 타입을 둘다 비교
  str = "두 수 모두 짝수입니다.";
} else {
  str = "짝수가 아닌 수가 있습니다.";
}
alert(str);
// // num1 % 2 === 0 -> num1의 나머지가 0
// // num2 % 2 === 0 -> num2의 나머지가 0



// const num3 = parseInt(prompt("3의 배수 : "));
// const num4 = parseInt(prompt("2의배수 : "));
// if ( num3 % 3 === 0 || num4 % 2 === 0 ) {
//   str = "3의 배수 입니다.";
// } else {
//   str = "2의 배수 입니다.";
// }
// document.write(str);