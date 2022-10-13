// left	right	result
// 13	17	43
// 24	27	52

left = 1;
right = 2;
// function solution(left, right) {
//   let result = [];
//   if (left === 1) {
//     return 1;
//   }
//   for (let i = left; i <= right; i++) {
//     for (let j = 1; j <= i; j++) {
//       if (i % j === 0) {
//         result.push(j);
//       }
//     }
//   }
//   let result1 = [];
//   for (let i = left; i <= right; i++) {
//     if (result.indexOf(i - 1) === -1) {
//       result1.push(i);
//     } else if ((result.indexOf(i) - result.indexOf(i - 1)) % 2 === 0) {
//       result1.push(i);
//     } else {
//       result1.push(i * -1);
//     }
//   }
//   return result1.reduce((prev, cur) => prev + cur);
// }
// console.log(solution(left, right));

function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
