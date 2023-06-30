import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Logic = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const submitting = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: todo,
      completed: false,
    };
    setTodoList([...todoList, task]);
    setTodo("");
  };

  const remove = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const check = (id) => {
    const updatedTodoList = todoList.map((task) => {
      if (task.id === id) {
        console.log("completed");
        return { ...task, completed: true };
      } else {
        return task;
      }
    });
    

    setTodoList(updatedTodoList);
  };

  return (
    <div className="container">
      <h1 className="text-center mt-4">Todo List</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter task"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={submitting}
            >
              Submit
            </button>
          </div>
          <div>
            {todoList.map((task) => (
              <div key={task.id} className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">{task.taskName}</h5>
                  {task.completed && (
                    <p className="card-text text-success">Completed</p>
                  )}
                  <button
                    className="btn btn-danger"
                    onClick={() => remove(task.id)}
                  >
                    Delete
                  </button>
                  {!task.completed && (
                    <button
                      className="btn btn-success ml-2"
                      onClick={() => check(task.id)}
                    >
                      Complete
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logic;
