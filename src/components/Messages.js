import React, { useState } from "react";
import { callApi } from "../util/api";
import { useLocation } from "react-router-dom";

const Messages = ({ posts, token }) => {
  const [message, setMessage] = useState("");
  const location = useLocation();
  const { id } = location.state;
  async function sendMessage(message) {
    try {
      await callApi({
        url: `/posts/${id}/messages`,
        method: "POST",
        token,
        body: {
          message: {
            content: message,
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>Send a Message: </h1>
      {posts.map((post) =>
        id === post._id ? (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <h3>{post.price}</h3>
            <h3>{post.description}</h3>
            <h3>{post.location}</h3>
            <form
              onSubmit={async (event) => {
                event.preventDefault();
                sendMessage(message);
                setMessage("");
              }}
            >
              <input
                type="text"
                placeholder="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              ></input>
              <button>Send Message</button>
            </form>
          </div>
        ) : null
      )}
    </>
  );
};
export default Messages;
