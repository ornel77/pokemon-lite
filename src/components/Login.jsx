import { useState } from "react";
import { Link } from "react-router-dom";

function login() {
  const [usernername, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => event.preventDefault();
  // const handleChange = (event) => {
  //   setUsername(event.target.value);
  // };
  return (
    <div className="login">
      <h1>WELCOME</h1>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="Username">Username</label> */}
        <input
          id="username"
          type="text"
          value={usernername}
          placeholder="Username"
          onChange={(event) => setUsername(event.target.value)}
        />
        {/* <label htmlFor="Password">Password</label> */}
        <div className="passwordInput">
          <input
            id="password"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
          {/* <img src="./src/assets/icon/oeil.png" alt="eyes" /> */}
          <span>Forget password ?</span>
        </div>
        <Link to="/Path" className="linkLogin">
          <input id="login" type="submit" value="Login" />
        </Link>
        <p>
          Don&apos;t have an account ? <span>Sign-up</span>
        </p>
      </form>
    </div>
  );
}

export default login;
