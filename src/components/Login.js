import React, { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { callApi } from "../util/api";

const Login = ({ setToken, setUsers }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const [loggedIn, setLoggedin] = useState(false);

  // function logIn(response){
  //     if (response.data){
  //         setToken(response.data.token)
  //         if(response.data.token == ''){
  //             setLoggedin(false)
  //         }else{
  //             setLoggedin(true)
  //             navigate('/profile')
  //         }
  //     }
  // }

  // function isLoggedIn(){
  //         return token === ''
  // }

  // function logOut(){
  // Clear token from everywhere and directs them to a page
  // }

  return (
    <>
      <h1>Login</h1>
      {/* // we need to send a fetch request, so we can get the token
          // in order to get a token, the server wants... username and password 
          //When I hit submit it is supposed the username and password from the API. 
          
          */}

      <form
        onSubmit={async (event) => {
          event.preventDefault();
          // const URL = (`${APIURL}/users/login`)
          // console.log(URL)
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
          //    try{
          //     const response = await fetch(URL, {
          //         method: "POST",
          //         headers: {
          //             'Content-Type': 'application/json',
          //             // 'Authorization': 'Bearer ${token}'

          //         },
          //         body: JSON.stringify({
          //             user:{
          //                 username,
          //                 password
          //             }
          //         })
          //     })
          //     const responseObj = await response.json();
          //     console.log(responseObj)
          //     return responseObj

          //    } catch (error){
          //        console.error(error)

          //    }
          //    console.log(responseObj.data.token)
          //    console.log(responseObj)
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
          // if(respObj.data.token) {

          // setToken(responseObj.data.token)
          // navigate('/');
          // }
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
