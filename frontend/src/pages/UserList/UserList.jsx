// import users from "../../assets/users.json";
import NavBar from "../../components/NavBar/NavBar";
import UserCard from "../../components/UserCard/UserCard";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/SearchBar/SearchBar";
import UserDetail from "./UserDetail.jsx";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";
const UserList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [openEditUser, setOpenEditUser] = useState({
    isOpen: false,
    type: "edit",
    data: null,
  });
  const [users, setUsers] = useState([]);
  const usersPerPage = 12;
  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  // const currentUsers = users.slice(firstUserIndex, lastUserIndex);
  // let temp = currentUsers;
  // let tempLength = temp.length;
  // const handleSearch = () => {
  //   if (searchValue !== "") {
  //     const filteredUsers = users.filter((user) =>
  //       user.name.toLowerCase().includes(searchValue.toLowerCase()));
  //     temp = filteredUsers.slice(firstUserIndex, lastUserIndex);
  //     tempLength = filteredUsers.length;
  //     // setCurrentPage(1);
  //   }
  // };
  const getUsers = async () => {
    try {
      const res = await axiosInstance.get("/api/v1/users");
      setUsers(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
      setUsers([]);
    }
  }
  useEffect(() => {
    getUsers();
    return () => {};
  }, []);
  return (
    <>
      <NavBar/>
      <div className="flex justify-center z-1 absolute top-2 right-0 left-0">
        <SearchBar
          value={searchValue}
          onChange={({ target }) => setSearchValue(target.value)}
          onKeyDown={()=>{}}
        />
      </div>
      <div className="flex items-center justify-center mt-10">
        <div className="grid grid-cols-3 ">
          {users.map((user, index) => (
            <UserCard user={user} key={index} onClick={()=>setOpenEditUser({ isOpen: true , type: "edit", data: user})}/>
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
          type={openEditUser.type}
          noteData={openEditUser.data}
          onClose={() => {
            setOpenEditUser({ isOpen: false, type: "edit", user: null});
          }}
        />

      </Modal>
    </>
  );
};

export default UserList;
