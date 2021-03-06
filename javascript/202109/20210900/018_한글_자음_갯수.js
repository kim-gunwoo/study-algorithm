/*
## 주어진 문자의 자음별 개수를 구해주세요.

input: "사과1호랑이,고니 수박BT닭"

output: 

> ㄱ:2
ㄴ:1
ㄷ:1
ㄹ:1
ㅁ:0
ㅂ:1
ㅅ:2
ㅇ:1
ㅈ:0
ㅊ:0
ㅋ:0
ㅌ:0
ㅍ:0
ㅎ:1
*/

function solution(text) {
  const j = [
    "ㄱ",
    "ㄲ",
    "ㄴ",
    "ㄷ",
    "ㄸ",
    "ㄹ",
    "ㅁ",
    "ㅂ",
    "ㅃ",
    "ㅅ",
    "ㅆ",
    "ㅇ",
    "ㅈ",
    "ㅉ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
  ];
  const m = [
    "ㅏ",
    "ㅐ",
    "ㅑ",
    "ㅒ",
    "ㅓ",
    "ㅔ",
    "ㅕ",
    "ㅖ",
    "ㅗ",
    "ㅘ",
    "ㅙ",
    "ㅚ",
    "ㅛ",
    "ㅜ",
    "ㅝ",
    "ㅞ",
    "ㅟ",
    "ㅠ",
    "ㅡ",
    "ㅢ",
    "ㅣ",
  ];
  const b = [
    "",
    "ㄱ",
    "ㄲ",
    "ㄳ",
    "ㄴ",
    "ㄵ",
    "ㄶ",
    "ㄷ",
    "ㄹ",
    "ㄺ",
    "ㄻ",
    "ㄼ",
    "ㄽ",
    "ㄾ",
    "ㄿ",
    "ㅀ",
    "ㅁ",
    "ㅂ",
    "ㅄ",
    "ㅅ",
    "ㅆ",
    "ㅇ",
    "ㅈ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
  ];
  const han_code = { start: 44032, end: 55176 };

  const textArr = text
    .split("")
    .filter(
      (t) => t.charCodeAt() >= han_code.start && t.charCodeAt() <= han_code.end
    );

  const result = j.reduce((acc, cur) => {
    acc[cur] = 0;
    return acc;
  }, {});

  textArr.forEach((txt) => {
    const txtCode = txt.charCodeAt() - han_code.start;

    let jIdx = parseInt(txtCode / 588);
    let mIdx = parseInt((txtCode - jIdx * 588) / 28);
    let bIdx = parseInt(txtCode % 28);

    const 초성 = j[jIdx];
    const 중성 = m[mIdx];
    const 종성 = b[bIdx];

    result[초성] += 1;
  });

  return result;
}

solution("사과1호랑이,고니 수박BT닭");

const text = "사과1호랑이,고니 수박BT닭";

const countConsonants = (text) => {
  const CONSONANTS = {
    ㄱ: 0,
    ㄲ: 0,
    ㄴ: 0,
    ㄷ: 0,
    ㄸ: 0,
    ㄹ: 0,
    ㅁ: 0,
    ㅂ: 0,
    ㅃ: 0,
    ㅅ: 0,
    ㅆ: 0,
    ㅇ: 0,
    ㅈ: 0,
    ㅉ: 0,
    ㅊ: 0,
    ㅋ: 0,
    ㅌ: 0,
    ㅍ: 0,
    ㅎ: 0,
  };
  const GA_UNICODE = 44032;
  const CONS_STEP = 588;

  for (let i = 0; i < text.length; i++) {
    const uni = text[i].charCodeAt(0) - GA_UNICODE;
    const consonantsIndex = parseInt(uni / CONS_STEP);
    const consonants = Object.keys(CONSONANTS)[consonantsIndex];

    if (consonants) CONSONANTS[consonants]++;
  }

  return CONSONANTS;
};

countConsonants(text);
