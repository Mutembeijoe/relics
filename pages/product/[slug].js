import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Layout from "../../components/Layout/layout";
import { getAllProductSlugs, getProductBySlug } from "../../libs/knex";
import styles from "../../styles/product_page.module.scss";

const regex = /[\['\]]/gi;

export default function Product({ product }) {
  console.log(product);
  const options = product.options.sizes.replace(regex, "").split(",");
  return (
    <Layout>
      <div className="container my-4">
        <div className={styles.layout}>
          <div>
            <div className={`${styles.card} shadow p-3 mb-5 bg-white rounded`}>
              <img src={product.image_url} alt={product.product_name}/>
            </div>
          </div>
          <div className={`${styles.sideCard} px-3`}>
            <Button variant="outline-primary rounded mb-3" size="lg">
              <i className="mdi mdi-arrow-left-bold mr-2"></i>
              <span className="font-weight-bold">Back to Product List</span> 
            </Button>
            <div>
              <h2 className="text-primary font-weight-bold">
                {product.product_name}
              </h2>
              <p className={styles.description}>{product.description}</p>
              <div className={styles.price}>
                <span className="text-muted">KSh</span>
                <span className="mx-1 text-primary">{product.price}</span>
              </div>
            </div>
            <div>
              <Form style={{ border: "0px solid black" }}>
                <Form.Row>
                  <Form.Group as={Col} sm={3} controlId="formQuantity">
                    <Form.Label column="lg" className="mb-1">
                      Qty
                    </Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="quantity"
                      min={1}
                      defaultValue={1}
                      size="lg"
                      className="rounded"
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formSizes">
                    <Form.Label column="lg" className="mb-1">
                      Size
                    </Form.Label>
                    <Form.Control
                      className="rounded"
                      as="select"
                      custom
                      size="lg"
                    >
                      <option value="">Select Value</option>
                      {options.map((option) => (
                        <option value={option} key={option}>
                          {option}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
                <Button
                  className="rounded"
                  variant="primary"
                  type="submit"
                  size="lg"
                  block
                >
                  <span className="font-weight-bold">Add To Cart</span>
                  <i className="mdi mdi-cart mx-2"></i>
                </Button>
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
