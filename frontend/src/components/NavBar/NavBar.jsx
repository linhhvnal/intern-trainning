import ProfileInfo from "../Cards/ProfileInfo"
import { useNavigate } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar";
import PropTypes from "prop-types";
const NavBar = ({value, onEnter, onChange}) => {
  NavBar.propTypes = {
    value: PropTypes.string.isRequired,
    onEnter: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  
 
  return (
    <div className="bg-white flex item-center justify-between px-6 py-2 drop-shadow"> 
        <h2 className="text-xl font-medium text-black py-2 select-none"> SimpleWeb </h2>
        <SearchBar value={value} onEnter={onEnter} onChange={onChange}/>
        <ProfileInfo onLogout={onLogout}/>
    </div>
  )
}

export default NavBar