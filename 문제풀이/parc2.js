let s = "97 75 88 99 95 92 73";

function solution(s) {
  num = s.split(" "); //string
  let decimal = [];
  let notdecimal = [];

  function isPrime(num) {
    if (num <= 1) {
      // 음수와 1은 소수가 아니다
      return false;
    }
    // 2는 짝수 중 유일한 소수이다
    if (num % 2 === 0) {
      return num === 2 ? true : false;
    }
    // 이제 num이 홀수 일때 다른 수에 나눠지는지 판별한다
    // Math.sqrt(num) 즉, √num까지 나눠 떨어지는지 검사한다
    const sqrt = parseInt(Math.sqrt(num));
    for (let divider = 3; divider <= sqrt; divider += 2) {
      if (num % divider === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 0; i < num.length; i++) {
    isPrime(num[i]) ? decimal.push(num[i]) : notdecimal.push(num[i]);
  }

  return `"${decimal.sort((a, b) => a - b).pop()} ${notdecimal
    .sort((a, b) => a - b)
    .shift()}"`;
}
console.log(solution(s));
