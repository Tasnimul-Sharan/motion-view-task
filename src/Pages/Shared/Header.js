import { signOut } from "firebase/auth";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Cart from "../Cart/Cart";
import shop from "../../image/shop.png";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img className="img-fluid" width={"60px"} src={shop} alt="" />
          <span>e shoppy</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown
              className="text-light"
              title="Products"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item className="text-light" href="#action/3.1">
                Shoes
              </NavDropdown.Item>
              <NavDropdown.Item className="text-light" href="#action/3.2">
                Watch
              </NavDropdown.Item>
              <NavDropdown.Item className="text-light" href="#action/3.3">
                Mobile Phone
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Head Phone</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Laptop</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Computer</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Special product
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link eventKey={2} href="#memes">
              <Cart />
            </Nav.Link>
            {user ? (
              <button
                className="btn btn-info text-light"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            ) : (
              <Nav.Link className="text-light" as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            <Nav.Link className="text-light">
              {user && <p>{user.displayName}</p>}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
