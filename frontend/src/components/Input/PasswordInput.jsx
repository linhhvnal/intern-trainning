import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    let currentShowPassword = showPassword;
    setShowPassword(!currentShowPassword);
  };
  return (
    <div className="flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3">
      <input
        value={value}
        onChange={onChange}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder || "Password"}
        className="w-full bg-transparent text-sm py-3 mr-3 rounded outline-none select-none"
      />

      {showPassword ? (
        <FaRegEye
          size={22}
          className="cursor-pointer"
          onClick={() => toggleShowPassword()}
        />
      ) : (
        <FaRegEyeSlash
          size={22}
          className="cursor-pointer text-slate-400"
          onClick={() => toggleShowPassword()}
        />
      )}
    </div>
  );
};

export default PasswordInput;
