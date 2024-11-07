import "./styles/index.scss";
import { classNames } from "shared/lib/classnames/classnames";
import { useTheme } from "./providers/theme-provider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/navbar";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <button onClick={toggleTheme}>TOGGLE</button>
      <AppRouter />
    </div>
  );
};

export default App;
