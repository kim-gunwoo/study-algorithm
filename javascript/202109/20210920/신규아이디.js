function solution(new_id) {
  var answer = "";

  const step1 = new_id.toLowerCase();
  const step2 = step1.replace(/[^a-z0-9-_.]/g, "");
  const step3 = step2.replace(/[\.]{2,}/g, ".");
  const step4 = step3.replace(/^\./, "").replace(/\.$/g, "");
  const step5 = step4.length > 0 ? step4 : "a";
  const step6 = step5.substr(0, 15).replace(/\.$/g, "");
  const step7 =
    step6.length > 2 ? step6 : step6.padEnd(3, step6.charAt(step6.length - 1));

  answer = step7;

  return answer;
}
