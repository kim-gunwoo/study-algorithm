/*
숫자인 num을 인자로 넘겨주면, 뒤집은 모양이 num과 똑같은지 여부를 반환해주세요.

num: 숫자 return: true or false (뒤집은 모양이 num와 똑같은지 여부)

예를 들어, num = 123 return false => 뒤집은 모양이 321 이기 때문

num = 1221 return true => 뒤집은 모양이 1221 이기 때문

num = -121 return false => 뒤집은 모양이 121- 이기 때문

num = 10 return false => 뒤집은 모양이 01 이기 때문
*/

const sameReverse = (num) => {
  console.log(num);
  let numReverse = parseFloat(num.toString().split("").reverse().join(""));

  if (num === numReverse) {
    return true;
  }
  return false;
};

sameReverse(-121);

/*
strs은 단어가 담긴 배열입니다. 공통된 시작 단어(prefix)를 반환해주세요.

예를 들어 strs = ['start', 'stair', 'step'] return은 'st'

strs = ['start', 'wework', 'today'] return은 ''
*/

const getPrefix = (strs) => {
  let prefix = "";
  let prefixCheckStr = "";

  for (let i in strs) {
    prefix = "";
    if (i == 0) {
      prefixCheckStr = strs[i];
    }
    for (let j in strs[i]) {
      let loopStr = strs[i][j];
      if (prefixCheckStr.includes(loopStr)) {
        prefix += loopStr;
      }
    }
    prefixCheckStr = prefix;
  }

  return prefix;
};

const getPrefix2 = (strs) => {
  return strs.length === 0
    ? ""
    : strs.reduce((str1, str2, idx) => {
        let str1Arr = str1.split("");
        let str2Arr = str2.split("");
        let prefix = "";

        for (let i = 0; i < str1.length; i++) {
          if (str1Arr[i] === str2Arr[i]) {
            prefix += str1Arr[i];
          }
        }

        return prefix;
      });
};

let strs = ["start", "stair", "step"];
getPrefix(strs);

strs = ["start", "wework", "today"];
getPrefix(strs);
