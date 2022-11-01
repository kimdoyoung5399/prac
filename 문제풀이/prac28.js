// d	budget	result
d = [1, 3, 2, 5, 4];
budget = 9; //3
// d = [2, 2, 3, 3];
// budget = 10; //4

function solution(d, budget) {
  let counter = 0;
  let sum = 0;
  let num = d.sort((a, b) => a - b);
  for (let i = 0; i < num.length; i++) {
    if (num[i] + sum <= budget) {
      sum += num[i];
      counter += 1;
    }
  }
  return counter;
}

console.log(solution(d, budget));
