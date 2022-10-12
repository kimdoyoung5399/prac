// s	return
// "Zbcdefg"	"gfedcbZ"
s = "Zbcdabdefg";
function solution(s) {
  let a = s.split("");
  let s_uppercase = [];
  let s_lowercase = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] === a[i].toUpperCase()) {
      s_uppercase.push(a[i]);
    } else if (a[i] === a[i].toLowerCase()) {
      s_lowercase.push(a[i]);
    }
  }
  let c = s_uppercase.sort().reverse();
  let d = s_lowercase.sort().reverse();
  return d.concat(c).join("");
}

console.log(solution(s));

//대문자가 앞으로 옴

function solution(s) {
  return s.split("").sort().reverse().join("");
}
