// instance : 객체의 타입을 확인
interface Person {
  name: string;
  age:number;

  //인수의 이름과 타입, 메소드의 반환 타입 순서
  greet(phrase:string):void;
}

// Person 인터페이스 정의를 충족하는 유효한 객체
const user1 : Person ={
  name:"Jay",
  age:27,
  greet(phrase:string){
    console.log(phrase+ " " + this.name);
  }
}

user1.greet("Hi there. i'm")