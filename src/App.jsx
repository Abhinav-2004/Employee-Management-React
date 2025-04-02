import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
function App() {
  const [count, setCount] = useState(0);

  const username = "admin1@gmail.com";
  const password = "12345";

  // Encode in Base64
  const basicAuth = "Basic " + btoa(`${username}:${password}`);

  axios
    .get("http://localhost:8080/employees/1001", {
      headers: {
        Authorization: basicAuth,
      },
    })
    .then((response) => {
      console.log("Response Data:", response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  return (
    <>
      <div className="text-xl">hello world</div>
    </>
  );
}

export default App;
