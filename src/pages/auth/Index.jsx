import React from "react";
import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Auth() {
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    const result = await signInWithPopup(auth, provider);
    const authInfo = {
      userId: result.user.uid,
      email: result.user.email,
      name: result.user.displayName,
      profilePhoto: result.user.photoURL,
      isAuth: true,
    };
    localStorage.setItem("auth", JSON.stringify(authInfo));
    navigate("/expense-tracker");
  };
  return (
    <div className="login-page">
      <p>SignIn with google</p>
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
    </div>
  );
}

export default Auth;
