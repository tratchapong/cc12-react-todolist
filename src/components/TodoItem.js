import axios from 'axios';
import { useState } from 'react';
import TodoContent from './TodoContent';
import TodoForm from './TodoForm';

function TodoItem(props) {
  const {isEditing, setEditId} = props
  // const [isEditing, setIsEditing] = useState(false);

  const handleSubmitEdit = async title => {
    try {
      await axios.put('http://localhost:8080/todos/' + props.todo.id, {
        title,
        completed: props.todo.completed
      });
      // setIsEditing(false);
      setEditId(-1)
      props.fetchTodos();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <li
      className={`list-group-item p-3 callout-${
        props.todo.completed ? 'success' : 'warning'
      }`}
    >
      {isEditing ? (
        <TodoForm
          onSubmit={handleSubmitEdit}
          onCancel={() => setEditId(-1)}
          initialValue={props.todo.title}
        />
      ) : (
        <TodoContent
          todo={props.todo}
          fetchTodos={props.fetchTodos}
          openEdit={() => setEditId(props.todo.id)}
        />
      )}
    </li>
  );
}

export default TodoItem;
