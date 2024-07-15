import { useState } from "react";
import PasswordInput from "../../components/Input/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const handleSignup = async (e) => {
    e.preventDefault();
    if (!name) {
      setError("Please enter your name");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid Email");
      return;
    }
    if (!password) {
      setError("Please enter a password");
      return;
    }

    if (password !== confirmPassword || !confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");

    try {
      const res = await axiosInstance.post("/api/auth/signup", {
        username: name,
        email: email,
        password: password,
        address: address,
      })
      console.log(res.data);
      console.log(res.data.accessToken);
      navigate("/users");
      
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

      <div className="flex item-center justify-center mt-12">
        <div className="w-96 border-slate-300 border-2 rounded-lg bg-white px-7 py-10">
          <form onSubmit={handleSignup}>
            <h4 className="text-2xl mb-7 select-none">Signup</h4>
            <input
              type="text"
              placeholder="Name"
              className="input-box select-none"
              value={name}
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
    </>
  );
};

export default Signup;
