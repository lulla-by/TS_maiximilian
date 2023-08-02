class Department {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  describe(this:Department) {
    console.log(this.name);
  }
}

const accounting = new Department("Accounting");
accounting.describe()

const accountingCopy = {name:"Dummy",describe:accounting.describe }

// 이 경우에 this는 Department 타입의 객체를 참조하지 않음 
accountingCopy.describe() // undefined
// 이 객체에  describeCopy 속성을 추가했기 때문, 이 클래스나 정의된 특정 클래스를 기반으로 하지 않고 더미 객체로서 생성되는 것
console.log(accountingCopy); 

