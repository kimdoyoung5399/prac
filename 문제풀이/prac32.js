// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수,
// solution을 만들어 보세요.

// 1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환
n = 10; // [2,3,5,7,11,13,17,19]
// 19를 제곱근 구하면 4.xxx 따라서 2~4로 나눳을때 나머지가 0으로 안떨어지면 소수

function solution(n) {
  let counter = 0;
  for (let i = 2; i <= n; i++) {
    if (i === 2 || i === 3) {
      counter++;
    } else if (i >= 4) {
      let result = [];
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          result.push(j);
          break;
        }
      }
      if (result.length === 0) {
        counter += 1;
      }
      result = [];
    }
  }
  return counter;
}
console.log(solution(n));
