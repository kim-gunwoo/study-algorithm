function solution(s) {
  var answer = 0;

  s = s.replace(/zero/g, "0");
  s = s.replace(/one/g, "1");
  s = s.replace(/two/g, "2");
  s = s.replace(/three/g, "3");
  s = s.replace(/four/g, "4");
  s = s.replace(/five/g, "5");
  s = s.replace(/six/g, "6");
  s = s.replace(/seven/g, "7");
  s = s.replace(/eight/g, "8");
  s = s.replace(/nine/g, "9");

  answer = Number(s);
  return answer;
}

function solution(s) {
  var answer = 0;
  const number = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  for (let [key, value] of Object.entries(number)) {
    const reg = new RegExp(`${key}`, "g");
    s = s.replace(reg, value);
  }

  answer = Number(s);

  return answer;
}

solution("2three45sixseven");
