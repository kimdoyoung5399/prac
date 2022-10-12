// [1, 3, 5, 9, 2, 4, 8, 0]; result 13
// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다.
// numbers에서 찾을 수 없는 숫자는 두개입니다.
// 두 정수를 a,b라고 했을 때, a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

let arr = [1, 3, 5, 9, 2, 4, 8, 0];

function solution(arr) {
  result = [];
  for (let i = 0; i <= 9; i++) {
    if (!arr.includes(i)) {
      result.push(i);
    }
  }
  result.sort((a, b) => a - b);
  let sum = 0;
  for (let i = result[0]; i <= result[1]; i++) {
    sum += i;
  }
  return sum;
}

console.log(solution(arr));
