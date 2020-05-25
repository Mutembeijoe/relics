import Head from "next/head";
import Header from "../Header/header";

export default function Layout({children}) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main>
          {children}
      </main>
      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
}
