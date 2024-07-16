import PasswordInput from "../../components/Input/PasswordInput.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import axiosInstance from "../../utils/axiosInstance.js";
const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(name);
    if (!name) {
      setError("Please enter a valid Email");

      return;
    }
    if (!password) {
      setError("Please enter a password");
      return;
    }
    setError("");
    try {

      const res = await axiosInstance.post("/api/auth/signin", {
        username: name,
        password,
      });

      if (res.status === 200) {
        setError("Login successful:");
        console.log(res.data)
        console.log(res.data.accessToken)
        localStorage.setItem('accessToken', res.data.accessToken);
        localStorage.setItem('username', res.data.username);

        navigate("/");

      }
    } catch (error) {
      console.error("Login error:", error.message);
      setError("An error occurred during login. Please try again.");
    }
  };
  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      navigate('/');
      return;
    }
  })

  return (
    <>
      {/* <NavBar /> */}
      <div className="flex item-center justify-center mt-28">
        <div className="w-96 border-slate-300 border-2 rounded-lg bg-white px-7 py-10">
          <form >
            <h4 className="text-2xl mb-7 select-none">Login</h4>
            <input
              type="text"
              placeholder="Username"
              className="input-box select-none"

              value={name}
              onChange={(e) => setName(e.target.value)}

            ></input>
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && (
              <p className="text-red-500 text-xs pb-1 select-none">{error}</p>
            )}
            <button onClick={handleLogin} type="submit" className="btn-primary select-none"
              disabled={name && password ? false : true} >
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
    </>
  );
};

export default Login;
