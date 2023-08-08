// Code goes here!

// Generic : 제네릭 타입은 다른 타입과 연결되는 종류인데 다른 타입이 어떤 타입이어야 하는지에 대해서는 크게 상관하지 않음.
// 홑화살괄호 내에 배열에 전달되어야 하는 데이터의 타입을 지정
const names: Array<string> = [];
//여기 저장하는 데이터가 문자열임을 우리가 알고 있다면 배열 내의 요소에 접근할 때마다
// 문자열로 작업을 수행할 수 있고 이와 같은 문자열 메소드를 호출
// 타입스크립트가 이 배열이 문자열을 지닌다는 것을 알고 있으므로 에러는 발생하지 않음.
// names[0].split(" ")

// 이 프로미스 상수는 Promise 타입이라는 특정 타입을 지님
// const promise: Promise<unknown>
// const promise:Promise<string> = new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     resolve("This is done!")
//   }, 2000);
// });

//Object.assign() 메서드는 출처 객체들의 모든 열거 가능한 자체 속성을 복사해 대상 객체에 붙여넣고 그 후 대상 객체를 반환
//제네릭 타입 다음에 있는 홑화살괄호 내에 extends를 입력 및 특정 제약 조건을 설정
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// const mergedObj = merge({name:"max"},{age:30}) as {name:string,age:number}
const mergedObj = merge({ name: "max", hobbies: ["sports"] }, { age: 30 });
console.log(mergedObj);
// console.log(mergedObj.name);

interface Lengthy {
  // 그저 length 속성이 있는지만 확인
  length:number;
}

// 제약 조건을 사용하요 얻는 것이 무엇이든 length 속성도 반환되며 배열이나 문자열은 length 속성을 지닌다는 것
function countAndDescribe<T extends Lengthy>(element: T):[T,string] {

  let descriptionText = "Got no  value";
if(element.length === 1){
  descriptionText = "Got 1 elements."
}else if(element.length > 1){
  descriptionText = "Got " + element.length + " elements."
}
  return [element, descriptionText]
}

console.log(countAndDescribe("Hi There!"));
console.log(countAndDescribe(["Sport!","Cooking"]));
