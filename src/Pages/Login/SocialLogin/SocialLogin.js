import React from "react";
// import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import google from "../../../image/google.png";

import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const navigate = useNavigate();

  let location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
    console.log(user);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <button
        className="btn btn-outline-info"
        onClick={() => signInWithGoogle()}
      >
        {" "}
        <img src={google} alt="" />
        <span className="m-1">Sign In With Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
