import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import useCart from "../../Hoooks/useCart";

const Product = ({ product, handleAddToCart }) => {
  const { name, regular_price, sale_price, stock, image } = product;
  // console.log(productImage);
  return (
    <div className="g-4 col-sm-8 col-md-8 col-lg-4 mb-5">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={`https://idbdev.com/motion2/public/images/${image}`}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>Regular price : ${regular_price}</p>
            <p>Sale price : ${sale_price}</p>
            <p>Stock : {stock}</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="border-0">
          <Button onClick={() => handleAddToCart(product)}>Add To Cart</Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Product;
