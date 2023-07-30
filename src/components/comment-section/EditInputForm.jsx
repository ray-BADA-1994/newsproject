/* eslint-disable react/prop-types */
import { useState } from "react";

const EditInputForm = ({ initialValue, handleEditingComment, closeAction }) => {
  const [text, setText] = useState(initialValue);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditingComment(text);
    setText("");
    // closeAction({ type: "RESET" });
    // console.log(text)
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
        ></textarea>
        <div className="flex gap-3">
          <button className="px-3 py-1 font-semibold bg-[#849493] w-fit rounded-sm">
            Update
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

export default EditInputForm;
