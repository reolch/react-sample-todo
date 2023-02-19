import { useState } from "react";
import * as _ from "lodash";

function App() {
  const [ todos, setTodos ] = useState([]);
  const [ task, setTask ] = useState('');

  const handleChangeText = (e) => {
    setTask(e.target.value);
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
    const newTodos = [...todos];
    
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
            <div>
              <li id={index}>{todo.task}</li>
              <button onClick={() => handleDeleteButton(todo.id)}>削除</button>
            </div>
          ))
        }
      </ul>
    </div>
  );
}

export default App;