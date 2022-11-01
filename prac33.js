// N	stages	result
// 5	[2, 1, 2, 6, 2, 4, 3, 3]	[3,4,2,1,5]
// 4	[4,4,4,4,4]	[4,1,2,3]
let N = 5;
let stages = [2, 1, 2, 6, 2, 4, 3, 3];

// let N = 4;
// let stages = [4, 4, 4, 4, 4];
// 1번 스테이지에는 총 8명의 사용자가 도전했으며,
// 이 중 1명의 사용자가 아직 클리어하지 못했다.
// 따라서 1번 스테이지의 실패율은 다음과 같다.
//그 스테이지 중에서 낮은값
// 1 번 스테이지 실패율 : 1/8
// 2 번 스테이지에는 총 7명의 사용자가 도전했으며,
// 이 중 3명의 사용자가 아직 클리어하지 못했다.
// 따라서 2번 스테이지의 실패율은 다음과 같다.

// 2 번 스테이지 실패율 : 3/7
// 마찬가지로 나머지 스테이지의 실패율은 다음과 같다.

// 3번 스테이지 실패율 : 2/4
// 4번 스테이지 실패율 : 1/2
// 5번 스테이지 실패율 : 0/1
function solution(N, stages) {
  let result = [];
  for (let i = 1; i <= N; i++) {
    if (stages.includes(i)) {
      result[i - 1] = [
        i,
        (parseInt(stages.filter((v) => v >= i).length) -
          parseInt(stages.filter((v) => v > i).length)) /
          parseInt(stages.filter((v) => v >= i).length),
      ];
    } else {
      result[i - 1] = [i, 0];
    }
  }

  return result.sort((a, b) => b[1] - a[1]).map((v) => v[0]);
}
console.log(solution(N, stages));
