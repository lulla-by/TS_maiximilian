// Code goes here!
type Admin = {
  name:string;
  privileages:string[];
}

type Employee = {
  name:string;
  startDate:Date;  // 자바스크립트에 내장된 Date 객체 기반의 TS가 지원하는 타입
}

// 두가지 타입을 결합
type ElevatedEmployee = Admin & Employee;

const e1 : ElevatedEmployee = {
  name:"",
  privileages:[""],
  startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

// TS는 Universal을 숫자형 타입으로 간주
//  이 타입이 우리가 입력한 유일한 인터섹션 타입이기 때문
type Universal = Combinable & Numeric;