import Layout from "../../components/Layout/layout";
import ProductCardDisplay from "../../components/product-card-display/product-card-display.component";
import utilsStyles from "../../styles/utils.module.css";
import { getAllCategorySlugs } from "../../database/Queries/category";
import { getAllProductsInCategory } from "../../database/Queries/product";

export default function Category({ products}) {
  return (
    <Layout>
      <div className="container">
        <div className={utilsStyles.custom_flex_row}>
          {products.map((product) => {
            return <ProductCardDisplay key={product.id} item={product} />;
          })}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const slugs = await getAllCategorySlugs()
  const paths = slugs.map((slug) => {
    return { params: { slug:slug.category_slug } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const products = await getAllProductsInCategory(params.slug)
  return {
    props: {
      products,
    },
  };
}
