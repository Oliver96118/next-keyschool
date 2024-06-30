import React, { useState } from "react";
const Login = () => {
  let [useId, setUserId] = useState("");
  let [pwd, setPwd] = useState("");
  const handleLogin = () => {
    fetch("http://localhost:3001/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((req) => {
        req.text().then((e) => {
          console.log(JSON.parse(e).msg);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div>
        <input
          value={useId}
          onChange={(e) => {
            setUserId(e.target.value);
          }}
        />
        <input
          value={pwd}
          onChange={(e) => {
            setPwd(e.target.value);
          }}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};
export default Login;
