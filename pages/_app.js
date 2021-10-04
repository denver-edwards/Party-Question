import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Party Questions</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
