size = [
  [80, 40],
  [60, 50],
  [30, 70],
  [60, 30],
];
size1 = [
  [10, 7],
  [12, 3],
  [8, 15],
  [14, 7],
  [5, 15],
];

const solution = (size) => {
  // 가로 길이와 세로 길이를 담을 배열 w, h
  let w = [];
  let h = [];
  // 이차원 배열의 큰 값과 작은 값을 구분해서 큰 값은 w, 작은 값은 h에 넣어줍니다.
  size.map((v, i) => {
    console.log([...v]);
    w[i] = Math.max(...v);
    h[i] = Math.min(...v);
  });
  // w 와 h 에서 서로 가장 큰 값을 곱하면 끝
  return Math.max(...w) * Math.max(...h);
};
console.log(solution(size));

// 가로 세로 인데 가장 큰값으로 기준 잡음

// function solution(sizes) {
//   var answer = 0;
//   return answer;
// }
// function solution(size) {
//   let w = [];
//   let h = [];
//   size.map((v, i) => {
//     console.log((w[i] = [...v]));
//   });
//   return w;
// }
// console.log(solution(size));

// function solution(sizes) {
//   const rotated = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);

//   let maxSize = [0, 0];
//   rotated.forEach(([w, h]) => {
//       if (w > maxSize[0]) maxSize[0] = w;
//       if (h > maxSize[1]) maxSize[1] = h;
//   })
//   return maxSize[0]*maxSize[1];
// }
