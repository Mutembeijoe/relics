import Head from "next/head";
import Layout from "../components/Layout/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home | Relics </title>
      </Head>
      <main className="container">
        <h1>Hello World</h1>
      </main>

      <footer>
        <p>footer</p>
      </footer>
    </Layout>
  );
}
