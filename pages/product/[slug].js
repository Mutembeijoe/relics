import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Layout from "../../components/Layout/layout";
import { getAllProductSlugs, getProductBySlug } from "../../libs/knex";
import styles from "../../styles/product_page.module.scss";

const regex = /[\['\]]/gi;

export default function Product({ product }) {
  console.log(product);
  const options = ((product.options.sizes).replace(regex, '')).split(",")
  return (
    <Layout>
      <div className="container my-5">
        <div className={styles.layout}>
          <div className={`${styles.card} shadow p-3 mb-5 bg-white rounded`}>
            <img src={product.image_url} alt={product.product_name} />
          </div>
          <div className={styles.details}>
            <h2>{product.product_name}</h2>
            <p>{product.description}</p>
            <div className="">
              <span>KSh</span>
              <span>{product.price}</span>
            </div>
            <div>
              <Form>
                <Form.Row>
                  <Col>
                    <Form.Control type="number" placeholder="quantity" min={1} defaultValue={1}/>
                  </Col>
                  <Col>
                    <Form.Control as="select" custom>
                    <option value="">Select Value</option>
                    {options.map(option =>
                     <option value={option} key={option}>{option}</option> )
                    }
                    </Form.Control>
                  </Col>
                </Form.Row>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const slugs = await getAllProductSlugs();
  const paths = slugs.map((slug) => {
    return {
      params: {
        slug: slug.product_slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await getProductBySlug(params.slug);
  return {
    props: {
      product: product,
    },
  };
}
