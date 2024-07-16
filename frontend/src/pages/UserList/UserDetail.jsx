import { useState } from "react";
import { MdClose } from "react-icons/md";
import propTypes from "prop-types";
import axiosInstance from "../../utils/axiosInstance";
const UserDetail = ({ noteData, onClose, getUsers}) => {
    UserDetail.propTypes = {
        noteData: propTypes.object,
        onClose: propTypes.func.isRequired,
        getUsers: propTypes.func.isRequired,
    };
  const [username, setUserName] = useState(noteData?.username);
  const [email, setEmail] = useState(noteData?.email);
  const [address, setAddress] = useState(noteData?.address);

  const handleUpdateUser = async () => {
    const id = noteData?.id;
    try {
      await axiosInstance.put(`/api/v1/users/${id}`, {
        username,
        email,
        address,
      });
      getUsers(); 
      onClose();
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteUser = async () => {
    const id = noteData?.id;
    const temp = noteData?.username;
    const tempName = JSON.parse(localStorage.getItem("user"));
    try {
      await axiosInstance.delete(`/api/v1/users/${id}`);
      if (temp === tempName) {
        localStorage.clear();
      }
      onClose();
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="relative">
      <button
        className="w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-300"
        onClick={onClose}
      >
        <MdClose className="text=xl text-slate-400" />
      </button>

      <div className="flex flex-col">
        <label className="input-label select-none">NAME</label>
        <input
          type="text"
          className="text-xl text-slate-950 outline-none bg-slate-100 rounded-md p-1 m-1"
          placeholder="name"
          value={username}
          onChange={({ target }) => setUserName(target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label className="input-label select-none">EMAIL</label>
        <input
          type="text"
          className="text-xl text-slate-950 outline-none bg-slate-100 rounded-md p-1 m-1"
          placeholder="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label className="input-label select-none">ADDRESS</label>
        <input
          type="text"
          className="text-xl text-slate-950 outline-none bg-slate-100 rounded-md p-1 m-1"
          placeholder="address"
          value={address}
          onChange={({ target }) => setAddress(target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label className="input-label select-none">CREATED AT</label>
        <h1 className="text-xl text-slate-900 outline-none p-1 m-1">{noteData?.createdAt}</h1>
      </div>

      <button
        className="btn-primary font-medium mt-5 mb-1 p-3"
        onClick={handleUpdateUser}
      >
        UPDATE
      </button>
      <button
        className="btn-secondary font-medium m-0 p-3"
        onClick={handleDeleteUser}
      >
        DELETE
      </button>
    </div>
  );
};

export default UserDetail;
