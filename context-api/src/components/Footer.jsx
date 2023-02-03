import { useTheme } from "../contexts/ThemeContext";

const Footer = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <p> Aktif :{theme}</p>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
};

export default Footer;
