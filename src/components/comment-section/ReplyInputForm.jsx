/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useAuthContext } from "./context/AuthContext";
import { replyCommentToApi } from "./HelperFunctions/HelperFunction";

const ReplyInputForm = ({
  //   setToggle,
  buttonText = "Submit",
  replyComment,
  hideInput,
  closeAction,
  //   initialValue = "",
  //   addNewComment,
  //   setRefrest,
}) => {
  // const { token } = useAuthContext();

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    replyComment(text);
    setText("");
    // closeAction({ type: "RESET" });
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
          className="border border-[#535a5f] py-1 px-2 bg-transparent text-[#181b19] text-sm font-normal placeholder:text-slate-400 placeholder:text-xs placeholder:italic min-h-[100px]"
          value={text}
          name="text"
          onChange={(e) => setText(e.target.value)}
          //   disabled={token === null ? true : false}
          //   title={
          //     token === null
          //       ? "You have to log in to comment"
          //       : "Please leave a comment"
          //   }
        ></textarea>
        <div className="flex gap-3">
          <button className="px-3 py-1 font-semibold bg-[#849493] w-fit rounded-sm">
            {buttonText}
          </button>
          <button
            className="px-3 py-1 font-semibold bg-[#849493] w-fit rounded-sm"
            onClick={() => closeAction({ type: "RESET" })}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReplyInputForm;
