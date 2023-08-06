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

// TS는 Universal을 숫자형 타입으로 간주
//  이 타입이 우리가 입력한 유일한 인터섹션 타입이기 때문
type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  // if문 라인을 타입가드라고 함. 이는 유니온 타입이 지닌 유연성을 활용할 수 있게 해주며
  // 런타임 시 코드가 정확하게 작동하게 해줌
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

type Vehicle =Car | Truck;

const v1 =new Car();
const v2 =new Truck();

function useVehicle (vehicle:Vehicle) {
  vehicle.drive();
  // 1. in - in을 사용
  //if("loadCargo" in vehicle){
  //   vehicle.loadCargo(1000)
  // }

  // 2. instanceof - Vehicle이 Truck의 인스턴스인지 확인 (in 보다 오타를 낮출 수 있음)
  if(vehicle instanceof Truck){
    vehicle.loadCargo(1000)
  }
}
useVehicle(v1)
useVehicle(v2)