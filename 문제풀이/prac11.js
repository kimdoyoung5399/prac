// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수,
// solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요.
// 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.
// 가장 작은수 찾고 그값을 arr에서 찾아 빼고 나머지 값을 리턴... 만약 배열이 한개면 [-1] 추출..
// a 와 b를 비교해서 작은값을 찾아서 변수에 할당하고
// 진행할수록 작은값을 찾음.. 그래서 그값을 찾으면 마지막에 버림

let arr = [11, 3, 5, 7];
// console.log(arr.splice());
function solution(arr) {
  let arr1 = Math.min(...arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr.length === 1) {
      arr = [-1];
      break;
    } else if (arr[i] === arr1) {
      arr.splice(i, 1);
      break;
    }
  }
  return arr;
}
console.log(solution(arr));
