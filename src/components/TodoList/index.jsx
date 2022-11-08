import { memo, useRef } from "react";
// Framer motion
import { AnimatePresence, Reorder } from "framer-motion";
// Context
import { useTheme } from "../../context/ThemeContext";
// Component
import TodoItem from "../TodoItem";

const TodoList = ({ todos, setTodos, removeTodo, toggleChecked, filter }) => {
  const listRef = useRef(null);

  const isDark = useTheme();

  const filterTodos = (todo) => {
    switch (filter) {
      case "All":
        return true;
      case "Active":
        return todo.checked === false;
      case "Completed":
        return todo.checked === true;
    }
  };

  return (
    <AnimatePresence initial={false}>
      <Reorder.Group values={todos} axis="y" onReorder={setTodos} ref={listRef}>
        {todos.filter(filterTodos).map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            isDark={isDark}
            removeTodo={removeTodo}
            toggleChecked={toggleChecked}
            ref={listRef}
          />
        ))}
      </Reorder.Group>
    </AnimatePresence>
  );
};

export default memo(TodoList);
