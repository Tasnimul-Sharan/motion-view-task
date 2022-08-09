import {
  faCartShopping,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import CartSystem from "./CartSystem";

const options = [
  // {
  //   name: 'Enable backdrop (default)',
  //   scroll: false,
  //   backdrop: true,
  // },
  // {
  //   name: 'Disable backdrop',
  //   scroll: false,
  //   backdrop: false,
  // },
  {
    name: "Enable body scrolling",
    scroll: true,
    backdrop: false,
    placement: "end",
  },
  // {
  //   name: 'Enable both scrolling & backdrop',
  //   scroll: true,
  //   backdrop: true,
  // },
];

const Cart = () => {
  // let total = 0;
  // let shipping = 0;
  // let quantity = 0;
  // for (const product of cart) {
  //   quantity = quantity + product.quantity;
  //   total = total + product.price * product.quantity;
  //   shipping = shipping + product.shipping;
  // }

  return (
    <>
      {options.map((props, idx) => (
        <CartSystem key={idx} {...props} />
      ))}
    </>
  );
};

export default Cart;
