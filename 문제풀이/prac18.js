//[(3, 5)];

// 순위	당첨 내용
// 1	6개 번호가 모두 일치
// 2	5개 번호가 일치
// 3	4개 번호가 일치
// 4	3개 번호가 일치
// 5	2개 번호가 일치
// 6(낙첨)	그 외

// lottos = [44, 1, 0, 0, 31, 25];
// win_nums = [31, 10, 45, 1, 6, 19];

// function solution(lottos, win_nums) {
//   let Max_result = lottos.filter((v) => v === 0).length;
//   let Min_result = [];
//   for (let i = 0; i < win_nums.length; i++) {
//     for (let j = 0; j < win_nums.length; j++) {
//       if (win_nums[j] === lottos[i]) {
//         Min_result.push(lottos[i]);
//       }
//     }
//   }

//   let max = 7 - (Min_result.length + Max_result);
//   let min = 7 - Min_result.length;
//   if (min >= 7 && max >= 7) {
//     [min, max] = [6, 6];
//   } else if (max >= 7) {
//     max = 6;
//   } else if (min >= 7) {
//     min = 6;
//   }

//   return [max, min];
// }

// console.log(solution(lottos, win_nums));

// function solution(lottos, win_nums) {
//   const rank = [6, 6, 5, 4, 3, 2, 1];

//   let minCount = lottos.filter((v) => win_nums.includes(v)).length;
//   let zeroCount = lottos.filter((v) => !v).length;

//   const maxCount = minCount + zeroCount;

//   return [rank[maxCount], rank[minCount]];
// }

lottos = [44, 1, 0, 0, 31, 25];
win_nums = [31, 10, 45, 1, 6, 19];
console.log(lottos.filter((v) => win_nums.includes(v)));
// 로또를 한개씩 뽑아서 그값이 윈넘버에 한개씩 뽑은게 포함되는지 확인..
// 확인되면 필터를 거쳐 배열시키고 배열길이 구함...
// 굿..?
