interface AddFn {
  (a:number,b:number):number;
}

let add: AddFn;
add = (a, b) => a + b;
add(6, 4);

interface Named {
  readonly name?: string;
  outputName?:string
}

interface Greetable extends Named {
  greet(phrase: string): void;
  
}

class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(name?: string) {
    this.name = name;
    if(name){
      this.name = name;
    }
  }

  greet(phrase: string) {
    if(this.name){ 
      console.log(phrase + " " + this.name);
    }else{
      console.log("Hi!");
      
    }
  }
}

let user1: Greetable;
user1 = new Person();

user1.greet("Hi there. i'm");
console.log(user1);
