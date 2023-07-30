import axios from "axios";

export const addCommentToApi = async (text, blogId, userId, token) => {
  console.log(text, blogId, userId, token);
  const response = await axios.post(
    `http://localhost:4000/api/v1/blogs/${blogId}/comments`,
    {
      reply: text,
      // blog: blogId,
      user: userId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response;
};

export const replyCommentToApi = async (
  text,
  blogId,
  userId,
  token,
  parentCommentId
) => {
  console.log(text, blogId, userId, token, parentCommentId);
  const response = await axios.post(
    `http://localhost:4000/api/v1/blogs/${blogId}/comments`,
    {
      reply: text,
      user: userId,
      comment: parentCommentId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  console.log(response);

  return response;
};

export const updateCommentToApi = async (text, commentId, token) => {
  const response = await axios.patch(
    `http://localhost:4000/api/v1/comments/${commentId}`,
    {
      reply: text,
      // user: userId,
      // comment: parentCommentId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response;
};

export const deleteCommentToApi = async (commentId, token) => {
  const response = await axios.delete(
    `http://localhost:4000/api/v1/comments/${commentId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response;
};
