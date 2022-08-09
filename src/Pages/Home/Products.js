import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../../Hoooks/useCart";
import Cart from "../Cart/Cart";
import CartSystem from "../Cart/CartSystem";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useCart();

  const handleAddToCart = (product) => {
    setCart(product);
    console.log(product);
  };

  useEffect(() => {
    fetch(`https://idbdev.com/motion2/public/api/product-is-here-caught-me`)
      .then((res) => res.json())
      .then((data) => setProducts(data.data));
  }, []);

  return (
    <div className="container my-5">
      <h1>All Products</h1>
      <div className="row ms-2">
        {products?.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      {/* <div>
        <Cart cart={cart}></Cart>
      </div> */}
    </div>
  );
};

export default Products;
