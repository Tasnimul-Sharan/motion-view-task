import React, { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import SocialLogin from "./SocialLogin/SocialLogin";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [updateProfile, updating] = useUpdateProfile(auth);
  const [sendEmailVerification, sending] = useSendEmailVerification(auth);

  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  let location = useLocation();
  const from = location.state?.from?.pathName || "/";

  if (user) {
    navigate(from, { replace: true });
    console.log(user);
  }

  if (error) {
    console.error(error);
  }

  if (loading) {
    return <Loading />;
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    if (password.length < 6) {
      setError("Your password must be in 6 number or longer");
    }

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    verifyEmail();
  };

  const verifyEmail = async () => {
    await sendEmailVerification();
    swal("Email verification Sent!", "Please Cheack your Email!", "success");
  };

  return (
    <div className="my-5">
      <h1>Sign Up</h1>
      <Card
        className="container p-5 form-group shadow-lg border-0 text-start "
        style={{ width: "25rem" }}
      >
        <Card.Body>
          <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter Name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>

            <Button variant="outline-primary w-100" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <p className="m-3">
        Already have an account?
        <Link className="text-primary text-decoration-none" to="/login">
          Please Login
        </Link>
      </p>
      <SocialLogin />
    </div>
  );
};

export default SignUp;
