import { useState } from "react";

function App() {
  const initialTodosState = [
    {
      task: 'initialTask'
    }
  ];
  const [todos, setTodos] = useState(initialTodosState);
  const [task, setTask] = useState('');

  const handleChangeText = (e) => {
    setTask(e.target.value);
  }

  const handleSendButton = () => {
    const todo = { task: task }
    const newTodos = [...todos, todo]
    setTodos(newTodos);
  }

  return (
    <div>
      <input onChange={handleChangeText} />
      <button onClick={handleSendButton}>送信</button>
      <ul>
        {
        todos.map((todo, index) => (
          <li id={index}>{todo.task}</li>
        ))
        }

      </ul>
    </div>
  );
}

export default App;