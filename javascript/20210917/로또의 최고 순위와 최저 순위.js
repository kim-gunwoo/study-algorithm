function solution(lottos, win_nums) {
  var answer = [];
  const rank = { 6: 1, 5: 2, 4: 3, 3: 4, 2: 5, 1: 6, 0: 6 };

  const match = lottos.filter((v) => win_nums.includes(v)).length;
  const zero = lottos.filter((v) => !v).length;

  answer.push(rank[zero + match]);
  answer.push(rank[match]);

  return answer;
}
