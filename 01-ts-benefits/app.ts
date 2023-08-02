function add(n1:number, n2:number) {
  return n1+n2
}

function printResult(num:number) {
  let text = 'Result: '+num
  console.log(text);
  // 반환문이 없을때 => void 반환

  // return 값이 있으면 반환 타입이 추론 됨
  // return text  
}

// 타입이 undefined일 때 => 반환은하는데 반환값이 없음 => 실제 값을 반환하지 않을때 사용
// function printResult(num:number):undefined {
//   let text = 'Result: '+num
//   console.log(text);
// return;
// }

console.log(printResult(add(5,12))) //undefined => 아무것도 반환하지 않음