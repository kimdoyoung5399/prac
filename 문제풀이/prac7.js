function solution(n) {
  // let str = n.toString().split("")
  // let sum = 0;
  return n
    .toString()
    .split("")
    .reduce((prev, acc) => prev + parseInt(acc), 0);
  // for (let i = 0; i < str.length; i++) {
  //   sum += parseInt(str[i]);
  // }
  // return sum;
}
console.log(solution(987));
