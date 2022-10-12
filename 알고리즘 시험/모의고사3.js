// 배열 arr와 정수 n이 주어집니다.
// 배열 arr의 각 원소는 문자열로 이루어져 있습니다.
// 이때, 배열 arr에서 중복되는 단어는 전부 제거하려고 합니다.
// 단, 제거된 후 남은 단어들을 반환할 때는 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다.
// 예를 들어 strings가 ["brush", "sun", "brush", "bed", "car"]이고
// n이 1이면 중복을 제거한 배열인 ["sun", "bed", "car"]에서
// 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.
let arr = ["coke", "water", "glass", "dog", "dog", "yogurt", "vitamin"];
let n = 2;

function solution(arr, n) {
  let arr1 = [];
  arr.forEach((element) => {
    if (!arr1.includes(element)) {
      arr1.push(element);
    }
  });
  arr1;
}
console.log(solution(arr, n));
