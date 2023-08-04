class Department {
  // private id : string;
  // private name: string;
  protected employees: string[] = [];

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
private lastReport: string;

get moreRecentReport(){
  if(this.lastReport){
    return console.log(this.lastReport);
  }else{
    throw new Error("No report found!")
  }
}
  constructor(id: string,private reports:string[]) {
    super(id, "Accuonting");
    this.lastReport = reports[0];
  }

  addReport(text:string){
    this.reports.push(text)
    this.lastReport = text;
  }

  printReport(){
    console.log(this.reports);
  }

  addEmployee(name:string){
    if(name==="max"){
      return;
    }
    //Property 'employees' is private and only accessible within class 'Department'.
    //private속성이기 때문에 Department 클래스 내부에서만 사용 가능함
    // Departmente기반의 클래스에서 사용 가능X => Accounting에서 접근할 수 없음
    //만약 접근할 수 있도록 하면서도 외부에서 변경 불가능한 속성응로 만들고자 한다면  protected 속성으로
    this.employees.push(name)
  }
}

const accounting = new AccountingDepartment("d2",[])

// *중요* 메서드로서가 아니라 속성으로서 접근해야함!!!
// accounting.moreRecentReport

accounting.addReport("Something went wrong")
accounting.printReport()
accounting.addEmployee("max")
accounting.addEmployee("anna")
accounting.printEmployeeInformation()
accounting.moreRecentReport

const it = new ITDepartment("d1", ["max"]);
it.addEmployee("Jay");
it.addEmployee("henry");

it.printEmployeeInformation();
it.describe();
console.log(it);
