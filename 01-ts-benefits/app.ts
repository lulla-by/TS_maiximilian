function add(n1: number, n2: number, showResult:boolean,pharse:string) {
  // if(typeof n1 !== 'number' || typeof n2 !=='number'){
  //   throw new Error("Incorrect input!")
  // }
  const result = n1 + n2
  if(showResult){
    console.log(pharse + result)
  }else{
    return result;
  }
}

const number1 = 5; //5.0 본질적으로 같은 숫자
const number2 = 2.8;
const printResult = true;
const resultPharse = 'Resulte is: ';

const result = add(number1, number2,printResult,resultPharse);