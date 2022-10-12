// a = 9 + 9 + 9 + 9 + 7 + 9 + 8;
// b = 23 + 23 + 30 + 28 + 30 + 23 + 23;

//29

let arr1 = [9, 9, 9, 9, 7, 9, 8];
let arr2 = [23, 23, 30, 28, 30, 23, 23];

function solution(arr1, arr2) {
  let sum = 0;
  let arrSub = arr2.map((v, i) => (v >= 29 ? 21 - arr1[i] : v - arr1[i]));
  arrSub.forEach((el) => (sum += el));
  // for (let i = 0; i < arrSub.length; i++) {
  //   sum += arrSub[i];
  // }
  return sum;
}
console.log(solution(arr1, arr2));
