import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.models";

//FC: Function Component의 약자, 최근에는 사용하지 않는 추세(다른 부작용들 때문에), 대신 기본적인 fucntion사용
const App: React.FC = () => {
  // 이렇게 빈 배열로 state를 설정하면 TS는 이게 영원히 빈배열로 이뤄진다고 생각 => 무언가를 집어넣으면 에러 발생
  // const [todos,setTodos] = useState([]);

  // 이 state는 type이 string인 id와 type이 string인 text로 이루어진 객체의 배열이라고 알려줘야 함
  // todo.models.tes라는 파일 생성하여 interface 설정
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text },
    ]);

    console.log(todos);
  };
  return (
    <div className="App">
      {/* A component that adds todo */}
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
