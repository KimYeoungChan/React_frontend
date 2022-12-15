function multiple(a,b = 5, c = 10) {
  return a * b + c;
}

console.log(multiple(5,10,20)); // a = 5, b = 10, c = 20 
console.log(multiple(10,20)); // a = 10, b = 20, c = 10(default) 
console.log(multiple(10)); // a = 10, b = 5(default) , c = 10(default) 

for(let k=0; k<5; k++) {
  for(var i = 0; i < 30; i++) {
    document.write('*');
  }
  document.write('<br />'); // 줄바꿈
}

// 1. 바깥쪽 for문 실행 ( k = 0)
// 2. 안쪽 for문 실행해 30번 반복하고 빠져나온다.
// 3. <br /> 태그를 추가해서 줄을 바꾼다.
// 4. 바깥쪽 for문의 조건식이 false가 될 때까지 반복한다.

// // 배열 생성
// let array = [1,2,3,4,5,6];
// // 요소의 길이 출력
// for (let i= array.length - 1; i >= 0; i-- ) {
//   console.log(array[i]);
// }

// var sum = prompt("슷자를 입력하시오",5);

// var a = 0;
// var sum = 0;
//   while ( a < 5 ) {
//     sum += a; // sum = sum + a / 3 + 3
//     document.write("sum= " + sum);
//     a++ ; // a = a + 1
//     document.write("<br />");
//   }
//   // a = 0 / sum = 0
//   // a = 1 / sum = 1 
//   // a = 2 / sum = 3
//   // a = 3 / sum = 6
//   // a = 4 / sum = 10


