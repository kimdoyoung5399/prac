//자연수 각자리 숫자를 뒤집은 순서로 더해 출력하는 수식을 리턴해주세요

function solution(n) {
  let a = n.toString().split("").reverse();

  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += parseInt(a[i]);
  }

  return `${a.join("+")}=${sum}`;
}

console.log(solution(718253));
