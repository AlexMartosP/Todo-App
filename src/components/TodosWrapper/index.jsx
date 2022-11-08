import { useEffect, useState } from "react";
// Framer motion
import { motion } from "framer-motion";
// Context
import { useTheme } from "../../context/ThemeContext";
// Components
import FilterButtons from "../FilterButtons";
import TodoList from "../TodoList";
// Styles
import { Bottom, Filter, Wrapper } from "./TodosWrapper.styles";

function TodosWrapper({
  todos,
  setTodos,
  clearCompleted,
  removeTodo,
  toggleChecked,
}) {
  const [filter, setFilter] = useState("All");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  const isDark = useTheme();

  return (
    <>
      <Wrapper
        as={motion.div}
        layout
        transition={{ layout: { duration: 0.2 } }}
        isDark={isDark}
      >
        <TodoList
          todos={todos}
          setTodos={setTodos}
          removeTodo={removeTodo}
          toggleChecked={toggleChecked}
          filter={filter}
        />
        <Bottom
          isDark={isDark}
          as={motion.div}
          layout
          transition={{ layout: { duration: 0.2 } }}
        >
          <p>
            {todos.length} {todos.length > 1 ? "items" : "item"} left
          </p>
          {windowWidth >= 767 && (
            <div>
              <FilterButtons filter={filter} setFilter={setFilter} />
            </div>
          )}
          <button onClick={clearCompleted}>Clear Completed</button>
        </Bottom>
      </Wrapper>
      {windowWidth < 767 && (
        <Filter isDark={isDark}>
          <FilterButtons filter={filter} setFilter={setFilter} />
        </Filter>
      )}
    </>
  );
}

export default TodosWrapper;
