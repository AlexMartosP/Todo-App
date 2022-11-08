import { useState } from "react";
// Context
import { useTheme } from "../../context/ThemeContext";
// Components
import Checkbox from "../Checkbox";
// Styles
import { Input, Wrapper } from "./CreateTodo.styles";

function CreateTodo({ createTodo }) {
  const [input, setInput] = useState("");
  const isDark = useTheme();

  function handleSubmit(e) {
    e.preventDefault();

    if (input) {
      createTodo(input);
      setInput("");
    }
  }

  return (
    <Wrapper isDark={isDark}>
      <Checkbox />
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input
          isDark={isDark}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Create a new todo..."
        />
      </form>
    </Wrapper>
  );
}

export default CreateTodo;
