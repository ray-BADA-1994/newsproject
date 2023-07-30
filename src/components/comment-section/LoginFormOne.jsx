import React from "react";

const LoginForm = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.3)]">
      <div className="h-screen flex justify-center items-center">
        <form className="max-w-[450px] h-fit py-5 px-5 bg-white">
          <input type="email" name="email" />
          <input type="password" name="password" />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
