/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useAuthContext } from "./context/AuthContext";

const InputForm = ({
  setToggle,
  buttonText = "Submit",
  initialValue = "",
  addNewComment,
  reloadComment,
  reload,
}) => {
  const { token } = useAuthContext();

  const [text, setText] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if the token is equal to null then, setToggle(true) so that the Login modal becomes open
    if (token == null) {
      setToggle(true);
      return;
    }

    if (text.length > 0) {
      addNewComment(text).then((res) => {
        alert(res);
        reloadComment(!reload);
        setText("");
      });
    }
  };

  return (
    <div className="input-form mb-5">
      <form
        className="flex flex-col gap-2 "
        onSubmit={(e) => handleSubmit(e)}
        method="Post"
      >
        <textarea
          placeholder="Leave a comment"
          className="border border-[#535a5f] py-1 px-2 bg-transparent text-[#181b19] text-sm font-normal placeholder:text-slate-400 placeholder:text-xs placeholder:italic min-h-[150px]"
          value={text}
          name="text"
          onChange={(e) => setText(e.target.value)}
          disabled={token === null ? true : false}
          title={
            token === null
              ? "You have to log in to comment"
              : "Please leave a comment"
          }
        ></textarea>
        <button className="px-3 py-1 font-semibold bg-[#849493] w-fit rounded-sm">
          {token ? buttonText : "Log In"}
        </button>
      </form>
    </div>
  );
};

export default InputForm;
