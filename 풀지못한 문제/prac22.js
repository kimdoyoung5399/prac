// nums = [1, 2, 3, 4]; //1
nums = [1, 2, 7, 6, 4]; //	4

function solution(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        if (check(sum)) count += 1;
      }
    }
  }
  return count;
}
function check(sum) {
  for (let i = 2; i <= Math.sqrt(sum); i++) {
    if (sum % i === 0) {
      return false;
    }
  }
  return sum >= 2;
}

console.log(solution(nums));

// console.log(nums.length);
