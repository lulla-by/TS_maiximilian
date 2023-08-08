// Code goes here!

// Generic : 제네릭 타입은 다른 타입과 연결되는 종류인데 다른 타입이 어떤 타입이어야 하는지에 대해서는 크게 상관하지 않음.
// 홑화살괄호 내에 배열에 전달되어야 하는 데이터의 타입을 지정
const names:Array<string> = [];
//여기 저장하는 데이터가 문자열임을 우리가 알고 있다면 배열 내의 요소에 접근할 때마다
// 문자열로 작업을 수행할 수 있고 이와 같은 문자열 메소드를 호출
// 타입스크립트가 이 배열이 문자열을 지닌다는 것을 알고 있으므로 에러는 발생하지 않음.
// names[0].split(" ")


// 이 프로미스 상수는 Promise 타입이라는 특정 타입을 지님
// const promise: Promise<unknown>
const promise:Promise<string> = new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve("This is done!")
  }, 2000);
});

// 만약 promise의 반환타입을 any로 지정하면 사실상 의미가 없음

// promise의 반환타입을 number로 지정하면 split메서드 사용 불가
// const promise:Promise<number> = new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     resolve(10)
//   }, 2000);
// });

// promise.then(data => {
//   data.split(" ")
// })