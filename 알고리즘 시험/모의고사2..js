// // 문자열 s는 한 개 이상의 단어로 구성되어 있습니다.
// // 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
// // 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수,
// // solution을 완성하세요.

// // 공백을 포함하지 않고, 문자열 전체의 짝/홀수 인덱스를 판단해야합니다.
// // 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.
// let s = "hang hae ninety nine"; //20
// // HaNg HaE nInEtY nInE

// // 인덱스로 진행하되 공백문자가 나타나면 카운트하지말고 넘어가야함
// function solution(s) {
//   result = [];
//   let a = s.split("");
//   console.log(a);
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] === a.includes(" ")) {
//     } else if (i % 2 === 0) {
//       result.push(a[i].toUpperCase());
//     }
//   }
//   return result.join("");
// }
// console.log(solution(s));

// function solution(s) {
//   let splitS = s.split("");
//   console.log(splitS);
//   let answer = "";
//   let reduced = 0;
//   for (let i = 0; i < splitS.length; i++) {
//     if (splitS[i] === " ") {
//       answer += " ";
//       reduced += 1;
//     } else {
//       if ((i - reduced) % 2 === 0) {
//         answer += splitS[i].toUpperCase();
//       } else {
//         answer += splitS[i];
//       }
//     }
//   }

//   return answer;
// }

// let s = "hang hae ninety nine";
// console.log(solution(s));
