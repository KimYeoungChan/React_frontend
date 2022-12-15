const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

for(let i = 0; i < arr.length; i++) {
  if(arr[i] > 10){
    document.write(`${arr[i]}, `)
  }
}
// i가 배열의 갯수 보다 작으면
// arr[0], arr[1], arr[2] ... 가 10보다 크면 arr[0] 출력