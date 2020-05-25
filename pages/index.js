import Head from "next/head";
import axios from 'axios'
import Layout from "../components/Layout/layout";

export default function Home({categories:{data}}) {
  console.log(data)
  return (
    <Layout>
      <Head>
        <title>Home | Relics </title>
      </Head>
      <div className="container">
        <h1>Hello World</h1>
        <ul>
        {data.map(category => {
          return (
            <li key={category.ID}>{category.category_name}</li>
          )
        })}
        </ul>
       
      </div>
    </Layout>
  );
}

export async function getStaticProps(){
  const categories = await (await axios.get("http://localhost:8080/categories")).data
  return {
    props:{
      categories
    }
  }
}