import React from "react";

//FC: Function Component의 약자, 최근에는 사용하지 않는 추세(다른 부작용들 때문에), 대신 기본적인 fucntion사용
const App :React.FC = () => {

  const a:string = "string"

  return (
    <div className="App">
      <h1>{a}</h1>
    </div>
  );
}

export default App;
