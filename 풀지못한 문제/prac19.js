// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

let answers = [1, 2, 3, 4, 5]; //	[1]
// [1,3,2,4,2]	[1,2,3]

function solution(answers) {
  const answer = [];
  const firstPattern = [1, 2, 3, 4, 5];
  const firstPLength = firstPattern.length;
  const secondPattern = [2, 1, 2, 3, 2, 4, 2, 5];
  const secondPLength = secondPattern.length;
  const thirdPattern = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const thirdLength = thirdPattern.length;
  let correctCount = [0, 0, 0];

  for (let i = 0, len = answers.length; i < len; i++) {
    if (answers[i] === firstPattern[i % firstPLength]) correctCount[0] += 1;
    if (answers[i] === secondPattern[i % secondPLength]) correctCount[1] += 1;
    if (answers[i] === thirdPattern[i % thirdLength]) correctCount[2] += 1;
  }

  const maxScore = Math.max(...correctCount);
  for (let i = 0; i < 3; i++) {
    if (correctCount[i] === maxScore) answer.push(i + 1);
  }

  return answer;
}

function solution(answers) {
  var answer = [];
  var a1 = [1, 2, 3, 4, 5];
  var a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  var a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
  var a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
  var a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
  var max = Math.max(a1c, a2c, a3c);

  if (a1c === max) {
    answer.push(1);
  }
  if (a2c === max) {
    answer.push(2);
  }
  if (a3c === max) {
    answer.push(3);
  }

  return answer;
}
