import React, { useState } from "react";
import "./App.css";
import axios from "axios";

axios.defaults.withCredentials = true;

console.log(process.env);

function App() {
  const [message, setMessage] = useState("");

  const giveMeCookie = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/sutike")
      .then((resp) => setMessage(resp.data.message))
      .catch((e) => console.error(e));
  };

  return (
    <div className="App App-header">
      <button onClick={giveMeCookie}>Give me a cookie pls</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
