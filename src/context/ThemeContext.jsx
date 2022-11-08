import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);
const UpdateThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        setIsDark(e.matches);
      });
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <ThemeContext.Provider value={isDark}>
      <UpdateThemeContext.Provider value={setIsDark}>
        {children}
      </UpdateThemeContext.Provider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export function useUpdateTheme() {
  return useContext(UpdateThemeContext);
}
