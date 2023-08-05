// instance : 객체의 타입을 확인
//인터페이스는 객체의 구조를 설명하기 위해서만 사용
interface Greetable {
  //public, private은 사용 X
  // readonly를 추가하여 인터페이스를 기반으로 구축하는 모든 객체의 속성이 한번만 설정되어야하며
  // 이후에는 읽기 전용으로 만들어서 객체가 초기화되면 변경할 수 없도록 할 수 있음
  readonly name: string;

  greet(phrase:string):void;
}

// Person 클래스가 기본적으로 이 인터페이스를 준수해야 한다고 알려줌
// 인터페이스는 쉼표로 구분하여 여러 개를 구현할 수 있으므로 하나가 있더라도 또 다른 인터페이스를 만들 수 있음
class Person implements Greetable{
 name: string;
 age:number;

 constructor(name:string, age:number){
 this.name = name
 this.age=age;
 }

 greet(phrase:string){
  console.log(phrase+ " " + this.name);
 }

}

// Person 인터페이스 정의를 충족하는 유효한 객체
let user1 : Greetable;
 user1 = new Person("max",24)

user1.greet("Hi there. i'm")
console.log(user1);


