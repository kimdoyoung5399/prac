n = 3;
m = 12; //[3, 12]
// 2	5	[1, 10]
function solution(n, m) {
  function isPrime(x) {
    let result = [];
    for (let i = 1; i <= x; i++) {
      if (x % i === 0) {
        result.push(i);
      }
    }
    return result;
  }
  let n1 = isPrime(n);
  let m1 = isPrime(m);

  return [
    n1.filter((v) => m1.includes(v)).pop(),
    (n * m) / n1.filter((v) => m1.includes(v)).pop(),
  ];
}
//배열의 교집합 n1.filter((v) => m1.includes(v))
console.log(solution(n, m));
