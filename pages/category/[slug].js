import Head from "next/head";

import Layout from "../../components/Layout/layout";
import ProductCardDisplay from "../../components/product-card-display/product-card-display.component";

import { getAllCategorySlugs } from "../../database/Queries/category";
import { getAllProductsInCategory } from "../../database/Queries/product";

import utilsStyles from "../../styles/utils.module.css";


export default function Category({ products, slug }) {
  return (
    <Layout>
      <Head>
        <title>
          Category | {slug} - Cool Branded {slug}
        </title>
        <meta
          name="description"
          content={`Beautiful Branded ${slug}'s for cool people`}
        />
      </Head>
      <div className="container my-4">
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
  const slugs = await getAllCategorySlugs();
  const paths = slugs.map((slug) => {
    return { params: { slug: slug.category_slug } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const products = await getAllProductsInCategory(params.slug);
  return {
    props: {
      products,
      slug: params.slug,
    },
  };
}
