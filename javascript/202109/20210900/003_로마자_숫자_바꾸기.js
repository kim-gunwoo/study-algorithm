/*
로마자에서 숫자로 바꾸기

1~3999 사이의 로마자 s를 인자로 주면 그에 해당하는 숫자를 반환해주세요. 로마 숫자를 숫자로 표기하면 다음과 같습니다.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
로마자를 숫자로 읽는 방법은 로마자를 왼쪽부터 차례대로 더하면 됩니다. III = 3 XII = 12 XXVII = 27 입니다.

그런데 4를 표현할 때는 IIII가 아니라 IV 입니다. 뒤의 숫자에서 앞의 숫자를 빼주면 됩니다. 9는 IX입니다.

I는 V와 X앞에 와서 4, 9 X는 L, C앞에 와서 40, 90 C는 D, M앞에 와서 400, 900
*/

const symbol = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const symbolm = {
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
};

function romanToNum(s) {
  // 여기에 코드를 작성해주세요.
  let number = 0;
  let roman = s.split("").map((str) => symbol[str]);

  for (let i = 0; i < roman.length; i++) {
    let num1 = roman[i];
    let num2 = roman[i + 1] ? roman[i + 1] : 0;

    if (num1 < num2) {
      number -= num1;
    } else {
      number += num1;
    }
  }

  return number;
}

// romanToNum('III') // 3
// romanToNum('XII') // 12
// romanToNum('XXVII') //  27
romanToNum("IV"); //  4
// romanToNum('IX')  //  9
// romanToNum('CDXCIX'); // 499
