// import React, { useState } from "react";
// import { callApi } from "../util/api";

// const cohortName = "2108-ECE-RM-WEB-PT";
// const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

// // Include token here in createpost after I have that set up

// const EditPosts = ({ token, setPosts, postId, setPostId }) => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [location, setLocation] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log({ title, description, price, location });
//     const response = await callApi({
//       url: `/posts/${postId}`,
//       method: "PATCH",
//       token,
//       body: {
//         post: {
//           title,
//           description,
//           price,
//           location,
//         },
//       },
//     });
//     console.log("response: ", response);
//     const respPost = await callApi({ url: `/posts/${postId}`, token });
//     if (response && response.title) {
//       const newPosts = posts.map((post) => {
//         if (post._id === postId) {
//           return response;
//         } else {
//           return post;
//         }
//       });
//       setPosts(newPosts);
//       setTitle("");
//       setDescription("");
//       setPrice("");
//       setLocation("");
//       setPostId(null);
//     }
//     console.log("respPost: ", respPost);
//     console.log(setPosts);
//     // setPosts(respPost.data.posts);

//     // const response = await fetch(`${APIURL}/posts`, {
//     //     method: 'POST',
//     //     headers: {
//     //         'Content-type': 'Application/json',
//     //     },
//     //     body: JSON.stringify({
//     //         title,
//     //         body,
//     //     })
//     // });
//     // const data = await response.json();
//     // setPosts([data, ...posts]);
//     // setTitle('');
//     // setBody('');
//   };
//   return (
//     <>
//       <h3>Edit a Post</h3>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(event) => setTitle(event.target.value)}
//         ></input>
//         <input
//           type="text"
//           placeholder="Description"
//           value={description}
//           onChange={(event) => setDescription(event.target.value)}
//         ></input>
//         <input
//           type="text"
//           placeholder="Price"
//           value={price}
//           onChange={(event) => setPrice(event.target.value)}
//         ></input>
//         <input
//           type="text"
//           placeholder="Location"
//           value={location}
//           onChange={(event) => setLocation(event.target.value)}
//         ></input>
//         <button type="submit" className="btn btn-outline-primary">
//           Edit!
//         </button>
//       </form>
//     </>
//   );
// };

// export default EditPosts;
