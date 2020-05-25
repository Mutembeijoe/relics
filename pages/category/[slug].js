import Layout from "../../components/Layout/layout";
import axios from "axios";
import ProductCardDisplay from "../../components/product-card-display/product-card-display.component";
import utilsStyles from "../../styles/utils.module.css";

export default function Category({ payload: { category, products } }) {
  return (
    <Layout>
      <div>
        <h1>{category.category_name}</h1>
        <div className={utilsStyles.custom_flex_row}>
          {products.map((item) => {
            return <ProductCardDisplay key={item.ID} item={item} />;
          })}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:8080/categories");
  const categories = await res.json();
  const paths = categories.payload.map((category) => {
    return { params: { slug: category.category_slug } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allCategoryProducts = await axios.get(
    `http://localhost:8080/categories/${params.slug}/products`
  );

  const payload = allCategoryProducts.data;
  return {
    props: {
      payload,
    },
  };
}
