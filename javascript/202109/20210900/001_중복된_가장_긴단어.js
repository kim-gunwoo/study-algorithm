// String 형인 str 인자에서 중복되지 않은 알파벳으로 이루어진 제일 긴 단어의 길이를 반환해주세요.

// str: 텍스트 return: 중복되지 않은 알파벳 길이 (숫자 반환)

// 예를 들어, str = "abcabcabc" return 은 3 => 'abc' 가 제일 길기 때문

// str = "aaaaa" return 은 1 => 'a' 가 제일 길기 때문

// str = "sttrg" return 은 3 => 'trg' 가 제일 길기 때문
{
  const getLengthOfStr = (str) => {
    let strArrLength = new Array();
    let checkArr = new Array();
    let strArr = str.split("");
    let returnValue = 0;

    for (let s of strArr) {
      if (checkArr.includes(s)) {
        strArrLength.push(checkArr.length);
        checkArr = new Array();
        continue;
      }
      checkArr.push(s);
    }

    strArrLength.push(checkArr.length);
    strArr.reverse();
    checkArr = new Array();

    for (let s of strArr) {
      if (checkArr.includes(s)) {
        strArrLength.push(checkArr.length);
        checkArr = new Array();
        continue;
      }
      checkArr.push(s);
    }

    for (let v of strArrLength) {
      if (returnValue < v) {
        returnValue = v;
      }
    }
    console.log(Math.max(...strArrLength));
    console.log(returnValue);
    return returnValue;
  };

  getLengthOfStr("abcabcabc"); // 3
  getLengthOfStr("aaaaa"); // 1
  getLengthOfStr("abcddddjklmnopddf"); //8
  getLengthOfStr("sttrg"); //3
  getLengthOfStr("abcdefghcijklmnop"); //14
  getLengthOfStr("abcdefghijklmnop"); //16
}

// String 형인 str 인자에서 중복되지 않은 알파벳으로 이루어진 제일 긴 단어의 길이를 반환해주세요.

// str: 텍스트 return: 중복되지 않은 알파벳 길이 (숫자 반환)

// 예를 들어, str = "abcabcabc" return 은 3 => 'abc' 가 제일 길기 때문

// str = "aaaaa" return 은 1 => 'a' 가 제일 길기 때문

// str = "sttrg" return 은 3 => 'trg' 가 제일 길기 때문
{
  const getLengthOfStr = (str) => {
    let lengthArr = [];
    let checkStr = "";

    for (let i in str) {
      if (checkStr.includes(str[i])) {
        checkStr = checkStr.slice(checkStr.indexOf(str[i]) + 1);
      }
      console.log(checkStr);
      checkStr += str[i];
      lengthArr.push(checkStr.length);
    }
    return Math.max(...lengthArr);
  };

  getLengthOfStr("abcabcabc"); // 3
  getLengthOfStr("aaaaa"); // 1
  getLengthOfStr("abcddddjklmnopddf"); //8
  getLengthOfStr("sttrg"); //3
  getLengthOfStr("abcdefghcijklmnop"); //14
  getLengthOfStr("abcdefghijklmnop"); //16
}
