import React from "react";
import { callApi } from "../util/api";
import { Link } from "react-router-dom";

const Posts = ({ posts, token, fetchPosts }) => {
  const handleDelete = async (postId) => {
    console.log("url: ", `/posts/${postId}`);
    const respObj = await callApi({
      method: "DELETE",
      url: `/posts/${postId}`,
      token,
    });
    console.log("respObj: ", respObj);
    await fetchPosts();
  };

  return (
    <>
      <h3>
        <u>List of Posts:</u>
      </h3>
      {posts.map((post) => (
        <div key={post._id}>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
          <p>{post.price}</p>
          <p>{post.location}</p>

          {token && (
            <button
              type="button"
              className="deleteButton"
              onClick={() => handleDelete(post._id)}
            >
              Delete
            </button>
          )}
          {post.isAuthor === false ? (
            <Link
              to="/messages"
              state={{ id: post._id }}
              className="buttonMessage"
            >
              Message
            </Link>
          ) : null}
        </div>
      ))}
    </>
  );
};

export default Posts;
