// function Logger(logString: string) {
//   console.log("로거팩토리");
//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// function WithTemplate(template: string, hookId: string) {
//   console.log("탬플릿팩토리");
//   return function<T extends {new(...args:any[]):{name:string}}> (originalConstructor: T) {
//     // 기존의 Person 클래스를 확장시킴(originaConstructor === Person)
//     // 데코레이터를 더한 새로운 클래스로 대체, constructor함수의 syntactic sugar
//     return class extends originalConstructor {
//       constructor(..._:any[]) {
//         super();
//         console.log("탬플릿 데코레이터 함수 실행");
//         const hookEl = document.getElementById(hookId);
//         if (hookEl) {
//           hookEl.innerHTML = template;
//           hookEl.querySelector("h1")!.textContent = this.name;
//         }
//       }
//     };
//   };
// }

// // 우리가 팩토리 함수를 명시한 순서 내에서 실 데코레이터가 나타남
// // 하지만 실 데코레이터 함수의 실행은 밑에서부터 일어남

// // @Logger("LOGGING - PERSON")
// @Logger("로거 데코레이터 함수 실행")
// //  WithTemplate(template: string, hookId: string)
// @WithTemplate("<h1>My Person Object</h1>", "app")
// class Person {
//   name = "Max";

//   constructor() {
//     console.log("Creating person object..."); //5,8
//   }
// }

// const pers = new Person();

// console.log(pers); //7

// // ---------

// function Log(target: any, propertyName: string | Symbol) {
//   console.log("Log 1 Property Decorator");
//   console.log(target, propertyName);
//   console.log("----------------------------");
// }

// function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
//   console.log("Log 2 Accessor decorator!");
//   console.log(target); //prototype
//   console.log(name); // price
//   console.log(descriptor); //property descriptor set 함수
//   console.log("----------------------------");
// }

// function Log3(
//   target: any,
//   name: string | Symbol,
//   descriptor: PropertyDescriptor
// ) {
//   console.log("Log 3 Method decorator!");
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
//   console.log("----------------------------");
// }
// function Log4(target: any, name: string | Symbol, position: number) {
//   console.log("Log 4 parameter decorator!");
//   console.log(target);
//   console.log(name); // 이 매개변수를 사용하는 메서드의 이름 출력
//   console.log(position); // 인수의 인덱스
//   console.log("----------------------------");
// }

// class Product {
//   @Log  // 반환하지만 TS가 무시하는 데코레이터
//   title: string;
//   private _price: number;

//   @Log2 // 반환하는 데코레이터
//   set price(val: number) {
//     if (val > 0) {
//       this._price = val;
//     } else {
//       throw new Error("Invalid price - should be positive!");
//     }
//   }

//   constructor(t: string, p: number) {
//     this.title = t;
//     this._price = p;
//   }

//   @Log3 // 반환하는 데코레이터
//   // Log4: 반환하지만 TS가 무시하는 데코레이터
//   getPriceWithTax(@Log4 tax: number) {
//     return this._price * (1 + tax);
//   }
// }

// let book1 = new Product("book1", 19);
// let book2 = new Product("book2", 29);

//   // 어디로 호출하든 상관 없이 호출될 때마다 객체에 속하게 됨
// function AutoBind(_target:any,_methodName:string,descriptor:PropertyDescriptor){

//   // 항상 this 키워드를 이 메서드가 아직 속해 있는 객체로 설정
//   const originalMethod = descriptor.value;

//   const adjDescriptor:PropertyDescriptor = {
//     configurable:true,
//     enumerable:false,
//     get(){
//       // console.log(this);     //Printer class
//       // const boundFn = originalMethod    //undefined
//     const boundFn = originalMethod.bind(this)  //This work
//     return boundFn;
//   }
// }
// return adjDescriptor;
// }

// class Printer {
//   message = "This work";

//   @AutoBind
//   showMessage(){
//     console.log(this.message);
//   }
// }

// const p = new Printer()

// const button = document.querySelector("button")!;

// button.addEventListener("click",p.showMessage)

//-----------
// 제 3자 라이브러리가 될 수 있음

interface ValidateConfig {
  // 문자열 arr, 값은 또다른 객체
  // 클래스 이름으로서 유효성 검사를 수행한 프로퍼티를 등록하려는 것
  [propperty: string]: {
    [validatableProp: string]: string[]; // ['required','positive']
  };
}

const registeredValidators: ValidateConfig = {};

//target: property가 놓일 객체의 프로토타입 또는 정적 프로퍼티인 경우 생성자함수
//propName: property name
function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["required"],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["positive"],
  };
}

// 어떤 객체든 분석
// 우리가 object 클래스용으로 가지고 있는 이 객체용 저장소가 그것에 기초하고 있는지를 확인
function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    console.log(prop);
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}
class Course {
  // 타이틀 유효성 검사 데코레이터
  //title 프로퍼티가 Required 되기를 원함
  @Required
  title: string;
  // 숫자 유효성 검사 데코레이터
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;

courseForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // title과 price를 위한 데이터 추출
  // htmlinputelement임을 알리기 위해 타입 캐스팅을 이용하여 TS에 이 사실을 알림
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;
  const title = titleEl.value;
  //+로 숫자로 전환
  const price = +priceEl.value;

  // 값을 입력하지 않았을 경우를 대비한 유효성 검사, => 데코레이터를 이용하여 코스 구문에 유효성 검사 로직이 포함된다면???
  //  if(title.trim().length > 0){

  //  }

  // 새로운 코스를 생성하고 싶음
  const createdCourse = new Course(title, price);

  // 코스를 생성하면 validate를 호출하고 createdCourse를 전달
  if (!validate(createdCourse)) {
    alert("invalid input, please try again!");
    return;
  }
  console.log(createdCourse);
});
