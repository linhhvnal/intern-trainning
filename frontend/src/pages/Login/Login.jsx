import PasswordInput from "../../components/Input/PasswordInput.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axiosInstance from "../../utils/axiosInstance.js";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(username);
    if (!username) {
      setError("Please enter a username");
      return;
    }
    if (!password) {
      setError("Please enter a password");
      return;
    }
    setError("");
    try {
      const res = await axiosInstance.post("/api/auth/signin", {
        username: username,
        password: password,
      })
      if (res.data.accessToken && res.data) {
        localStorage.setItem("accessToken", res.data.accessToken);  
        localStorage.setItem("user", JSON.stringify(res.data.username));
        navigate("/users");
      }
      
    } catch (error){
      if (error.res && error.res.data && error.res.data.message){
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again later");
    }}
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
    </>
  );
};

export default Login;
