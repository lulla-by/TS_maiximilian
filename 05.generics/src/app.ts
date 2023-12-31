// Code goes here!

// Generic : 제네릭 타입은 다른 타입과 연결되는 종류인데 다른 타입이 어떤 타입이어야 하는지에 대해서는 크게 상관하지 않음.
// 홑화살괄호 내에 배열에 전달되어야 하는 데이터의 타입을 지정
// const names: Array<string> = [];
//여기 저장하는 데이터가 문자열임을 우리가 알고 있다면 배열 내의 요소에 접근할 때마다
// 문자열로 작업을 수행할 수 있고 이와 같은 문자열 메소드를 호출
// 타입스크립트가 이 배열이 문자열을 지닌다는 것을 알고 있으므로 에러는 발생하지 않음.
// names[0].split(" ")

// 이 프로미스 상수는 Promise 타입이라는 특정 타입을 지님
// const promise: Promise<unknown>
// const promise:Promise<string> = new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     resolve("This is done!")
//   }, 2000);
// });

//Object.assign() 메서드는 출처 객체들의 모든 열거 가능한 자체 속성을 복사해 대상 객체에 붙여넣고 그 후 대상 객체를 반환
//제네릭 타입 다음에 있는 홑화살괄호 내에 extends를 입력 및 특정 제약 조건을 설정
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// const mergedObj = merge({name:"max"},{age:30}) as {name:string,age:number}
const mergedObj = merge({ name: "max", hobbies: ["sports"] }, { age: 30 });
console.log(mergedObj);
// console.log(mergedObj.name);

interface Lengthy {
  // 그저 length 속성이 있는지만 확인
  length: number;
}

// 제약 조건을 사용하요 얻는 것이 무엇이든 length 속성도 반환되며 배열이나 문자열은 length 속성을 지닌다는 것
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no  value";
  if (element.length === 1) {
    descriptionText = "Got 1 elements.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi There!"));
console.log(countAndDescribe(["Sport!", "Cooking"]));

// keyof:  키워드를 지니는 제네릭 타입을 사용하여 이와 같은 정확한 구조를 갖고자 한다는 것을 타입스크립트에게 알려줌
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

//타입스크립트에게 첫 번째 매개변수가 모든 유형의 객체여야 하고
// 두 번째 매개변수는 해당 객체의 모든 유형의 키여야 한다고 입력했기 때문.
// console.log(extractAndConvert({},"name"));  //Error

console.log(extractAndConvert({ name: "jay" }, "name")); //정상 출력

//DataStorage가 이런 타입하고만 작동해야 한다고 입력한 것이기에 객체는 더 이상 허용되지 않음
class DataStorage<T extends string | number | boolean> {
  //T 타입의 배열을 입력함으로써 제네릭 타입의 데이터가 저장되도록함
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

// 이 제네릭 타입을 문자열 타입으로 설정하면 textStorage에서 addItem을 호출
// 숫자를 추가하려 하면 에러가 발생. 문자열만 저장하는 dataStorage를 입력했기 때문
const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

// const objStorage = new DataStorage<object>();
// const obj1 = {name:"Obj1"}
// objStorage.addItem(obj1)
// objStorage.addItem({name:"Obj2"})
// objStorage.removeItem(obj1)
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  //파셜 타입은 타입스크립트에게 중괄호 쌍이 courseGoal이 되는 객체임을 알려줌
  let courseGoal:Partial<CourseGoal> = {}
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal
}

const names:Readonly<string[]> = ["Max","Anna"]
// names.push("Manu")
// names.pop()
