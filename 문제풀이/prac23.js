let s = "one4seveneightone"; //1478
// // "23four5six7"	234567
// // "2three45sixseven"	234567
// // "123"	123

function solution(s) {
  return Number(
    s
      .replaceAll("zero", 0)
      .replaceAll("one", 1)
      .replaceAll("two", 2)
      .replaceAll("three", 3)
      .replaceAll("four", 4)
      .replaceAll("five", 5)
      .replaceAll("six", 6)
      .replaceAll("seven", 7)
      .replaceAll("eight", 8)
      .replaceAll("nine", 9)
  );
}
// s.replaceAll("zero", 0)
//   .replaceAll("one", 1)
//   .replaceAll("two", 2)
//   .replaceAll("three", 3)
//   .replaceAll("four", 4)
//   .replaceAll("five", 5)
//   .replaceAll("six", 6)
//   .replaceAll("seven", 7)
//   .replaceAll("eight", 8)
//   .replaceAll("nine", 9);
console.log(solution(s));

function solution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}
