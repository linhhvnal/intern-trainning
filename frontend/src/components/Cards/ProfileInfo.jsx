import { getInitials } from "../../utils/helper"
import PropTypes from "prop-types";
const ProfileInfo = ({onLogout}) => {
  ProfileInfo.propTypes = {
    onLogout: PropTypes.func.isRequired,
  };
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="flex item-center gap-3">
        <div className="w-12 h-12 flex items-center justify-center  rounded-full text-slate-950 font-medium bg-slate-300">
            {getInitials(user)}
        </div>
        <div>
            <p className="text-sm font-medium">{user}</p>
            <button className="text-sm text-slate-700 underline" onClick={onLogout}>Logout</button>
        </div>
    </div>
  )
}

export default ProfileInfo