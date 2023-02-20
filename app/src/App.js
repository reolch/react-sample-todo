import { useState } from "react";
import { cloneDeep } from "lodash";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const handleChangeText = (e) => {
    setTask(e.target.value);
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
    console.log(id);
    console.log(todos);
    const newTodos = cloneDeep(todos);

    todos.forEach((todo, index) => {
      if (todo.id === id) {
        newTodos.splice(index, 1);
      }
    });
    console.log('new' + newTodos);
    setTodos(newTodos);
  }

  return (
    <div>
      <input onChange={handleChangeText} />
      <button onClick={handleSendButton}>送信</button>
      <ul>
        {
          todos.map((todo, index) => (
            <div key={index}>
              <li id={index}><input type='text' onChange={(event) => handleChangeEditText(event, todo.id)} value={todo.task}></input></li>
              <button onClick={() => handleDeleteButton(todo.id)}>削除</button>
            </div>
          ))
        }
      </ul>
    </div>
  );
}

export default App;