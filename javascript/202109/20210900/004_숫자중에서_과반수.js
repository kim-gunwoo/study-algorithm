/*
문제
숫자로 이루어진 배열인 nums를 인자로 전달합니다. 숫자중에서 과반수(majority, more than a half)가 넘은 숫자를 반환해주세요.

예를 들어,

nums = [3,2,3]
return 3
 
nums = [2,2,1,1,1,2,2]
return 2
nums = [3,2,3]
return 3

nums = [2,2,1,1,1,2,2]
return 2
가정
nums 배열의 길이는 무조건 2개 이상
*/
function moreThanHalf(nums) {
  let obj = new Object();
  let value = 0;
  let rtn = "";

  nums.forEach((num) => {
    console.log(obj[num]);
    if (!obj[num]) {
      obj[num] = 1;
    } else {
      obj[num] += 1;
    }
  });

  for (let a in obj) {
    if (obj[a] > value) {
      value = obj[a];
      rtn = a;
    }
  }

  return rtn;
}

moreThanHalf("[3,2,3]");
moreThanHalf("[2,2,1,1,1,2,2]");
