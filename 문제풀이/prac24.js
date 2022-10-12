// str	n	result
s = "a B z";
n = 4;
// "bc"
// "z"	1	"a"
// "a B z"	4	"e F d"

function solution(s, n) {
  let str = s.split("");

  let str_low = [
    "a", //0
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u", //20 + 3
    "v",
    "w",
    "x",
    "y",
    "z", //25
  ];

  let str_upper = str_low.join("").toUpperCase().split("");
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      result.push(" ");
    } else if (str_low.includes(str[i])) {
      if (str_low.indexOf(str[i]) + n > 25) {
        result.push(
          str[i].replace(str[i], str_low[str_low.indexOf(str[i]) + n - 26])
        );
      } else {
        result.push(
          str[i].replace(str[i], str_low[str_low.indexOf(str[i]) + n])
        );
      }
    } else if (str_upper.includes(str[i])) {
      if (str_upper.indexOf(str[i]) + n > 25) {
        result.push(
          str[i].replace(str[i], str_upper[str_upper.indexOf(str[i]) + n - 26])
        );
      } else {
        result.push(
          str[i].replace(str[i], str_upper[str_upper.indexOf(str[i]) + n])
        );
      }
    }
  }
  return result.join("");
}

console.log(solution(s, n));
