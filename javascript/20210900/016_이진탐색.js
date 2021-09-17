/*
### 이진탐색법(Binary Search)
이진탐색을 배우기 전에 선형탐색(Linear Search)먼저 보겠습니다.

** 선형탐색이나, 이진탐색의 요소는 오름차순이나 내림차순으로 되어 있어야 적용할 수 있는 알고리즘입니다.


let arr = [2, 4, 6, 8, 11, 14];

위의 배열에서 요소가 8인것을 찾으려면 어떻게 해야할까요?
index 0에서부터 5까지 차례대로 요소를 확인하면서 8이 나올 때까지 for 문을 돌리면 됩니다.
이렇게 첫 index 부터 하나하나 찾아나서는 것을 선형탐색이라고 합니다.

그런데 배열의 길이가 1000이고, 1000이라는 요소를 찾아야 하는데 arr[9999]에 1000이 있다고 가정한다면 몇 번의 for문이 돌아갈까요?
네, 1000번 입니다.

이렇게 선형탐색의 단점은 요소에 따라 탐색을 여러 번 해야할 수도 있다는 점입니다.
즉, 1을 찾으려면 for문을 한 번만 돌려도 되는데, 1000을 찾으려면 for문을 1000번 돌려야 한다는 말입니다.
만약 for문 내부에 복잡한 계산이 들어있다면 실행속도가 느려지고 효율적이지 않은 로직이 될 것입니다.

그럼 좀 더 효과적인 알고리즘이 있을까요? 
네! 바로 이진 탐색입니다.

이진 탐색은 순서대로 찾는 것이 아니라, 중간부터 찾아 나서는 방법입니다.
만약 아래와 같은 배열에서 7을 찾아야 한다면, 
첫 번째로 중간 위치의 요소를 비교하고(7<14)찾아야할 값보다 크면 왼쪽의 중간에서 다시 비교합니다.
다시 한 번 크기를 비교해서 오른쪽의 중간으로 갈지, 왼쪽의 중간으로 갈지 결정하여 다시 찾아나서는 것을 이진 탐색법이라고 합니다.





## 오늘의 코드 카타
오름차순인 숫자 nums 배열과 찾아야할 target을 인자로 주면,
target이 몇 번째 index인지 return 해주세요.

```
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
```
```
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
```
설명: 찾지 못하면 -1로 return 해주세요.

* nums 배열에 있는 요소는 서로 중복된 값이 없습니다.
*/

const search = (nums, target) => {
  let startIndex = 0;
  let endIndex = nums.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    if (nums[middleIndex] === target) {
      return middleIndex;
    }
    if (nums[middleIndex] < target) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }

  return -1;
};

search([-1, 0, 3, 5, 9, 12], 9);
search([-1, 0, 3, 5, 9, 12], 2);

// Input: nums = [-1,0,3,5,9,12], target = 9 Output: 4

// Input: nums = [-1,0,3,5,9,12], target = 2 Output: -1
