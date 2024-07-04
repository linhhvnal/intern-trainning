import NavBar from "../../components/NavBar/NavBar";
import NoteCard from "../../components/Cards/NoteCard";
import AddEditNote from "./AddEditNote.jsx";
import { MdAdd } from "react-icons/md";
import { useState } from "react";
import Modal from "react-modal";
const Home = () => {
  const [openAddEditNote, setOpenAddEditNote] = useState({
    isOpen: false,
    type: "add",
    data: null,
  });
  return (
    <>
      <NavBar />
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8 px-8">
          <NoteCard
            title="meet on april 4th"
            date="4/1/2024"
            content="meet at 4pm at the park"
            tags="#meeting"
            isPinned={true}
            onDelete={() => {}}
            onPinNote={() => {}}
            onEdit={() => {}}
          />
          <NoteCard
            title="meet on april 4th"
            date="4/1/2024"
            content="meet at 4pm at the park"
            tags="#meeting"
            isPinned={true}
            onDelete={() => {}}
            onPinNote={() => {}}
            onEdit={() => {}}
          />
          <NoteCard
            title="meet on april 4th"
            date="4/1/2024"
            content="meet at 4pm at the park"
            tags="#meeting"
            isPinned={true}
            onDelete={() => {}}
            onPinNote={() => {}}
            onEdit={() => {}}
          />
          <NoteCard
            title="meet on april 4th"
            date="4/1/2024"
            content="meet at 4pm at the park"
            tags="#meeting"
            isPinned={true}
            onDelete={() => {}}
            onPinNote={() => {}}
            onEdit={() => {}}
          />
          <NoteCard
            title="meet on april 4th"
            date="4/1/2024"
            content="meet at 4pm at the park"
            tags="#meeting"
            isPinned={true}
            onDelete={() => {}}
            onPinNote={() => {}}
            onEdit={() => {}}
          />
        </div>
      </div>
      <button
        className="w-16 h-16 pl-4 items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10"
        onClick={() => {
          setOpenAddEditNote({ isOpen: true, type: "add", data: null });
        }}
      >
        <MdAdd className="text-[32px] text-white" />
      </button>

      <Modal
        isOpen={openAddEditNote.isOpen}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.5)",
          },
        }}
        contentLabel=""
        className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-auto"
      >
        <AddEditNote
          type={openAddEditNote.type}
          noteData={openAddEditNote.data}
          onClose={() => {
            setOpenAddEditNote({ isOpen: false, type: "add", data: null });
          }}
        />
      </Modal>
    </>
  );
};

export default Home;
