import type { AppProps } from "next/app";
import { Development } from "../environments/Development";
// import "./_app.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Development>
      <Component {...pageProps} />
    </Development>
  );
};

export default App;
