import { useContext } from "react";
import React from "react";
import ThemeContext from "../contexts/ThemeContext";

const ChangeTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>Aktif tema:{theme} </p>
      <button onClick={toggleTheme}>ChangeTheme</button>
    </div>
  );
};

export default ChangeTheme;
