import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTeheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const values = {
    theme,
    toggleTeheme,
  };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
