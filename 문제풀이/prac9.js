// n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요
// 118372	873211
n = 11837;
function solution(n) {
  let a = (n + "")
    .split("")
    .map((v) => v)
    .sort((a, b) => b - a)
    .join("");
  return parseInt(a);
}
console.log(solution(n));
