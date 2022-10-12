s = " try hello     wor    ld df j dkf dfasfdas faef ef "; //"TrY HeLlO WoRlD"
// 짝수는 알파벳 대문자 홀수는 알파벳 소문자 리턴
// 공백포함됨
s.split(" ");
function solution(s) {
  let result = [];
  let a = s.split("");
  result.push(a[0].toUpperCase());
  for (let i = 1; i < a.length; i++) {
    if (i % 2 === 0) {
      result.push(a[i].toUpperCase());
    } else {
      result.push(a[i].toLowerCase());
    }
  }
  return result.join("");
}

function solution(s) {
  return s
    .split(" ")
    .map((word) =>
      [...word]
        .map((char, idx) =>
          idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
        )
        .join("")
    )
    .join(" ");
}

// console.log(solution(s));
