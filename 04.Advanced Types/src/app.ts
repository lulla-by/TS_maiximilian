// Code goes here!
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date; // 자바스크립트에 내장된 Date 객체 기반의 TS가 지원하는 타입
};

// 두가지 타입을 결합
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "jay",
  privileges: ["hi"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

// 두 사용자 정의 객체 타입을 사용한 유니언 타입 생성
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  // privileges가 emp안에 속성으로 존재하는지 확인
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("start date: " + emp.startDate);
  }
}
// printEmployeeInformation(e1);

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // instanceof는 interface는 사용 X
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}
// useVehicle(v1)
// useVehicle(v2)

interface Bird {
  type: "bird";
  flyingSpeed: number;
}
interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving at speed: " + speed);
}
moveAnimal({type:"bird",flyingSpeed:300})
moveAnimal({type:"horse",runningSpeed:300})


// null이 아닌 HTMLinputElement 타입임을 형변환을 사용하여 TS에 알려야함, 형변환하는 두가지 방법중 하나를 선택하여 프로젝트 전체의 일관성을 유지
// 첫번째 방법
// const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;
// 두번째 방법
const userInputElement = <HTMLInputElement>document.getElementById("user-input") as HTMLInputElement;

userInputElement.value = "Hi there!"


// 느낌표를 사용하여 느낌표 앞의 표현식을 null로 반환하지 않겠다고 TS에게 인식
// const userInputElement = <HTMLInputElement>document.getElementById("user-input");
// if(userInputElement){
//   (userInputElement as HTMLInputElement).value = "Hi there"
// }

interface ErrorContainer{
  // 인덱스 타입
  // [이름:속성의 값타입]: 값의 타입 
  [prop:string]:string;
  // 에러 컨테이너 기반의 이 객체에 추가되는 모든 속성은 
  // 문자열로 해석할 수 있는 속성 이름을 지녀야 한다는 것과 
  // 해당 속성에 대한 값 역시 문자열이어야 한다는 것만 알고 있다고 입력
}

const errorBag:ErrorContainer = {
  // id:1  //Type 'number' is not assignable to type 'string'
  email:"Not a valid email",
  username:"Must start with a capital character!"
}