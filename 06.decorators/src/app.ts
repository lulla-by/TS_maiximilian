// function Logger(logString: string) {
//   console.log("로거팩토리"); //1
//   return function (constructor: Function) {
//     console.log(logString); //6
//     console.log(constructor); //7
//   };
// }

// function WithTemplate(template: string, hookId: string) {
//   console.log("탬플릿팩토리"); //2
//   return function (constructor: any) {
//     console.log("탬플릿 데코레이터 함수 실행"); //3
//     console.log(constructor); //4
//     const hookEl = document.getElementById(hookId);
//     const p = new constructor();
//     if (hookEl) {
//       hookEl.innerHTML = template;
//       hookEl.querySelector("h1")!.textContent = p.name;
//     }
//   };
// }

// // 우리가 팩토리 함수를 명시한 순서 내에서 실 데코레이터가 나타남
// // 하지만 실 데코레이터 함수의 실행은 밑에서부터 일어남

// // @Logger("LOGGING - PERSON")
// @Logger("로거 데코레이터 함수 실행")
// @WithTemplate("<h1>My Person Object</h1>", "app")
// class Person {
//   name = "Max";

//   constructor() {
//     console.log("Creating person object..."); //5,8
//   }
// }

// const pers = new Person();

// console.log(pers); //7

// ---------

function Log(target: any, propertyName: string | Symbol) {
  console.log("Log 1 Property Decorator");
  console.log(target, propertyName);
  console.log("----------------------------");
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Log 2 Accessor decorator!");
  console.log(target);  //prototype
  console.log(name);  // price
  console.log(descriptor); //property descriptor set 함수
  console.log("----------------------------");
}

function Log3(target: any, name:string | Symbol, descriptor:PropertyDescriptor){
  console.log("Log 3 Method decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor); 
  console.log("----------------------------");
}
function Log4(target: any, name:string | Symbol, position:number){
  console.log("Log 4 parameter decorator!");
  console.log(target);
  console.log(name);  // 이 매개변수를 사용하는 메서드의 이름 출력
  console.log(position);  // 인수의 인덱스
  console.log("----------------------------");
  
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive!");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

