function showData(name, age) { // userName, userAge를 인수로 넘김니다.
  alert(`안녕하세요? ${name}님. 나이가${age}살이군요`)
}

function getData(callback){ //콜백함수를 인수로 넘김니다.
  let userName = prompt("이름을 입력하세요.");
  let userAge = prompt("나이를 입력하세요.");
  callback(userName, userAge);
}// showData(userName,userAge)

getData(showData);