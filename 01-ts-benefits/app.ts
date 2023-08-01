//명시적 타입지정
// const person:{
//   name:string;
//   age:number;
// } = {
//   const person:{
//     name:string;
//     age:number;
//     hobbies:string [];
//     role:[number,string]
//   } ={
//   name:"Maximilian",
//   age:30,
//   hobbies:["Sports","Cooking"],
// // TS에는 바닐라 자바스크립트에서는 없던 몇가지 새로운 개념과 타입이 추가
// // 그 중 하나가 바로 Tuple
// // 배열은 맞지만 길이와 타입이 고정된 배열
// role:[2,"author"]

// }

// push는 예외적으로 튜플에서 허용되기에
// 안타깝게도 TS가 이런 에러를 걸러내질 못하지만 적어도 잘못된 값을 할당하지는 않음
// person.role.push("admin")
// for(const role of person.role){
//   console.log(role) // SPORTS COOKING
// }

// person.role[1]=10

// 길이는 강제되지 않지만 푸시 등에는 해당되지 않음
//Type '[number, string, string]' is not assignable to type '[number, string]'.
// person.role=[0,"1","2"]

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// 위에서 지정한것처럼 0, 1, 2 할당, 라벨을 숫자로 할당
// enum Role {ADMIN , READ_ONLY, AUTHOR}

// 이렇게 ADMIN에 5를 입력하면 0,1,2 대신 5,6,7로 할당
// enum Role {ADMIN=5 , READ_ONLY, AUTHOR}

// 필요에 따라 임의의 숫자나 문자 등을 이와 같은 모든 식별자에 고유값으로 할당 가능
enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = "AUTHOR",
}

const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  // TS에는 바닐라 자바스크립트에서는 없던 몇가지 새로운 개념과 타입이 추가
  // 그 중 하나가 바로 Tuple
  // 배열은 맞지만 길이와 타입이 고정된 배열
  role: Role.ADMIN,
};

if (person.role === Role.AUTHOR) {
  console.log("is author");
}

let favoriteActivities: string[];
favoriteActivities = ["Sprots"];
// console.log(person.nickname);
// 존재하지 않는 프로퍼티에 접근시 에러

console.log(person.name);

for (const hobby of person.hobbies) {
  //TS는 hoobbies가 문자열 배열이라는 것을 알고 있고
  //hobby는 문자열의 배열을 거치므로 각각의 hobby는 문자열이어야만 하기 때문
  console.log(hobby.toUpperCase());

  // map메소드는 배열에서 사용할 수 있지만 문자열에서는 사용이 불가능
  // map 속성이 문자열 타입에는 존재하지 않는다는 에러 발생
  // Property 'map' does not exist on type 'string'.
  // console.log(hobby.map());
}
