/* eslint-disable react/prop-types */

import axios from "axios";
import { useRef } from "react";

const SignUpForm = ({ toggle, setToggle }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // e.stopPropagation();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/users/signup",
        {
          name: usernameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
          confirmPassword: confirmPasswordRef.current.value,
        }
      );

      console.log(response);

      if (response.data.status === "success ") {
        alert("Profile created!!!");
        setToggle(!toggle);
      }
    } catch (error) {
      console.log("Error-message:", error);
    }
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      onClick={(e) => e.stopPropagation()}
      className={` z-10 py-5 px-5 flex flex-col gap-5 min-w-[300px] w-[500px] min-h-[400px] bg-[#efe9dc] ${
        toggle ? " animate-enter scale-100 " : "scale-0 hidden"
      }`}
    >
      <h1 className="text-2xl font-bold">Sign Up</h1>
      <p className="text-sm font-normal italic capitalize mt-[-5px]">
        fill in the form to create an account
      </p>
      <input
        type="text"
        ref={usernameRef}
        className="border border-slate-300 placeholder:text-slate-300 rounded-md py-2 px-2 text-sm pointer-events-auto"
        placeholder="Username"
        required
        title="Enter your username"
        autoFocus
        name="userName"
      />
      <input
        type="email"
        ref={emailRef}
        className="border border-slate-300 placeholder:text-slate-300 rounded-md py-2 px-2 text-sm pointer-events-auto"
        placeholder="Email Address"
        required
        title="Enter your email address"
      />
      <input
        type="password"
        ref={passwordRef}
        className="border border-slate-300 placeholder:text-slate-300 rounded-md py-2 px-2 text-sm pointer-events-auto"
        placeholder="Password"
        required
        title="Enter your password"
      />
      <input
        type="password"
        ref={confirmPasswordRef}
        className="border border-slate-300 placeholder:text-slate-300 rounded-md py-2 px-2 text-sm pointer-events-auto"
        placeholder="Confirm password"
        required
        title="Confirm your password"
      />
      <button className="px-5 py-2 bg-[#849493] w-fit rounded-md hover:text-white transition-all pointer-events-auto">
        Sign Up
      </button>

      <button
        className="btn pointer-events-auto"
        onClick={() => setToggle(!toggle)}
      >
        Already have an account?{" "}
        <span className="font-semibold no-underline hover:underliney transition-ally w-0y hover:w-fity pr-2 py-1 hover:bg-[#849493]y btn-animate">
          Login
        </span>
      </button>
    </form>
  );
};

export default SignUpForm;
