/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from "react";

import { useReducer, useState } from "react";
import InputForm from "./InputForm";
import { useAuthContext } from "./context/AuthContext";
import {
  deleteCommentToApi,
  replyCommentToApi,
  updateCommentToApi,
} from "./HelperFunctions/HelperFunction";
import { decodeToken } from "react-jwt";
import ReplyInputForm from "./ReplyInputForm";
import EditInputForm from "./EditInputForm";

const initialValues = {
  isReplying: false,
  isEditing: false,
  isDisabled: false,
};

const ActionTypes = {
  DELETE_COMMENT: "DELETE_COMMENT",
  REPLY_COMMENT: "REPLY_COMMENT",
  UPDATE_COMMENT: "UPDATE_COMMENT",
  EDIT_COMMENT: "EDIT_COMMENT",
  RESET: "RESET",
};

function reducer(state, action) {
  switch (action.type) {
    case ActionTypes.EDIT_COMMENT:
      return {
        ...state,
        isEditing: true,
        isDisabled: true,
      };
    case ActionTypes.REPLY_COMMENT:
      return {
        ...state,
        isReplying: true,
        isDisabled: true,
      };
    case ActionTypes.RESET:
      return {
        ...initialValues,
      };
    default:
      return state;
  }
}

const Comment = ({
  parentComment,
  replies,
  canReply,
  slug,
  reloadComment,
  reload,
}) => {
  // const [isReplying, setIsReplying] = useState(false);
  // const [isEditing, setIsEditing] = useState(false);
  const { token } = useAuthContext();

  const [state, dispatch] = useReducer(reducer, initialValues);

  const { isReplying, isEditing, isDisabled } = state;

  const handleDecodeToken = () => {
    if (token !== null) {
      const decodedTokens = decodeToken(token);
      return decodedTokens.id;
    }
    return null;
  };

  const canEditAndDelete = parentComment.user._id === handleDecodeToken();

  // console.log(parentComment.user.id, handleDecodeToken());

  const replyComment = async (text) => {
    const userId = await handleDecodeToken();
    replyCommentToApi(text, slug, userId, token, parentComment.id)
      .then((res) => {
        // console.log(res);
        if (res.data.status === "success") {
          alert("Successfully replied");
          reloadComment(!reload);
          dispatch({ type: "RESET" });
          // setIsReplying(false);
        }
      })
      .catch((err) => console.error(err));
  };

  const handleDeleteComment = async () => {
    deleteCommentToApi(parentComment.id, token).then((res) => {
      if (res.data.status === "Deleted successfully") {
        alert("Successfully deleted");
        reloadComment(!reload);
      }
    });
  };

  const handleEditingComment = async (text) => {
    updateCommentToApi(text, parentComment.id, token).then((res) => {
      if (res.data.status === "success") {
        alert("Successfully updated");
        reloadComment(!reload);
        dispatch({ type: "RESET" });
        // setIsEditing(false);
      }
    });
  };

  return (
    <div className="flex gap-2 justify-items-start">
      {/* USER IMAGE */}
      <div className="w-[30px] h-[30px] rounded-full bg-slate-600">
        {/* //use an image tag to display the user image */}
      </div>

      {/* COMMENT BODY */}
      <div className="flex-1 space-y-2">
        {/* USERNAME AND TIME AND COMMENT */}
        <div className="flex flex-col">
          {/* USERNAME AND DATE */}
          <div className="flex items-end gap-2">
            {/* username */}
            <h2 className="text-xs font-medium">{parentComment.user.name}</h2>
            {/* Date-time */}
            <p className="text-[10px]">
              <small>
                {new Date(parentComment.createdAt).toLocaleDateString()}
              </small>
            </p>
          </div>
          {/* USER COMMENT */}
          <p className="text-xs">{parentComment.reply}</p>
        </div>
        {/* REPLY, EDIT, DELETE */}
        <div className="action-buttons flex gap-2 items-center justify-start">
          {canReply && token && (
            <button
              className="text-[10px] border border-zinc-950 px-1 py-[2px] cursor-pointer disabled:border-zinc-400"
              // onClick={() => setIsReplying(true)}
              onClick={() => dispatch({ type: ActionTypes.REPLY_COMMENT })}
              disabled={isDisabled}
            >
              Reply
            </button>
          )}

          {canEditAndDelete && (
            <button
              className="text-[10px] border border-zinc-950 px-1 py-[2px] cursor-pointer disabled:border-zinc-400"
              // onClick={() => setIsEditing(true)}
              onClick={() => dispatch({ type: ActionTypes.EDIT_COMMENT })}
              disabled={isDisabled}
            >
              Edit
            </button>
          )}
          {canEditAndDelete && (
            <button
              className="text-[10px] border border-zinc-950 px-1 py-[2px] cursor-pointer disabled:border-zinc-400"
              onClick={() => handleDeleteComment()}
              disabled={isDisabled}
            >
              Delete
            </button>
          )}
        </div>

        {isReplying && (
          <ReplyInputForm
            buttonText="Reply"
            replyComment={replyComment}
            closeAction={dispatch}
            // hideInput={setIsReplying}
            // addNewComment={replyComment}
            // logginUserId={logginUserId}
            // commentId={parentComment.id}
            // action={"replyComment"}
          />
        )}

        {isEditing && (
          <EditInputForm
            initialValue={parentComment.reply}
            handleEditingComment={handleEditingComment}
            closeAction={dispatch}
          />
        )}

        {/* Replies to this particular comment */}
        {replies.length > 0 && (
          <div className="replies pl-4 mt-2">
            {replies.map((reply) => (
              <Comment
                replies={[]}
                parentComment={reply}
                key={reply.id}
                reloadComment={reloadComment}
                reload={reload}
                // logginUserId={logginUserId}
                canReply={false}
                // handleDelete={handleDelete}
                // addNewComment={addNewComment}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
