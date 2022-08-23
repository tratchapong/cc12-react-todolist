import { useEffect, useState } from 'react';
import axios from 'axios';

import TodoContainer from './components/TodoContainer';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);
  const [options, setOptions] = useState('')

  const fetchTodos = async () => {
    try {
      const res = await axios.get('http://localhost:8080/todos' + options);
      setTodos(res.data.todos);
      console.log(res.data.todos[0])
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // axios
    //   .get('http://localhost:8080/todos')
    //   .then(res => {
    //     setTodos(res.data.todos);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    fetchTodos();
  }, [options]);

  const handleSubmitCreate = async title => {
    try {
      await axios.post('http://localhost:8080/todos', {
        title,
        completed: false
      });
      fetchTodos();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-5 mb-3" style={{ maxWidth: 576 }}>
      <div className="my-4">
        <TodoForm onSubmit={handleSubmitCreate} />
      </div>
      <TodoContainer todos={todos} fetchTodos={fetchTodos} setOptions={setOptions} />
    </div>
  );
}

export default App;
