'use client'
import styles from "./page.module.css";
import Product from "./components/product";
import { useState , useEffect } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect (() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products");
        const result = await response.json();
        if (response.ok) {
          console.log("Products:", result.data);
          setProducts(result.data);
        } else {
            console.error("Error fetching products:", result.error);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
    fetchProducts();
  },[]);
  return (  

      <div className={styles.content}>

        <div className={styles.mainContent}> 
          {products?.map((product) => (
            <Product key={product._id} product={product} />
          ))}

        </div>
      </div>
  );
}
  