import "./App.css";
import ChangeTheme from "./components/ChangeTheme";
import Footer from "./components/Footer";
import { LangContextProvider } from "./contexts/LangContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import ChangeLang from "./components/ChangeLang";

function App() {
  return (
    <div>
      <LangContextProvider>
        <ThemeContextProvider>
          <ChangeTheme />
          <ChangeLang />
          <Footer />
        </ThemeContextProvider>
      </LangContextProvider>
    </div>
  );
}

export default App;
