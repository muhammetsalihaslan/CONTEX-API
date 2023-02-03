import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

const defaultTheme = localStorage.getItem("theme") || "light";

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

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

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("userTheme must be used within a ThemeProvider");
  }

  return context;
};

export default ThemeContext;
