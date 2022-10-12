let strings = ["sun", "bed", "car"]; //1 	["car", "bed", "sun"]
// let strings = ["abce", "abcd", "cdx"]; //	2	["abcd", "abce", "cdx"]

function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] > b[n]) {
      return 1;
    } else if (a[n] < b[n]) {
      return -1;
    } else if (a[n] === b[n]) {
      if (a < b) {
        return -1;
      } else {
        return 1;
      }
    }
  });
}

console.log(solution(strings, 1));
