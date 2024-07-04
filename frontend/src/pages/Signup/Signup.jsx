import { useState } from "react";
import PasswordInput from "../../components/Input/PasswordInput";
import { Link } from "react-router-dom";
import { validateEmail } from "../../utils/helper";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [avatar, setAvatar] = useState(null);

  const [name, setName] = useState("");
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
    // if (!confirmPassword) {
    //   setError("Please confirm your password");
    //   return;
    // }
    if (password !== confirmPassword || !confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
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
            <input
              type="file"
              value={avatar}
              className="input-box select-none"
              onChange={(e) => setAvatar(e.target.files[0])}
              accept="image/*"
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
