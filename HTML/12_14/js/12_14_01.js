// 객체에서 사용할 수 있는 반복문.
// for…in문은 반복해서 객체의 키를 가져온다.
// 각 키의 값을 알고 싶다면 가져온 키를 사용해서 객체에 접근한다.
// 배열도 객체이기 때문에 배열에서도 for..in 문을 사용할 수 있다.

const gitBook = {
  title : "깃&깃허브 입문",
  pubDate : "2019-12-16",
  pages : 272,
  finished : true
}

for(key in gitBook) {
  document.write(`${key} <br />`)
}

for(key in gitBook) {
  document.write(`${gitBook[key]}<br />`)
}

// for..of문 사용해서 반복 가능 객체 값 가져오기
// 문자열이나 배열처럼 그 안의 값이 순서대로 나열되어 잇는 객체를 이터러블(iteralbe) 객체라고 함.
// 이터러블 객체에서는 for...of 문을 사용할 수 있다..

for ( 변수 of 객체 ){
  const students = ["Park", "Kim", "Lee", "Kang"];
  // students에 있는 student가 있는 동안 계속 반복
  for (let student of students ) {
    document.write(`${student}. `)
  }
}