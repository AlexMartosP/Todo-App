// Components
import Checkbox from "../Checkbox";
// Icons
import { ReactComponent as X } from "../../images/icon-cross.svg";
// Styles
import { Wrapper } from "./TodoItem.styles";
import { motion, Reorder } from "framer-motion";
import { forwardRef } from "react";

const TodoItem = forwardRef(
  ({ todo, isDark, removeTodo, toggleChecked }, ref) => {
    return (
      <Reorder.Item
        value={todo}
        drag="y"
        dragConstraints={ref}
        dragElastic={0.02}
      >
        <Wrapper
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.2, delay: 0.2 },
          }}
          exit={{ transition: { duration: 0.2, delay: 0.2 } }}
          isDark={isDark}
        >
          <Checkbox
            isChecked={todo.checked}
            toggleChecked={() => toggleChecked(todo.id)}
          />
          <p className={todo.checked ? "completed" : ""}>{todo.body}</p>
          <button className="remove" onClick={() => removeTodo(todo.id)}>
            <X />
          </button>
        </Wrapper>
      </Reorder.Item>
    );
  }
);

export default TodoItem;
