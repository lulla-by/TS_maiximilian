class Department {
  // private id : string;
  // private name: string;
  private employees: string[] = [];

  // 필드를 찾은 다음 값을 저장해야 하는 이중 초기화 코드를 한 번에 처리하도록 축약한 것
  constructor(private readonly id: string, private name: string) {}

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }
  addEmployee(employee: string) {
    //Cannot assign to 'id' because it is a read-only property.
    // this.id = 3;

    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    // 상속하는 클래스로 super를 추가하고 이를 함수처럼 실행해야 함
    // super는 기본 클래스의 생성자를 호출함
    super(id, "IT");
    // 특수한 속성을 할당하려면 super부터 호출해야 함
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {

  constructor(id: string,private reports:string[]) {
    super(id, "Accuonting");
  }

  addReport(text:string){
    this.reports.push(text)
  }

  printReport(){
    console.log(this.reports);
    
  }
}

const accounting = new AccountingDepartment("d2",[])
accounting.addReport("Something wet wrong")
accounting.printReport()

const it = new ITDepartment("d1", ["max"]);
it.addEmployee("Jay");
it.addEmployee("henry");

it.printEmployeeInformation();
it.describe();
console.log(it);
