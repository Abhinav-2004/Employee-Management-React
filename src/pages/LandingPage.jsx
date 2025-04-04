import React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";

const LandingPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function handleLogin() {
    const basicAuth = "Basic " + btoa(`${username}:${password}`);

    await axios
      .get(`http://localhost:8080/users/${username}`, {
        headers: {
          Authorization: basicAuth,
        },
      })
      .then((response) => {
        document.cookie = `username=${username}; path=/`;
        document.cookie = `password=${password}; path=/`;
        console.log("Response Data:", response.data);
        window.location.href = "/dashboard";
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Invalid username or password");
      });
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[50vh]">
        <input
          type="text"
          placeholder="Username"
          className="border-2 border-gray-300 rounded-md p-2 m-2"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          type="password"
          placeholder="Password"
          className="border-2 border-gray-300 rounded-md p-2 m-2"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Button variant="contained" onClick={handleLogin}>
          Login
        </Button>
      </div>
    </>
  );
};

export default LandingPage;
