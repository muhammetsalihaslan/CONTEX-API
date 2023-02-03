import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const ChangeTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <p>Aktif tema:{theme} </p>
      <button onClick={toggleTheme}>ChangeTheme</button>
    </div>
  );
};

export default ChangeTheme;
