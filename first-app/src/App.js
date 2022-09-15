// import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Card from "./components/card";
import Input from "./components/card/input";
import TodoList from "./components/card/TodoList";

function App() {
  const todos = [
    { id: "1", task: "Buy a new gaming laptop" },
    { id: "2", task: "Complete a previous task" },
    { id: "3", task: "Create video for youtube" },
    { id: "4", task: "Create a new portfolio site" },
  ];
  const [data, setData] = useState(todos);
  const [todo, setTodo] = useState("");

  function addTodo() {
    const newTodo = {
      id: Math.floor(Math.random() * 100),
      task: todo,
    };

    if (newTodo.task === "") {
      alert("Please fill in the required field");
    } else {
      setData([...data, newTodo]);
      setTodo("");
    }
  }

  useEffect(() => {
    alert("Welcome");
  }, []);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const deleteTodo = (id) => {
    const tempArr = data.filter((todo) => todo.id !== id);
    setData(tempArr);
  };

  const editTodo = (id, task) => {
    const newEdit = data.findIndex((todo) => todo.id === id);
    console.log(newEdit);
    const fEdit = data;
    fEdit.splice(newEdit, 1, {
      id: id,
      task: task,
    });
    setData([...fEdit]);
  };

  const removeAll = () => {
    setData([]);
  };

  return (
    <div className="App">
      <Card>
        <div className="todo-title">Todo App</div>
        <div className="todo-form">
          <Input
            placeholder="Add your new todo"
            value={todo}
            label={todos}
            onChange={handleChange}
          />

          <button className="add-btn" onClick={addTodo}>
            +
          </button>
        </div>

        {data.length > 0 ? (
          <div className="todo-list">
            {data.map((item, index) => {
              return (
                <TodoList
                  data={item.task}
                  key={index}
                  id={item.id}
                  getId={(id) => console.log(id, "id")}
                  getState={(state) => console.log(state, "state")}
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}
                />
              );
            })}
          </div>
        ) : (
          <div className="noTasks">No tasks added yet</div>
        )}
        {data.length > 0 && (
          <div className="todo-clear">
            <p>{`You have ${data.length} pending tasks`}</p>
            <button onClick={removeAll}>Clear All</button>
          </div>
        )}
      </Card>
    </div>
  );
}

export default App;
