let n = prompt("1보다 큰 숫자를 입력하세요.");
let sum = 0;
if( n !== null && n > 1){ // n이 null 같지 않거나 n이 1보다 크면
  for(let i = 0; i <= n; i++){ //for문으로 i가 n보다 작거나 같으면
    if( i % 2 == 1) { // i의 나머지 값이 1(홀수)이면
      continue; // 벗어나지 않도록 반복 수행
    }
    sum += i; // sum = sum + i
    document.write(`${i} ----- ${sum} <br>`);
  }
}