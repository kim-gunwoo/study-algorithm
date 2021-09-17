/*
s는 여러 괄호들로 이루어진 String 인자입니다. s가 유효한 표현인지 아닌지 true/false로 반환해주세요.

종류는 '(', ')', '[', ']', '{', '}' 으로 총 6개 있습니다. 아래의 경우 유효합니다. 한 번 괄호를 시작했으면, 같은 괄호로 끝내야 한다. 괄호 순서가 맞아야 한다.

예를 들어 아래와 같습니다.

s = "()"
return true
 
s = "()[]{}"
return true
 
s = "(]"
return false
 
s = "([)]"
return false
 
s = "{[]}"
return true
s = "()"
return true

*/

function isValid(s) {
  const inOutObj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const strArr = s.split("");
  let outputArr = [];

  return s.length % 2 === 1
    ? false
    : strArr.every((str) => {
        console.log(outputArr);
        if (inOutObj[str]) {
          outputArr.push(inOutObj[str]);
          return true;
        } else {
          if (outputArr.pop() === str) {
            return true;
          }
        }
        return false;
      });
}

// isValid("()"); // true
// isValid(")()"); // true
// isValid("()[]{}"); // true
// isValid("(]"); // false
// isValid("([)]"); // false
// isValid("{[]}"); // true
