import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

const Footer = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <p> Aktif :{theme}</p>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
};

export default Footer;
