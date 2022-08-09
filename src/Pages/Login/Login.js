import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
// import auth from "../../../firebase.init";
// import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [signInWithEmailAndPassword, user, loading] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const resetPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      swal("Hey ! Please check your email!");
    } else {
      swal("Please Enter an Email");
    }
  };

  const navigate = useNavigate();

  let location = useLocation();
  const from = location.state?.from?.pathName || "/";
  console.log(from);

  if (user) {
    navigate(from, { replace: true });
  }

  if (loading || sending) {
    return <Loading />;
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    if (email !== password) {
      setError("Please Enter an Valid Email or Password");
    }
    await signInWithEmailAndPassword(email, password);

    const { data } = await axios.post(
      "https://idbdev.com/motion2/public/api/login",
      {
        email,
      }
    );
    console.log(data);
  };

  return (
    <div className="my-5">
      <h1>Log In</h1>
      <Card
        className="container p-5 form-group shadow-lg border-0 text-start "
        style={{ width: "25rem" }}
      >
        <Card.Body>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <p className="text-danger">{error}</p>
            <Button variant="outline-primary w-100" type="submit">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <p className="m-3">
        <Link className="text-primary text-decoration-none" to="/signup">
          <Button variant="success">Create a new account</Button>
        </Link>
      </p>
      <p>
        Forget password?{" "}
        <Button
          className="text-decoration-none"
          variant="link"
          onClick={resetPassword}
        >
          Reset Password
        </Button>
      </p>
      <SocialLogin />
    </div>
  );
};

export default Login;
