// import users from "../../assets/users.json";
import NavBar from "../../components/NavBar/NavBar";
import UserCard from "../../components/UserCard/UserCard";
import UserDetail from "./UserDetail.jsx";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
const UserList = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [openEditUser, setOpenEditUser] = useState({
    isOpen: false,
    data: null,
  });

  
  const [users, setUsers] = useState([]);
  const handleSearch = async () => {
    if (searchValue !== "") {
      try {
        const res = await axiosInstance.get(`/api/v1/users?username=${searchValue}`,{
          headers: {
            Authorization: `${localStorage.getItem("accessToken")}`
        }});
        setUsers(res.data.data);
        return;
      } catch (error) {
        console.log(error);
        setUsers([]);
      }
    } else {
      getUsers();
    } 
  };
  const getUsers = async () => {
    if (localStorage.getItem("accessToken") === null) {
      navigate("/login");
      return;
    }
    try {
      const res = await axiosInstance.get("/api/v1/users",{
        headers: {
          Authorization: `${localStorage.getItem("accessToken")}`
        }
      });
      setUsers(res.data.data);
    } catch (error) {
      console.log(error);
      setUsers([]);
    }
  }
  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      navigate("/login");
      return () => {};
    }else {
      getUsers();
      return () => {};
    }
  }, []);

  useEffect(() => {
    handleSearch();
    return () => {};
  }, [searchValue]);

  
  
  return (
    <>
      <NavBar value={searchValue} onEnter={() => handleSearch} onChange={({ target }) => setSearchValue(target.value)}/>

      <div className="flex items-center justify-center mt-10">
        <div className="grid grid-cols-3 ">
          {users.map((user, index) => (
            <UserCard user={user} key={index} onClick={()=>setOpenEditUser({ isOpen: true, data: user})}/>
          ))}
        </div>
      </div>
      {/* <Pagination
        totalUsers={searchValue === "" ? users.length : tempLength}
        usersPerPage={usersPerPage}
        setCurrentPage={setCurrentPage}
      /> */}

      <Modal
        isOpen={openEditUser.isOpen}
        onRequestClose={() => {}}
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.5)",
          },
        }}
        className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-auto"
      >
        <UserDetail
          noteData={openEditUser.data}
          onClose={() => {
            setOpenEditUser({ isOpen: false, user: null});
          }}
          getUsers = {getUsers}
        />

      </Modal>
    </>
  );
};

export default UserList;
