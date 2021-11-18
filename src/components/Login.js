import React, { useState } from "react";
import { useNavigate } from "react-router";
import { callApi } from "../util/api";

const Login = ({ setToken, setUsers }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <h1>Login</h1>

      <form
        onSubmit={async (event) => {
          event.preventDefault();

          const respObj = await callApi({
            url: `/users/login`,
            method: "POST",
            body: {
              user: {
                username,
                password,
              },
            },
          });

          console.log(respObj);
          if (respObj.data) {
            const userResp = await callApi({
              url: "/users/me",
              token: respObj.data.token,
            });
            console.log(userResp.data.username);
            setToken(respObj.data.token);
            setUsers(userResp.data.username);
            if (respObj.data.token) {
              navigate("/profile");
            }
          }
        }}
      >
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        ></input>
        <hr></hr>

        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <hr></hr>
        <button type="submit" disabled={!password || !username}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Login;
