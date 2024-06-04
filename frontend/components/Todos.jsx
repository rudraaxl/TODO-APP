export function Todos({ todos }) {
    return (
      <div className="todos-container">
        {todos && todos.length > 0 ? (
          todos.map(todo => (
            <div key={todo.id}>
              <h1>{todo.title}</h1>
              <h2>{todo.description}</h2>
              <button>{todo.completed ? "completed" : "Mark as completed"}</button>
            </div>
          ))
        ) : (
          <p>No todos available</p>
        )}
      </div>
    );
  }
  