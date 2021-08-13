/*
1부터 50의 자연수 중 짝수를 구하는 함수
*/

function Test(arr) {
  return arr.filter((num) => num % 2 !== 1);
}

console.log(Test([1, 2, 3, 4, 5, 6]));
