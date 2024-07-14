import PasswordInput from "../../components/Input/PasswordInput.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import { validateEmail } from "../../utils/helper.js";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email);
    if (!validateEmail(email)) {
      setError("Please enter a valid Email");
      return;
    }
    if (!password) {
      setError("Please enter a password");
      return;
    }
    setError("");
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
              placeholder="Email"
              className="input-box select-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
