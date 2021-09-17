/*
nums는 숫자로 이루어진 배열입니다. 가장 자주 등장한 숫자를 k 개수만큼 return해주세요.

```js
nums = [1,1,1,2,2,3],
k = 2

return [1,2]

nums = [1]
k = 1

return [1]
```
*/
function topK(nums, k) {
  let count = new Map();

  nums.forEach((num) => {
    count.has(num) ? count.set(num, count.get(num) + 1) : count.set(num, 1);
  });

  let arr = Array.from(count.keys());

  arr.sort((key1, key2) => {
    console.log(count.get(key1), count.get(key2));
    if (count.get(key1) > count.get(key2)) {
      return -1;
    }
  });

  arr.length = k;
  return arr.sort();
}

topK([1, 1, 1, 2, 2, 2, 2, 3], 2); // [1,2]

// topK([1],1) // [1]
