// n	return
// 12345	[5,4,3,2,1]
// n = 12345;
// function solution(n) {
//   let s = n.toString().split("").reverse().join("");

//   let result = [];
//   for (let i = 0; i < s.length; i++) {
//     result.push(parseInt(s[i]));
//   }
//   return result;
// }

// console.log(solution(n));
n = 12345;
function solution(n) {
  return (n + "")
    .split("")
    .reverse()
    .map((v) => parseInt(v));
}

console.log(solution(n));
