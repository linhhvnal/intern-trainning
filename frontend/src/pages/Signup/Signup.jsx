import { useState } from "react";
import PasswordInput from "../../components/Input/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [redirecting, setRedirecting] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [username, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!username) {
      setError("Please enter your name");
      return;
    }
    if (!password) {
      setError("Please enter a password");
      return;
    }
    if (password !== confirmPassword) {
      setError("Password and confirmPassword not async");
      return;
    }

    setError('');
    try {
      const res = await axiosInstance.post("/api/auth/signup", {
        username,
        email,
        password,
        address,
      })
      if (res.status === 200) {
        console.log("User registered successfully!", res.data);
        console.log(res.date.accessToken);
        navigate("/login");
      } else
        if (response.status === 400) {
          setError("Failed! Username or Email is already in use!");
        }
    } catch (error) {
      if (error.res && error.res.data && error.res.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again later");
      }
    }
  };

  return (
    <>
      {/* <NavBar /> */}

      <div className="flex item-center justify-center mt-12">
        <div className="w-96 border-slate-300 border-2 rounded-lg bg-white px-7 py-10">
          <form onSubmit={handleSignup}>
            <h4 className="text-2xl mb-7 select-none">Signup</h4>
            <input
              type="text"
              placeholder="Name"
              className="input-box select-none"
              value={username}
              onChange={(e) => setName(e.target.value)}
            ></input>
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
            <PasswordInput
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder={"Confirm Password"}
            />
            <input
              type="text"
              placeholder="Address"
              className="input-box select-none"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            {error && (
              <p className="text-red-500 text-xs pb-1 select-none">{error}</p>
            )}

            <button type="submit" className="btn-primary select-none">
              Signup
            </button>
            <p className="text-sm text-center mt-4 select-none">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 select-none">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
      {redirecting && (
        <p className="text-blue-500 text-center pb-1 select-none">Redirecting to Login...</p>
      )}
    </>

  );
};

export default Signup;
