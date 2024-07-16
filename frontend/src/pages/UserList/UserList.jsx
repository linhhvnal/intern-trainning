import NavBar from "../../components/NavBar/NavBar";
import UserCard from "../../components/UserCard/UserCard";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/SearchBar/SearchBar";
import UserDetail from "./UserDetail.jsx";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const [page, setPage] = useState(1);

  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [openEditUser, setOpenEditUser] = useState({
    isOpen: false,
    type: "edit",
    data: null,
  });
  const limit = 12;
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);


  // navigate if not authentica.
  const getUsers = async () => {
    const accessToken = localStorage.getItem('accessToken')
    if (!accessToken) {
      navigate('/login');
      return;
    }

    try {
      const res = await axiosInstance.get("/api/v1/users", {
        headers: {
          Authorization: `${accessToken}`, // Include authorization header
        },
      });
      setFilteredUsers(res.data.data);
      setTotalUsers(res.data.data.length);
      setUsers(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
      setUsers([]);
    }
  };

  useEffect(() => {
    getUsers();
    return () => { };
  }, [page]);

  ////paging
  useEffect(() => {
    const filtered = users.filter((user) =>
      user.username.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredUsers(filtered);
    setTotalUsers(filtered.length);
  }, [searchValue, users]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= Math.ceil(totalUsers / limit)) {
      setPage(newPage);
    }
  };

  const startIndex = (page - 1) * limit;
  const endIndex = Math.min(page * limit, filteredUsers.length);
  const displayedUsers = filteredUsers.slice(startIndex, endIndex);

  return (
    <>
      <NavBar />
      <div className="w-80 flex z-1 justify-center max-w-md mx-auto absolute top-2 right-0 left-0">
        <SearchBar
          value={searchValue}
          onChange={({ target }) => setSearchValue(target.value)}
          onKeyDown={() => { }}
        />
      </div>
      <div className="flex items-center justify-center mt-10">
        <div className="grid grid-cols-3 ">
          {displayedUsers.map((user, index) => (
            <UserCard user={user} key={index} onClick={() => setOpenEditUser({ isOpen: true, type: "edit", data: user })} />
          ))}
        </div>
      </div>
      {totalUsers > limit && (
        <Pagination
          totalUsers={totalUsers}
          usersPerPage={limit}
          currentPage={page}
          setCurrentPage={handlePageChange}
        />
      )}

      <Modal
        isOpen={openEditUser.isOpen}
        onRequestClose={() => { }}
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
          getUser={getUsers}
          onClose={() => {
            setOpenEditUser({ isOpen: false, type: "edit", user: null });
          }}
        />

      </Modal>
    </>
  );
};

export default UserList;
