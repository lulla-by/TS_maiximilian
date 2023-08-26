import React from "react";


interface TodoListProps{
  items:{id:string,text:string}[];
}
//interface로 타입을 설정함으로써 TS는 items라는 props가 있다는 것을 이해함
const TodoList: React.FC<TodoListProps> = props => {
  return (
    <ul>
      {props.items.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
