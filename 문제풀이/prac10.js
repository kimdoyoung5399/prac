// Math.pow(n , x) n을 x만큼 제곱
n = 12;
function solution(n) {
  let a = Math.pow(n, 0.5);
  return a % 1 === 0 ? Math.pow(a + 1, 2) : -1;
}

console.log(solution(n));

function nextSqaure(n) {
  var result = 0;
  var x = 0;
  while (x * x < n) {
    x++;
  }
  if (x * x == n) {
    x++;
    result = x * x;
  } else {
    result = "no";
  }

  return result;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + nextSqaure(121));
