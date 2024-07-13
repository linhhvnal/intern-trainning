import PasswordInput from "../../components/Input/PasswordInput.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [redirecting, setRedirecting] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(username);
    if (!username) {
      setError("Please enter a valid username");
      return;
    }
    if (!password) {
      setError("Please enter a password");
      return;
    }
    setError("");
    try {
      const response = await axios.post("http://localhost:3000/api/auth/signin", {
        username, // Use 'username' in the request body
        password,
      });

      if (response.status === 200) {
        setError("Login successful:", response.data);
        setRedirecting(true);
        setTimeout(() => {
          navigate("/users");
        }, 3000);
      }
    } catch (error) {
      console.error("Login error:", error.message);
      setError("An error occurred during login. Please try again.");
    }
  };

  return (
    <>
      {/* <NavBar /> */}
      <div className="flex item-center justify-center mt-28">
        <div className="w-96 border-slate-300 border-2 rounded-lg bg-white px-7 py-10">
          <form onSubmit={handleLogin}>
            <h4 className="text-2xl mb-7 select-none">Login</h4>
            <input
              type="text"
              placeholder="Username"
              className="input-box select-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && (
              <p className="text-red-500 text-xs pb-1 select-none">{error}</p>
            )}
            <button type="submit" className="btn-primary select-none">
              login
            </button>
            <p className="text-sm text-center mt-4 select-none">
              Not registered yet?{" "}
              <Link to="/signup" className="text-blue-600 select-none">
                Create a Account
              </Link>
            </p>
          </form>
        </div>
      </div>
      {redirecting && (
        <p className="text-blue-500 text-center pb-1 select-none">Redirecting to Users...</p>
      )}
    </>
  );
};

export default Login;
