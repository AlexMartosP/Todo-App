// Context
import { useTheme } from "../../context/ThemeContext";
// Styles
import { Button } from "./FilterButtons.styles";

function FilterButtons({ filter, setFilter }) {
  const isDark = useTheme();

  return (
    <>
      <Button
        className={filter === "All" ? "active" : ""}
        onClick={() => setFilter("All")}
        isDark={isDark}
      >
        All
      </Button>
      <Button
        className={filter === "Active" ? "active" : ""}
        onClick={() => setFilter("Active")}
        isDark={isDark}
      >
        Active
      </Button>
      <Button
        className={filter === "Completed" ? "active" : ""}
        onClick={() => setFilter("Completed")}
        isDark={isDark}
      >
        Completed
      </Button>
    </>
  );
}

export default FilterButtons;
