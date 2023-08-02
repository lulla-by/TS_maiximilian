class Department {
  // private 사용: class 즉, 생성된 객체 내부에서만 접근가능
  // 기본은 public
  private name: string;
  private employees:string[] = []

  constructor(name: string) {
    this.name = name;
  }

  describe(this:Department) {
    console.log(this.name);
  }
  addEmployee(employee:string){
    this.employees.push(employee)
  }
  printEmployeeInformation(){
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

const accounting = new Department("Accounting");

accounting.addEmployee("Max");
accounting.addEmployee("Jay");

// 클래스를 사용하는 방법은 확실한 한 가지로 정하고 다른 방법은 막아두는 것이 좋음
// 클래스 외부에서 employees에 접근하는 것을 허용해서는 X 
// accounting.employees[2]="Anna";

accounting.printEmployeeInformation()
accounting.describe()




// const accountingCopy = {name:"Dummy",describe:accounting.describe }

// accountingCopy.describe();

