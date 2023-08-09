function Logger(logString:string){
  console.log("로거팩토리"); //1
  return function (constructor:Function){
    console.log(logString); //5
    console.log(constructor); //6
  }
}


function WithTemplate(template:string, hookId:string){
  console.log("탬플릿팩토리");//2
return function(constructor:any){
  console.log("탬플릿 데코레이터 함수 실행");//3
  const hookEl = document.getElementById(hookId)
  const p  = new constructor()
  if(hookEl){
    hookEl.innerHTML = template;
    hookEl.querySelector("h1")!.textContent = p.name
  }
}
}


// 우리가 팩토리 함수를 명시한 순서 내에서 실 데코레이터가 나타남
// 하지만 실 데코레이터 함수의 실행은 밑에서부터 일어남

// @Logger("LOGGING - PERSON")
@Logger("로거 데코레이터 함수 실행")
@WithTemplate("<h1>My Person Object</h1>","app")
class Person {
  name="Max";

  constructor(){
    console.log("Creating person object..."); //4
  }
}

const pers = new Person();

console.log(pers); //7

// ---------

function Log(target:any,propertyName:string | Symbol){
console.log("Property Decorator");
console.log(target,propertyName)

}

class Product {
  @Log
  title: string;
  private _price: number;

  set price(val:number){
    if(val > 0){
      this._price = val
    }else{
      throw new Error("Invalid price - should be positive!")
    }
  }

  constructor(t:string, p:number){
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(tax:number){
    return this._price*(1+tax);
  }
}