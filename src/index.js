import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Login from "./components/Login";
import Posts from "./components/Posts";
import Register from "./components/Register";
import CreatePost from "./components/CreatePost";
// import EditPost from "./components/EditPost";
import Profile from "./components/Profile";
import Messages from "./components/Messages";

const cohortName = "2108-ECE-RM-WEB-PT";
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

const App = ({}) => {
  const [token, setToken] = useState("");
  const [posts, setPosts] = useState([]);
  const [user, setUsers] = useState("");
  // const [postId, setPostId] = useState([]);
  const [userId, setUserId] = useState("");
  const [profile, setProfile] = useState({});
  console.log(userId);

  const navigate = useNavigate();
  const fetchPosts = async () => {
    const response = await fetch(`${APIURL}/posts`);
    const respObj = await response.json();
    const posts = respObj.data.posts;
    if (posts) setPosts(posts);
    // console.log(respObj)
    // setPosts(respObj.data.posts)
  };
  useEffect(() => {
    try {
      fetchPosts();
    } catch (error) {
      console.error(error);
    }
  }, [token]);

  return (
    <>
      <header>
        <h1> Stranger's Things</h1>

        <Link to="/">Home</Link>
        <br></br>
        <Link to="/posts"> Posts</Link>
        <br></br>
        <Link to="/account/login">Login</Link>
        <br></br>
        <Link to="/account/register">Register</Link>
        <br></br>
        <Link to="/profile">Profile</Link>

        <button
          className={token ? "" : "isLoggedIn"}
          onClick={() => {
            // change use state?
            navigate("/account/login");
          }}
        >
          Log Out!
        </button>
      </header>
      <h2>Welcome to the Stranger's Thing App</h2>
      <p>Please Register and/or Login if you wish to post and send messages!</p>

      <Routes>
        <Route
          path="/account/login"
          element={<Login setToken={setToken} setUsers={setUsers} />}
        />
        <Route
          path="/account/register"
          element={<Register setToken={setToken} setUsers={setUsers} />}
        />
        {/* In final version setToken shouldn't be in register, and be able to disable routes possibly if they aren't signed in...or not logged in */}
        {/* <Route path= "/account/:method" element={<Login setToken={setToken} setUser={setUser}/>}/>  */}
        <Route
          path="/posts"
          element={
            <>
              <CreatePost setPosts={setPosts} token={token} />{" "}
              {/* <EditPost
                setPosts={setPosts}
                token={token}
                postId={postId}
                setPostId={setPostId}
              />{" "} */}
              <Posts posts={posts} token={token} fetchPosts={fetchPosts} />
            </>
          }
        />
        {/* <Route exact path="/posts/:postId">
          <MessageView posts={posts} />
        </Route> */}
        <Route
          path="/profile"
          element={
            <Profile
              username={user}
              setUserId={setUserId}
              profile={profile}
              setProfile={setProfile}
            />
          }
        />
        <Route
          path="/messages"
          element={<Messages posts={posts} userId={userId} token={token} />}
        />
      </Routes>
    </>
  );
};
ReactDOM.render(
  <Router>
    <App />
  </Router>,

  document.getElementById("app")
);
