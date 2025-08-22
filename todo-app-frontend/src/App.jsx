import { useEffect, useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import { getTodos } from "./Servieces/itemeServices";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  // Load todos from backend
  useEffect(() => {
    const fetchTodos = async () => {
      const data = await getTodos();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo setTodos={setTodos} />
      <div className="items-container">
        <TodoItem1 todos={todos} setTodos={setTodos} />
      </div>
    </center>
  );
}

export default App;
