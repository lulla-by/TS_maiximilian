//명시적 타입지정
// const person:{
//   name:string;
//   age:number;
// } = {
  const person ={
  name:"Maximilian",
  age:30,
  hobbies:["Sports","Cooking"]
}

let favoriteActivities:string[];
favoriteActivities=["Sprots"]
// console.log(person.nickname);
// 존재하지 않는 프로퍼티에 접근시 에러

console.log(person.name)

for(const hobby of person.hobbies){
  //TS는 hoobbies가 문자열 배열이라는 것을 알고 있고
  //hobby는 문자열의 배열을 거치므로 각각의 hobby는 문자열이어야만 하기 때문
  console.log(hobby.toUpperCase())

  // map메소드는 배열에서 사용할 수 있지만 문자열에서는 사용이 불가능
  // map 속성이 문자열 타입에는 존재하지 않는다는 에러 발생 
  // Property 'map' does not exist on type 'string'.
  // console.log(hobby.map());
  
}
