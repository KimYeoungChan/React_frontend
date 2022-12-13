 // 랜덤 함수
 function randoom(number) {
  return Math.floor(Math.random() * number);
}

function bgChange () {
  // rgb (a,b,c,d)
  const rndCol = 'rgb(' + randoom(255) + ',' + randoom(255) + ',' + randoom(255) + ')'; //rndCol 변수는 rgb (a,b,c,d)이다.
  document.body.style.backgroundColor = rndCol; // 뷰포트 body style 중에서 bgcolor 색상을 적용 시킨다.
}
bgChange ();