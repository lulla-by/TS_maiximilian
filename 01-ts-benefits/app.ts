// unknown타입 !== any 타입
// 어떤 사용자가 무엇을 입력할지 알 수 없기 때문에 unknown타입
// 에러 발생없이 모든값을 할당 할 수 있음, 모~든것이 허용
let userInput : unknown;
let userName : string;

userInput= 5;
userInput ="max"

// unknown은 string에 할당 불가능, Type 'unknown' is not assignable to type 'string'.
// 하지만 userInput의 타입을 any로 변경하면 타입 확인을 수행하지 않게 하여 에러가 발생하지 않음
// unknown의 경우에는 조건문으로 타입 확인을 해야함

if(typeof userInput === 'string'){
  userName= userInput;
}

//unknown을 사용해서 unknown값을 고정된 값에 할당할 수 있으므로 unknown이 any보다 낫다
// 알 수 없는 정보로 타입체크가 가능함
// 물론 항상 알 수 있는 정보라면 unknown대신 문자열이나 유니언 타입을 쓰는것이 좋음