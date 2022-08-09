import {
  faCartShopping,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import useCart from "../../Hoooks/useCart";

const CartSystem = ({ cart, name, ...props }) => {
  console.log(cart);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  //   const [cart] = useCart();

  return (
    <>
      <Button
        variant="info"
        onClick={toggleShow}
        className="ms-auto text-light"
      >
        <FontAwesomeIcon icon={faCartShopping}>{name}</FontAwesomeIcon>
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            {cart?.map((crt) => (
              <div class="row">
                <div class="col-md-7 center-item mx-auto">
                  <img src="#" alt="" />
                  <h5>{crt.name}</h5>
                </div>
                <div class="col-md-5 center-item">
                  <div class="input-group number-spinner">
                    <Button
                      variant="light"
                      id="case-minus"
                      class="btn btn-default"
                    >
                      <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                    </Button>
                    <input
                      id="case-number"
                      type="number"
                      min="0"
                      class="form-control text-center"
                      value="1"
                    />
                    <Button variant="light" class="btn btn-default">
                      <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                    </Button>
                  </div>
                  <h5>
                    $<span id="case-total">59</span>
                  </h5>
                  <img src="images/remove.png" alt="" class="remove-item" />
                </div>
              </div>
            ))}
          </div>
        </Offcanvas.Body>
        <Link to="/checkout">
          <Button className="w-100">Checkout page</Button>
        </Link>
      </Offcanvas>
    </>
  );
};

export default CartSystem;
