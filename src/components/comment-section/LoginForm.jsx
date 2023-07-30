/* eslint-disable react/prop-types */

import { useContext, useRef, useState, closeModal } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";

const LoginForm = ({ toggle, setToggle, closeModal }) => {
  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = useState(false);

  const { token, setToken } = useAuthContext();

  const emailRef = useRef();

  const passwordRef = useRef();

  const handleSubmit = (e) => {
    // e.stopPropagation();
    e.preventDefault();

    setIsProcessing(true);

    try {
      axios
        .post("http://localhost:4000/api/v1/users/login", {
          email: emailRef.current.value,
          password: passwordRef.current.value,
        })
        .then((res) => {
          const { token } = res.data;
          console.log(token);
          setToken(token);
          localStorage.setItem("token", JSON.stringify(token));
          closeModal(false);
        });
    } catch (error) {
      console.log("Login failed:", error);
    }
  };

  const handleStopPropagation = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    // console.log(e.target);
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      onClick={(e) => handleStopPropagation(e)}
      className={` z-10 relative py-10 px-5 flex flex-col gap-5 min-w-[300px] w-[500px] min-h-[300px] bg-[#efe9dc] ${
        toggle ? "scale-0 hidden" : "animate-enter scale-100"
      }`}
    >
      <h1 className="text-2xl font-bold">Log In</h1>
      <p className="text-sm font-normal italic capitalize mt-[-5px]">
        fill in the form to log into your account
      </p>
      <input
        type="email"
        className="border border-slate-300 placeholder:text-slate-300 rounded-md py-2 px-2 text-sm pointer-events-auto"
        placeholder="Email Address"
        required
        title="Enter your email address"
        autoFocus
        ref={emailRef}
        name="email"
      />
      <input
        type="password"
        className="border border-slate-300 placeholder:text-slate-300 rounded-md py-2 px-2 text-sm pointer-events-auto"
        placeholder="Password"
        required
        title="Enter your password"
        ref={passwordRef}
        name="password"
      />
      <button
        type="submit"
        className="px-5 py-2 bg-[#849493] w-fit rounded-md hover:text-white transition-all pointer-events-auto"
      >
        {isProcessing ? <div className="loaders"></div> : <div>Log In</div>}
      </button>

      <button
        type="button"
        className="btn pointer-events-auto"
        onClick={() => setToggle(!toggle)}
      >
        Do not have an account?{" "}
        <span className="font-semibold no-underline hover:underliney transition-ally w-0y hover:w-fity pr-2 py-1 hover:bg-[#849493]y btn-animate">
          Sign Up
        </span>
      </button>
    </form>
  );
};

export default LoginForm;
