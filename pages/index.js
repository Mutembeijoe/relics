import Head from "next/head";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import Layout from "../components/Layout/layout";
import styles from "../styles/home_page.module.scss";

export default function Home({ slugs }) {
  return (
    <Layout>
      <Head>
        <title>Home | Relics </title>
      </Head>
      <div className="container my-5 text-center">
        <h5 className="text-primary">This site is Under construction</h5>
        <div className={`${styles.progressBox} my-4`} >
        <ProgressBar className={styles.progressBar} variant="info" now={10} label={`10%`} animated />
        </div>
        
        <div>
          <div className={styles.cardDisplay}>
            <Card
              style={{ width: "18rem" }}
              className="p-3 rounded shadow p-3 mb-5 bg-white rounded mx-3"
            >
              <Card.Img
                variant="top"
                src="/categories/t-shirt.png"
                className="img-fluid"
              />
              <Card.Body>
                <Link href="/category/[slug]" as={`/category/t-shirts`}>
                  <a>
                    <Card.Title className="text-primary font-weight-bold">
                      
                      <span className="mx-2">T-Shirts</span>
                      <i className="mdi mdi-arrow-right-bold" />
                    </Card.Title>
                  </a>
                </Link>
              </Card.Body>
            </Card>
            <Card
              style={{ width: "18rem" }}
              className="p-3 rounded shadow p-3 mb-5 bg-white rounded mx-3"
            >
              <Card.Img
                variant="top"
                src="/categories/hoodie.png"
                className="img-fluid"
              />
              <Card.Body>
                <Link href="/category/[slug]" as={`/category/t-shirts`}>
                  <a>
                    <Card.Title className="text-primary font-weight-bold">
                    <span className="mx-2">Hoodies</span>
                      <i className="mdi mdi-arrow-right-bold" />
                    </Card.Title>
                  </a>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
