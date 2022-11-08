import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
// Components
import CreateTodo from "./CreateTodo";
import TodosWrapper from "./TodosWrapper";

function initialState() {
  const localTodos = localStorage.getItem("todos");

  if (localTodos) {
    return JSON.parse(localTodos);
  } else {
    return [
      {
        id: uuidv4(),
        body: "Play games",
        checked: false,
      },
      {
        id: uuidv4(),
        body: "Yes man",
        checked: true,
      },
    ];
  }
}

function Todos() {
  const [todos, setTodos] = useState(initialState);

  const createTodo = (input) => {
    setTodos((prev) => [
      { id: uuidv4(), body: input, checked: false },
      ...prev,
    ]);
  };

  const toggleChecked = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => todo.checked === false));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container wrapper">
      <CreateTodo createTodo={createTodo} />
      <TodosWrapper
        todos={todos}
        setTodos={setTodos}
        toggleChecked={toggleChecked}
        removeTodo={removeTodo}
        clearCompleted={clearCompleted}
      />
    </div>
  );
}

export default Todos;
