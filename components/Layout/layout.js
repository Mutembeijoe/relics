import Head from "next/head";
import Header from "../Header/header";
import styles from "./layout.module.scss";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.main}>
          <Header></Header>
          <main>{children}</main>
        </div>
        <footer>
          <p>Ndirangujoe &copy;{new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
}
