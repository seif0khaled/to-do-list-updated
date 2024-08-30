import { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const inputRef = useRef();

  const handleAddTodo = () => {
    const text = inputRef.current.value;
    const newItem = { completed: false, text };
    setTodos([...todos, newItem]);
    inputRef.current.value = "";
  };

  const handleItemDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDeleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className="text-center mb-4">To-Do List</h2>
            
            <div className="card shadow-sm">
              <div className="card-body">
                <ul className="list-group mb-3">
                  {todos.map(({ text, completed }, index) => {
                    return (
                      <li
                        key={index}
                        className={`list-group-item d-flex justify-content-between align-items-center ${completed ? "list-group-item-success" : ""}`}
                      >
                        <span
                          onClick={() => handleItemDone(index)}
                          style={{ textDecoration: completed ? "line-through" : "none", cursor: "pointer" }}
                        >
                          {text}
                        </span>
                        <button
                          onClick={() => handleDeleteItem(index)}
                          className="btn btn-danger btn-sm"
                        >
                          ❌
                        </button>
                      </li>
                    );
                  })}
                </ul>
                
                <div className="input-group">
                  <input
                    ref={inputRef}
                    className="form-control"
                    placeholder="Enter item..."
                  />
                  <button
                    className="btn btn-primary ms-2"
                    onClick={handleAddTodo}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
