/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import InputForm from "./InputForm";
import { addCommentToApi } from "./HelperFunctions/HelperFunction";
import axios from "axios";
import { useAuthContext } from "./context/AuthContext";
import AuthPage from "./AuthPage";
import ReactDOM from "react-dom";
import { decodeToken, useJwt } from "react-jwt";
import Comment from "./Comment";

export const CommentContainer = ({ newstitle }) => {
  const { token, setNews, setNewsTitle, setToken } = useAuthContext();

  // console.log(newstitle);

  const [refresh, setRefrest] = useState(true);
  const [reload, setReload] = useState(false); // to reload the state after the comment has been added

  const [getComment, setGetComment] = useState([]);
  // console.log(getComment);
  const [toggle, setToggle] = useState(false);
  const parentComments = getComment.filter(
    (comment) => comment.isParent === true
  );
  const getReplies = (id) =>
    getComment.filter((comment) => comment.comment === id);

  const handleDecodeToken = () => {
    // THIS FUNCTION DECODES THE TOKEN SO THAT WE CAN EXTRACT THE USER ID AND NAME IF NECESSARY.
    const decodedTokens = decodeToken(token);
    return decodedTokens.id;
  };

  const addNewComment = async (text) => {
    const userId = await handleDecodeToken();
    addCommentToApi(text, newstitle, userId, token)
      .then((res) => {
        console.log(res);
        setReload(true);
        // setGetComment([res, ...getComment]);
      })
      .catch((err) => console.log(err));
    return "done";
  };

  const handleLogout = () => {
    // WE HANDLE LOGOUT BY SETTING THE TOKEN TO NULL AND CLEARING THE LOCALSTORAGE AND FINALLY RELOADING THE COMMMENTCONTAINER COMPONENT.
    localStorage.clear();
    setToken(null);
    // setReload(true);
  };

  // useEffect(() => {
  //   const savedToken = JSON.parse(localStorage.getItem("token"));
  //   if (savedToken) {
  //     setToken(savedToken);

  //     const response = axios(
  //       `http://localhost:4000/api/v1/blogs/${newstitle}/comments`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${savedToken}`,
  //         },
  //       }
  //     ).then((res) => {
  //       console.log(res);
  //       if (res.data.result > 0) {
  //         setGetComment(res.data.data.comments);
  //       }
  //     });
  //   }
  // }, [reload, token]);

  useEffect(() => {
    const savedToken = JSON.parse(localStorage.getItem("token")); // CHECKS IF THE PROPERTY OF 'token' EXIST IN THE  LOCAL STORAGE.
    if (savedToken) {
      setToken(savedToken); // THIS WILL UPDATE THE TOKEN VARIABLE IF THE LOCAL STORAGE HAS A "token" PROPERTY AVAILABLE.
    }
    const response = axios(
      `http://localhost:4000/api/v1/blogs/${newstitle}/comments`
    ).then((res) => {
      // console.log(res);
      if (res.data.result > 0) {
        setGetComment(res.data.data.comments);
      }
    });
  }, [reload, token]);

  return (
    <section className="comment-section my-5 pt-5 w-full">
      <div className="section-wrapper mx-auto w-[75%] flex flex-col gap-3">
        <header className="flex flex-col gap-2 mb-3">
          <h1 className="text-2xl font-bold">Disclaimer.</h1>
          <p className="text-sm italic font-medium">
            Comments here do not reflect the opinion of loctech news rather
            peoples reaction to the news!
            {/* Please leave a comment we would love to here from you on this
              matter */}
          </p>
        </header>
        <div className="space-y-2">
          <hr className="bg-[rgba(0,0,0,0.5)] h-[2px]" />
          <p className="text-xs flex gap-4">
            <span>You have to be logged in to make a comment</span>
            {token !== null && ( // IF THE USER IS LOGGED IN AND THE TOKEN EXISTS THEN DISPLAY THE LOG OUT BUTTON.
              <button
                className="text-xs px-3 py-1 font-semibold text-black bg-[#849493] w-fit rounded-sm"
                onClick={handleLogout}
              >
                Log out
              </button>
            )}
          </p>
        </div>

        <InputForm
          setToggle={setToggle}
          addNewComment={addNewComment}
          // setRefrest={setRefrest}
          reloadComment={setReload}
          reload={reload}
        />

        {parentComments.length > 0 &&
          parentComments.map((parentComment) => (
            <Comment
              key={parentComment.id}
              parentComment={parentComment}
              replies={getReplies(parentComment.id)}
              slug={newstitle}
              reloadComment={setReload}
              reload={reload}
              //  logginUserId={logginUserId}
              //  handleDelete={handleDelete}
              //  addNewComment={addNewComment}
              canReply={true}
              //  initialData={{getComment, setGetComment}}
            />
          ))}

        {/* <button
          onClick={handleDecodeToken}
          disabled={token ? false : true}
          className="py-2 px-3 text-white bg-black"
        >
          Decode Token
        </button> */}

        {toggle && // THIS IS TO TOGGLE THE LOGIN AND SIGN UP MODAL!..BOTH OF WHICH ARE CHILDREN OF THE AUTH PAGE
          ReactDOM.createPortal(
            <AuthPage closeModal={setToggle} />,
            document.getElementById("login_modal")
          )}
      </div>
    </section>
  );
};
