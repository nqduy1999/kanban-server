import "../styles/global.css";
import { ThemeProvider } from "next-themes";

import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider enableSystem={true} attribute="class">
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
