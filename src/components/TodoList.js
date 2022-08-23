import {useState} from 'react'
import TodoItem from "./TodoItem";

function TodoList(props) {
  const [editId, setEditId] = useState(-1);
  return (
    <ul className="list-group my-2">
      {props.todos.map((item) => (
        <TodoItem
          key={item.id}
          todo={item}
          fetchTodos={props.fetchTodos}
          isEditing={editId === item.id}
          setEditId={setEditId}
        />
      ))}
    </ul>
  );
}

export default TodoList;
