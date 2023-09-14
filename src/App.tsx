import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { AdressFormProvider } from "./contexts/FormContext";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <AdressFormProvider>
          <CartProvider>
            <Router />
            <GlobalStyle />
          </CartProvider>
        </AdressFormProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
