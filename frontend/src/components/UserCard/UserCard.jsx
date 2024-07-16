import PropTypes from "prop-types";

const UserCard = ({ user, onClick }) => {
  UserCard.propTypes = {
    user: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
  };
  
  return (
    <div
      className="border-2 border-black rounded p-4 flex-col m-4 hover:bg-slate-200 transition ease-in-out w-72"
      key={user.id}
      onClick={onClick}
    >
      <h1 className="text-xl font-bold select-none">{user.username}</h1>
      <p className="text-gray-500 select-none">{user.email}</p>
    </div>
  );
};

export default UserCard;
