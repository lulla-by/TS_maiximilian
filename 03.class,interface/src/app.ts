
// type지정
// type AddFn = (a: number, b: number) => number;

// interface 지정
interface AddFn {
  // TS는 인터페이스의 이 익명 함수의 특수한 구문을 이해하며 
  // 이 인터페이스를 함수 타입으로서 사용하고자 하는 경우 함수의 형태가 이와 같다는 것을 이해함
  (a:number,b:number):number;
}

let add: AddFn;
add = (a, b) => a + b;
add(6, 4);

interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;
user1 = new Person("max", 24);

user1.greet("Hi there. i'm");
console.log(user1);
