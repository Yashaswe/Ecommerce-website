import {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
const Login=()=>{
    
  const [error, setError] = useState(null);
  const [loading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  async function loginUser() {
    fetch("http://localhost:3001/login", {
      method: "POST",
      body: JSON.stringify({
        username: "mor_2314",
        password: "83r5^_",
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        window.localStorage.setItem("token", JSON.stringify(result.token));
        if (result.token != "") {
          navigate("/dashboard");
        }
      });
  }

  return (
    <div>
      <div className="login-form">
        <h2>Login</h2>
        <div className="login-field">
          Email:<br></br>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login-field">
          Password:<br></br>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        {error && <p className="error">{error}</p>}

        <input
          className="login-button"
          type="button"
          value={loading ? "Loading..." : "Login"}
          disabled={loading}
          onClick={loginUser}
        />
      </div>
    </div>
  );


}

export default Login;