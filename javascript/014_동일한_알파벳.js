/*
# 문제

다음과 같이 input이 주어졌을 때,같은 알파벳으로 이루어진 단어끼리 묶어주세요.

```
Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
```

output에서 순서는 상관없습니다.
*/

const groupAnagrams = (strs) => {
  const obj = {};

  for (let str of strs) {
    const key = [...str].sort().join("");

    if (!obj[key]) {
      obj[key] = [];
    }
    obj[key].push(str);
  }

  return Object.values(obj);
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
