import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Product from "./components/Product";
import { getProducts } from "./api/products";

export default function Home() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    getProducts().then((res) => setProducts(res));
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Products page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Products!</a>
        </h1>
        {products &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </main>
    </div>
  );
}
