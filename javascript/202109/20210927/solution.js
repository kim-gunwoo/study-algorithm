function solution(participant, completion) {
  var answer = "";
  participant.sort();
  completion.sort();
  for (var i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
  return answer;
}

function solution(participant, completion) {
  const answer = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];

    answer.set(a, (answer.get(a) || 0) + 1);
    answer.set(b, (answer.get(b) || 0) - 1);
  }

  for (let [k, v] of answer) {
    console.log(k, v);
    if (v > 0) return k;
  }

  return answer;
}

solution(
  ["marina", "josipa", "nikola", "vinko", "filipa"],
  ["josipa", "filipa", "marina", "nikola"]
);

solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);
