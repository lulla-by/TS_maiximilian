//union타입

// 입력값을 보다 유연하게 처리하고 싶음
function combine(input1: number | string, input2: number | string) {
  let result;
  if(typeof input1 ==='number' && typeof input2 === 'number' ){
    // 숫자적용
   result = input1 + input2
  }else{
    // 문자열적용
    result = input1.toString() + input2.toString()
  }
  
  return result
}
const combinedAges = combine(30,26)
console.log(combinedAges);
const combinedNames = combine("max","anna")
console.log(combinedNames);