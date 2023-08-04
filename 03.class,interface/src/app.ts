abstract class Department {
 static fiscalYear = 2020;
  // private id : string;
  // private name: string;
  protected employees: string[] = [];

  // 필드를 찾은 다음 값을 저장해야 하는 이중 초기화 코드를 한 번에 처리하도록 축약한 것
  constructor(protected readonly id: string, public name: string) {}


  // static키워드를 사용하여 instance화 시키지 않음
  static createEmployee(name:string){
    return {name:name}
  }

  // 이 메소드의 형태와 메소드의 구조가 어떤 것ㄷ인지를 정의하고 있을 뿐, 그 외에는 아무것도 정하지 않음
  abstract describe(this: Department): void;
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

  describe() {
    console.log("IT Department - ID: "+ this.id);
  }
}

class AccountingDepartment extends Department {
private lastReport: string;
//3. private 속성의 static instance를 입력
private static instance:AccountingDepartment;

get mostRecentReport(){
  if(this.lastReport){
    return this.lastReport;
  }else{
    throw new Error("No report found!")
  }
}

set mostRecentReport(value:string){
  if(!value){
    throw new Error("Please pass in a valid value")
  }
  this.addReport(value)
}

//1. 클래스 내에서만 접근 가능하도록 private 추가
  private constructor(id: string,private reports:string[]) {
    super(id, "Accuonting");
    this.lastReport = reports[0];
  }

  //2. 클래스 자체에서 정적 메소드를 호출
  // 이 클래스의 인ㄴ스턴스가 이미 있는지 확인하고 새 인스턴스를 반환
  static getInstance(){
    if(AccountingDepartment.instance){
      return this.instance;
    }
    // 이제 클래스 메소드 안에 있기 때문에 사용이 가능
    this.instance = new AccountingDepartment("d2",[])
    return this.instance;
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

  describe(){
    console.log("Accounting Department - ID: "+this.id);
  }
}


const employee1 = Department.createEmployee("new Employee");
console.log(employee1, Department.fiscalYear);


// const accounting = new AccountingDepartment("d2",[]);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting, accounting2);


// *중요* getter는 메서드가 아니라 속성으로서 접근해야함!!!
// accounting.mostRecentReport
// *중요* setter는 메서드가 아니라 값으로 접근해야 함
// accounting.mostRecentReport = "" // 에러 반환
// accounting.mostRecentReport = "Year end Report"

// accounting.addReport("Something went wrong")
// accounting.printReport()
accounting.addEmployee("max")
accounting.addEmployee("anna")
// accounting.printEmployeeInformation()
// accounting.mostRecentReport
accounting.describe()

const it = new ITDepartment("d1", ["max"]);
it.addEmployee("Jay");
it.addEmployee("henry");
it.describe();

it.printEmployeeInformation();
it.describe();
// console.log(it);
