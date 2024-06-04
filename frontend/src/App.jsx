import React, { useEffect, useState } from 'react';
import './App.css';
import './index.css';
import { CreateTodo } from '../components/CreateTodo';
import { Todos } from '../components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/todos");
        if (!response.ok) {
          throw new Error("Failed to fetch todos");
        }
        const json = await response.json();
        console.log(json); // Log the JSON data received from the server
        console.log(json.allTodos); // Log the allTodos array
        setTodos(json.allTodos || []); // Update state with the allTodos array (or empty array if undefined)
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchData(); // Fetch data immediately when component mounts
    const intervalId = setInterval(fetchData, 5000); // Fetch data every 5 seconds

    return () => clearInterval(intervalId); // Clean up interval when component unmounts
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className="card-container">
      <div className="header-container">
        TODO APP
      </div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
