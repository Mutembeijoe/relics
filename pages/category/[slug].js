import Layout from "../../components/Layout/layout";
import {useRouter} from 'next/router'
import ProductCardDisplay from "../../components/product-card-display/product-card-display.component";
import utilsStyles from "../../styles/utils.module.css";
import { getAllCategorySlugs, getAllProductsInCategory } from "../../libs/knex";

export default function Category({ products}) {
  // console.log(products)
  // const router = useRouter()
  // console.log(router)
  return (
    <Layout>
      <div className="container">
        {/* <h1>{category.category_name}</h1> */}
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
