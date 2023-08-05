interface Named{
  readonly name: string;

}

// 다수의 인터페이스를 상속받고 싶으면 다음과 같이 쉼표를 사용
// interface Greetable extends Named,  anotherInterfaces {
// ! 클래스의 경우에는 상속을 사용하는 경우 하나의 클래스로부터만 상속할 수 있고 다수는 안됌 !

// 첫번째 확장방법 extends Named
interface Greetable extends Named {
  greet(phrase:string):void;
}

// 두번째 확장방법 쉼표 사용
// class Person implements Greetable, Named{
class Person implements Greetable {
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

let user1 : Greetable;
user1 = new Person("max",24)

user1.greet("Hi there. i'm")
console.log(user1);


