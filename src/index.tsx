import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";
import "./shared/config/i18n/i18n";
import { ErrorBoundary } from "app/providers/error-boundary";
import { ThemeProvider } from "app/providers/theme-provider";

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById("root")
);
