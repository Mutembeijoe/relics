import Head from "next/head";
import Header from "../Header/header";
import styles from "./layout.module.scss";
import { useState } from "react";
import cn from 'classnames'
import Cart from "../Cart/cart.component";

export default function Layout({ children }) {
  const [cartOpen, toggleCartOpen] = useState(false)

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={cn(styles.container, {[styles.containerCollapsed]:cartOpen})}>
        <div className={styles.main}>
          <Header toggleCartOpen={toggleCartOpen} cartOpen={cartOpen}></Header>
          <main className="pt-5">{children}</main>
        </div>
        <footer>
          <p>Ndirangujoe &copy;{new Date().getFullYear()}</p>
        </footer>
      </div>
      <Cart cartOpen={cartOpen} toggleCartOpen={toggleCartOpen}/>
    </div>
  );
}
