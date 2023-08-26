import React from "react";
import TodoList from "./components/TodoList";
import NewTodo from './components/NewTodo';

//FC: Function Component의 약자, 최근에는 사용하지 않는 추세(다른 부작용들 때문에), 대신 기본적인 fucntion사용
const App :React.FC = () => {
  const todos = [{ id: "t1", text: "Finish the course" }];
  const todoAddHandler = (text:string) =>{
    console.log(text)
  }
  return (
    <div className="App">
      {/* A component that adds todo */}
      <NewTodo onAddTodo={todoAddHandler}/>
      <TodoList items = {todos} />
    </div>
  );
}

export default App;
