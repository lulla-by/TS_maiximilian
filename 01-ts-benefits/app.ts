//union타입

// 입력값을 보다 유연하게 처리하고 싶음
function combine(
  input1: number | string,
  input2: number | string,

  // 유니언 타입을 리터럴 타입과 결합하여 사용
  // 리터럴 타입은 스트링이나 숫자등과 같은 핵심 타입을 기반으로 
  // 아무 문자열이 아니 두 문자열만 특정하여 허용하는 것
  resultConversation: 'as-number' | 'as-text'
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number" || resultConversation ==="as-number") {
    // 숫자적용
    result = +input1 + +input2;
  } else {
    // 문자열적용
    result = input1.toString() + input2.toString();
  }
  return result;
  // if(resultConversation === "as-number"){
  //   return +result
  // } else{
  //   return result.toString();
  // }
}
const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);
const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);
const combinedNames = combine("max", "anna", "as-text");
console.log(combinedNames);

// 이렇게 리터럴타입에 맞지않는 값을 넘겨주면 에러
// const combinedErrorNames = combine("max", "anna", "Error");
