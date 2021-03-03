import React, { useState } from "react";

import auth from "./Firebase";

const App = () => {
  const [email, setuserEmail] = useState("");
  const [password, setuserpassword] = useState("");
  const [user, setuser] = useState(null);

  const Login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
        console.log("Your are login in");
      })
      .catch((error) => {
        console.log("Fetch Error :-S", error);
      });
  };

  const Resgister = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((respone) => {
        console.log(respone);
        console.log("Resgister");
      })
      .catch((error) => {
        console.log("Fetch Error :-S", error);
      });
  };

  return (
    <div className="app">
      <h2>My Login System</h2>
      <form>
        <label>user Name:</label>
        <input
          value={email}
          type="text"
          placeholder="Enter Your Name"
          required
          onChange={(e) => setuserEmail(e.target.value)}
        />
        <br />
        <label>Email:</label>
        <input
          value={password}
          type="password"
          placeholder="Enter Your Password"
          onChange={(e) => setuserpassword(e.target.value)}
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
