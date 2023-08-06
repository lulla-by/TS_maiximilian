function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  let text = "Result: " + num;
  console.log(text);
}
function addAndHandler(
  n1: number,
  n2: number,
  callback: (num: number) => void
) {
  const result = n1 + n2;
  callback(result);
}
printResult(add(5, 12));

// 이 화살표의 오른쪽에서 원하는 함수의 반환 타입을 지정하여 여기서 저장할 수 있도록 함
// 두 매개변수를 취하는 any함수를 수용해야한다고 TS가 인식하도록 해줌
let combineValues: (a: number, b: number) => number;

combineValues = add;

// 위에서 combineValues의 타입을 지정했기 때문에 해당 형식에 맞지않는 printvalues는 에러가 발생함
// combineValues = printResult

// combineValues를 함수로 실행하려고 밑에서 진행하기 때문에 런타임에서 에러가 발생함
// 따라서 Function을 타입으로 지정함
// combineValues = 5;
console.log(combineValues(8, 8));

// 익명함수 매개변수에 타입을 지정하지 않은 이유는 함수 작성시 callback함수의 매개변수는 number로 설정했기 때문
addAndHandler(10, 20, (result) => {
  console.log(result);
});
