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
  // const handleEdit = async (postId) => {
  //   console.log("url: ", `/posts/${postId}`);
  //   const respObj = await callApi({
  //     method: "PATCH",
  //     url: `/posts/${postId}`,
  //     token,
  //     body: {
  //       // post: {
  //       //   title,
  //       //   description,
  //       //   price,
  //       //   location,
  //       // },
  //     },
  //   });
  //   console.log("respObj: ", respObj);
  //   await fetchPosts();
  // };

  // const [postsx, setPosts] = useState([]);
  // const handleDelete = async (postIdToDelete) => {
  //   console.log("postIdToDelete ", postIdToDelete);
  //   const response = await fetch(`${APIURL}/posts/${postIdToDelete}`, {
  //     method: "DELETE",
  //     token,
  //   });
  //   const data = await response.json();
  //   console.log("data: ", data);
  //   if (data) {
  //     const newPosts = posts.filter((post) => post._id !== postIdToDelete);
  //     setPosts(newPosts);
  //   }
  // };
  return (
    <>
      <h3>
        <u>List of Posts:</u>
      </h3>
      {posts.map((post) => (
        /* console.log(post)*/
        <div key={post._id}>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
          <p>{post.price}</p>
          <p>{post.location}</p>
          {/* {token && (
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => handleEdit(post._id)}
            >
              Edit
            </button>
          )} */}
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
