import { useState } from "react";
import { cloneDeep } from "lodash";
import Task from "./components/Task";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const handleChangeText = (event) => {
    setTask(event.target.value);
  }

  const handleChangeEditText = (event, id) => {
    const newTodos = cloneDeep(todos);
    todos.forEach((todo, index) => {
      if (todo.id === id) {
        todo.task = event.target.value;
        newTodos.splice(index, 1, todo);
      }
    });
    setTodos(newTodos);
  }

  const handleSendButton = () => {
    const todo = {
      id: crypto.randomUUID(),
      task: task
    }
    const newTodos = [...todos, todo]
    setTodos(newTodos);
  }

  const handleDeleteButton = (id) => {
    const newTodos = cloneDeep(todos);
    todos.forEach((todo, index) => {
      if (todo.id === id) {
        newTodos.splice(index, 1);
      }
    });
    setTodos(newTodos);
  }

  return (
    <div>
      <input onChange={handleChangeText} />
      <button onClick={handleSendButton}>送信</button>
      <ul>
        {
          todos.map((todo, index) => (
            <Task key={index} index={index} todo={todo} handleChangeEditText={handleChangeEditText} handleDeleteButton={handleDeleteButton}></Task>
          ))
        }
      </ul>
    </div>
  );
}

export default App;