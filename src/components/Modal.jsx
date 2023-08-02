import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { app } from "../config/firebase.js";
import { getAuth } from "firebase/auth";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Modal = ({ handleCloseModal }) => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const auth = getAuth(app);
  const navigate = useNavigate();
  const handleShowSignUp = () => {
    setShowSignUp(true);
  };
  const handleShowLogin = () => {
    setShowSignUp(false);
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log("succesfully logged in");
      navigate("/home");
    } catch (error) {
      console.error(error.message);
    }
  };
  const handleSignUp = async () => {
    try {
       await createUserWithEmailAndPassword(
        auth,
        signupEmail,
        signupPassword
      );
      console.log("signed up");
      navigate("/home");
    } catch (error) {
      alert("error");
    }
  };

  return (
    <div className="login-modal">
      <div className="login">
        {showSignUp ? (
          <>
            <div className="modal-top">
              <h3 className="log">Sign Up</h3>
              <div className="close" onClick={handleCloseModal}>
                <AiOutlineClose />
              </div>
            </div>

            <button className="google">
              <FcGoogle />
              Sign up with Google
            </button>
            <div className="underline"></div>
            <form>
              <label htmlFor="Full name ">Full Name</label>
              <input type="text" placeholder="Grace" className="signup-input" />
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                placeholder="hahaha@gmail.com"
                onChange={(e) => {
                  setSignupEmail(e.target.value);
                }}
                className="signup-input"
              />
              <label className="label" htmlFor="password">
                Password
              </label>

              <input
                type="password"
                placeholder="slslsll"
                onChange={(e) => {
                  setSignupPassword(e.target.value);
                }}
                className="signup-input"
              />
              <button className="loginbtn" onClick={handleSignUp}>
                Sign Up
              </button>
              <span className="forgot">Forgot Password?</span>
              <div className="underline"></div>
              <div className="account">
                <span>Don't have an account?</span>
                <a href="#" onClick={handleShowLogin}>
                  Login
                </a>
              </div>
            </form>
          </>
        ) : (
          <>
            <div className="modal-top">
              <h3 className="log">Log in </h3>
              <div className="close" onClick={handleCloseModal}>
                <AiOutlineClose />
              </div>
            </div>

            <button className="google">
              <FcGoogle />
              Log in with Google
            </button>
            <div className="underline"></div>
            <form>
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                placeholder="hahaha@gmail.com"
                onChange={(e) => {
                  setLoginEmail(e.target.value);
                }}
                className="signup-input"
              />
              <label className="label" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                placeholder="dkdkkdkdk"
                onChange={(e) => {
                  setLoginPassword(e.target.value);
                }}
                className="signup-input"
              />
              <button className="loginbtn" onClick={handleLogin}>
                Log in
              </button>
              <span className="forgot">Forgot Password?</span>
              <div className="underline"></div>
              <div className="account">
                <span>Don't have an account?</span>
                <a href="#" onClick={handleShowSignUp}>
                  Sign up
                </a>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
