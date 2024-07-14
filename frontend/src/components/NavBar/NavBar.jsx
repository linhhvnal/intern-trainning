import ProfileInfo from "../Cards/ProfileInfo"
import { useNavigate } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar";
const NavBar = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    navigate("/login");
  };
  
 
  return (
    <div className="bg-white flex item-center justify-between px-6 py-2 drop-shadow"> 
        <h2 className="text-xl font-medium text-black py-2 select-none"> Notes </h2>
        <ProfileInfo onLogout={onLogout}/>
    </div>
  )
}

export default NavBar