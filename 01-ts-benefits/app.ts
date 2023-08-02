let userInput : unknown;
let userName : string;

userInput= 5;
userInput ="max"

if(typeof userInput === 'string'){
  userName= userInput;
}

//never: 함수가 반환할 수 있는 타입 <-> void: 함수가 아무것도 반환하지 않는 타입

function generateError(message:string, code:number) :never {
  throw {message:message,errorCode:code}
}

generateError("에러 발생",500)