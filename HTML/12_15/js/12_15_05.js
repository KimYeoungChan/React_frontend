let init = () => {
  return function(a,b) {
    return a - b > 0 ? a - b : b - a; // a-b > 0 크면 a - b 하고 a-b > 0 작으면 b - a값을 출력
  }
}// 함수에서 다른 함수 반환하기

console.log(`init() : ${init()(10,20)}`) 