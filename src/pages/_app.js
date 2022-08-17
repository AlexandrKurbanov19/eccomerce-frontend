import { Provider } from "react-redux";
import { store } from "../store/store";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { GlobalStyle } from "../styles/global-style";

import { Header } from "../components/All";

import "../styles/vendors/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />;
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
