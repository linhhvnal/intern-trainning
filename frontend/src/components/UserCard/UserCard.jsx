const UserCard = ({ user, onClick }) => {
  return (
    <div
      className="border-2 border-black rounded p-4 flex-col m-4 hover:bg-slate-200 transition ease-in-out object-contain"
      key={user.id}
      onClick={onClick}
    >
      <h1 className="text-xl font-bold select-none">{user.name}</h1>
      <p className="text-gray-500 select-none">{user.email}</p>
    </div>
  );
};

export default UserCard;
