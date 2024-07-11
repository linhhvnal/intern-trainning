import { useState } from "react";
import { MdClose } from "react-icons/md";
import propTypes from "prop-types";
const UserDetail = ({ noteData, type, onClose, handleDeleteUser, handleEditUser }) => {
  UserDetail.propTypes = {
    noteData: propTypes.object,
    type: propTypes.string.isRequired,
    onClose: propTypes.func.isRequired,
  };
  const [status, setStatus] = useState(noteData?.status);
  const [name, setName] = useState(noteData?.name);
  const [email, setEmail] = useState(noteData?.email);
  const [address, setAddress] = useState(noteData?.address);
  const [phone, setPhone] = useState(noteData?.phonenumber);
  const [error, setError] = useState(null);


  return (
    <div className="relative">
      <button
        className="w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-300"
        onClick={onClose}
      >
        <MdClose className="text=xl text-slate-400" />
      </button>

      <div className="flex flex-col">
        <label className="input-label select-none">STATUS</label>
        <input
          type="text"
          className="text-xl text-slate-950 outline-none"
          placeholder="status"
          value={status}
          onChange={({ target }) => setStatus(target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label className="input-label select-none">NAME</label>
        <input
          type="text"
          className="text-xl text-slate-950 outline-none"
          placeholder="name"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label className="input-label select-none">EMAIL</label>
        <input
          type="text"
          className="text-xl text-slate-950 outline-none"
          placeholder="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label className="input-label select-none">ADDRESS</label>
        <input
          type="text"
          className="text-xl text-slate-950 outline-none"
          placeholder="address"
          value={address}
          onChange={({ target }) => setAddress(target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label className="input-label select-none">PHONE NUMBER</label>
        <input
          type="text"
          className="text-xl text-slate-950 outline-none"
          placeholder="phone number"
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label className="input-label select-none">CREATED AT</label>
        <p className="select-none">{new Date(noteData?.created_at).toLocaleString()}</p>
      </div>

      <button
        className="btn-primary font-medium mt-5 mb-1 p-3"
        onClick={handleEditUser}
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
