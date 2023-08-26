import React from "react";

interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}
//interface로 타입을 설정함으로써 TS는 items라는 props가 있다는 것을 이해함
const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          {/* bind를 사용하여 this를 지정, 이경우에는 상관없어서 null로 지정, 두번째 매개변수가 onDeleteTodo가 받을 첫 번째 매개변수가 될 것*/}
          {/* 버튼이 클릭되었을 때 onDeleteTodo 함수를 호출하면서 해당 항목의 id를 전달하는것이 목표 */}
          {/* 그런데 map 함수에서 생성되는 각 버튼의 onClick 핸들러는 그냥 함수 레퍼런스로 전달되며, 인자를 직접 전달할 수 없음 */}
          {/* 따라서 bind 메서드를 사용해서 인자를 전달 */}
          <button onClick={props.onDeleteTodo.bind(null, todo.id)}>
            DELETE
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
