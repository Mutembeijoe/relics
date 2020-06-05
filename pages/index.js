import Head from "next/head";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import Layout from "../components/Layout/layout";
import styles from "../styles/home_page.module.scss";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Relics | Nairobi's Online Store for Branded Fashion</title>
        <meta
          name="description"
          content="Nairobi's Online Shopping Store for Cool Branded Fashion items for movie fans and nerds. Delivered at your Door step!"
        />
      </Head>
      <div className={styles.sidebar}>
        <div className={`${styles.rotatedText} font-weight-bold`}>
          Get Some Relics Swag!
        </div>
        <div className={styles.emoticon} style={{ color: "#facc00" }}>
          <i className="mdi mdi-emoticon-cool mdi-48px"></i>
        </div>
      </div>
      <div className="container my-4">
        <div className="text-center">
          <h1 className="font-weight-bold">Get Some Relics Swag!</h1>
          <p>We have a collection of branded items that are a must have!</p>
          <p>Check out the links below and find your relic</p>
          <div className="animated infinite bounce delay-2s">
            <i
              className="mdi mdi-hand-pointing-right mdi-36px my-3 text-primary"
              style={{ transform: "rotate(90deg)" }}
            ></i>
          </div>
        </div>
        <div className="row justify-content-center">
          <Link href="/category/[slug]" as={`/category/tees`}>
            <a>
              <Card
                className={`${styles.card} shadow mx-3 mb-5 bg-white rounded`}
              >
                <div className={`${styles.cardImgBox}`}>
                  <img
                    src="/categories/t-shirt.png"
                    className={`${styles.cardImg}`}
                    alt="tshirt"
                  />
                </div>

                <Card.Body className={`${styles.cardBody}`}>
                  <Card.Title className="text-primary font-weight-bold">
                    <span className="mx-2">T-Shirts</span>
                    <i className="mdi mdi-arrow-right-bold" />
                  </Card.Title>
                </Card.Body>
              </Card>
            </a>
          </Link>
          <Link href="/category/[slug]" as={`/category/hoodies`}>
            <a>
              <Card
                className={`${styles.card} shadow mx-3 mb-5 bg-white rounded`}
              >
                <div className={`${styles.cardImgBox}`}>
                  <img
                    src="/categories/hoodie.png"
                    className={`${styles.cardImg}`}
                    alt="hoodie"
                  />
                </div>

                <Card.Body className={`${styles.cardBody}`}>
                  <Card.Title className="text-primary font-weight-bold">
                    <span className="mx-2">Hoodies</span>
                    <i className="mdi mdi-arrow-right-bold" />
                  </Card.Title>
                </Card.Body>
              </Card>
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
