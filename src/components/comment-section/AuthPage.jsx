/* eslint-disable react/prop-types */
import { useState } from "react";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

const AuthPage = ({ closeModal }) => {
  const [toggle, setToggle] = useState(false);

  const handleCloseModal = (event) => {
    // event.stopPropagation();
    console.log(event.target);
    closeModal(false);
  };
  return (
    <div
      className="fixed top-0 left-0 h-screen w-screen bg-[rgba(0,0,0,0.3)] flex justify-center items-center"
      onClick={handleCloseModal}
    >
      <SignUpForm
        toggle={toggle}
        setToggle={setToggle}
        closeModal={closeModal}
      />
      <LoginForm
        toggle={toggle}
        setToggle={setToggle}
        closeModal={closeModal}
      />
    </div>
  );
};

export default AuthPage;
