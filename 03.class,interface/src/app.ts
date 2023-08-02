class Department {
  // private id : string;
  // private name: string;
  private employees:string[] = []

  // 필드를 찾은 다음 값을 저장해야 하는 이중 초기화 코드를 한 번에 처리하도록 축약한 것
  constructor(private id:string, private name: string) {
    // this.id = id;
    // this.name = name;
  }

  describe(this:Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }
  addEmployee(employee:string){
    this.employees.push(employee)
  }
  printEmployeeInformation(){
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

const accounting = new Department("d1","Accounting");

accounting.addEmployee("Max");
accounting.addEmployee("Jay");

// 클래스를 사용하는 방법은 확실한 한 가지로 정하고 다른 방법은 막아두는 것이 좋음
// 클래스 외부에서 employees에 접근하는 것을 허용해서는 X 
// accounting.employees[2]="Anna";

accounting.printEmployeeInformation()
accounting.describe()




// const accountingCopy = {name:"Dummy",describe:accounting.describe }

// accountingCopy.describe();

