/*
### 문제
양수로 이루어진 m x n 그리드를 인자로 드립니다.
상단 왼쪽에서 시작하여, 하단 오른쪽까지 가는 길의 요소를 다 더했을 때,
가장 작은 합을 찾아서 return 해주세요.

한 지점에서 우측이나 아래로만 이동할 수 있습니다.

```
Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]

Output: 7
```

설명: 1→3→1→1→1 의 합이 제일 작음
*/

const minPathSum = (grid) => {
  const row = grid.length;
  const col = grid[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i === 0 && j === 0) {
        continue;
      } else if (i === 0) {
        grid[i][j] += grid[i][j - 1];
        continue;
      } else if (j === 0) {
        grid[i][j] += grid[i - 1][j];
        continue;
      } else {
        grid[i][j] += Math.min(grid[i][j - 1], grid[i - 1][j]);
      }
    }
  }
  return grid[grid.length - 1][grid[0].length - 1];
};

minPathSum([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
]);

minPathSum([
  [1, 1, 3],
  [1, 1, 5],
  [4, 2, 1],
]);

minPathSum([
  [1, 2, 3],
  [4, 1, 2],
]);
