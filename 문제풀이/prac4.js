let participant = ["mislav", "stanko", "mislav", "ana"];
let completion = ["stanko", "ana", "mislav"];
// c = "leo";
// 		"vinko"
// ["mislav", "stanko", "mislav", "ana"]
// 중복있고
//participant	참가자 completion 완주자
// let d = [];
// let c = a.filter((v) => (b.includes(v) ? d.push("") : d.push(v)));

function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}
