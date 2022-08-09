import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import CartSystem from "../Cart/CartSystem";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(`https://idbdev.com/motion2/public/api/product-is-here-caught-me`)
      .then((res) => res.json())
      .then((data) => setProducts(data.data));
  }, []);

  //   console.log(products);
  return (
    <div className="container my-5">
      <h1>All Products</h1>
      <div className="row ms-2">
        {products?.map((product) => (
          <Product
            key={product.id}
            product={product}
            // handleAddToCart={handleAddToCart}
            // Cart={Cart}
            // cart={cart}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
