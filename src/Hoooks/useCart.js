import { useEffect, useState } from "react";

const useCart = (product) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    let newCart = [...cart, product];
    setCart(newCart);
    console.log(cart);
  }, [product]);
  //   const handleAddToCart = (product) => {
  //     // console.log(product);
  //     let newCart = [...cart, product];
  //     setCart(newCart);
  //   };

  return [cart, setCart];
};

export default useCart;
