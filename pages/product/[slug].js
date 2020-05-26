import Button from "react-bootstrap/Button";
import Layout from "../../components/Layout/layout";
import { getAllProductSlugs, getProductBySlug } from "../../libs/knex";
import styles from "../../styles/product_page.module.scss";
import AddToCart from "../../components/Add_to_Cart_Form/add-to-cart-form";

const regex = /[\[' \]]/gi;

export default function Product({ product }) {
  console.log(product);
  const options = product.options.sizes.replace(regex, "").split(",");
  return (
    <Layout>
      <div className="container my-4">
        <div className={styles.layout}>
          <div>
            <div className={`${styles.card} shadow p-3 mb-5 bg-white rounded`}>
              <img src={product.image_url} alt={product.product_name} />
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
              <AddToCart options={options}/>
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
