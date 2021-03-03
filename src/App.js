import React, { useState } from "react";

const App = () => {
  const [userName, setuserName] = useState("");
  const [userPassword, setuserPassword] = useState("");

  const Login = () => {
    console.log("Your are login in");
  };

  const Resgister = () => {
    console.log("Resgister");
  };

  return (
    <div className="app">
      <h2>My Login System</h2>
      <form action="#">
        <label for="name">user Name:</label>
        <input
          value={userName}
          type="text"
          placeholder="Enter Your Name"
          required
          onChange={(e) => setuserName(e.target.value)}
        />
        <br />
        <label for="Email:">user Email:</label>
        <input
          value={userPassword}
          type="password"
          placeholder="Enter Your Password"
          onChange={(e) => setuserPassword(e.target.value)}
        />
        <br />
        <button type="submit" onClick={Login}>
          Login In
        </button>
        <button type="submit" onClick={Resgister}>
          Resgister
        </button>
      </form>
    </div>
  );
};

export default App;
