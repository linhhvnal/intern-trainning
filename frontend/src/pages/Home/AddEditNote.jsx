import { useState } from 'react'
import { MdClose } from 'react-icons/md';
import propTypes from 'prop-types';
const AddEditNote = ({noteData, type, onClose}) => {
    AddEditNote.propTypes = {
        noteData: propTypes.object,
        type: propTypes.string.isRequired,
        onClose: propTypes.func.isRequired
    }
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState(null);

    const addNote = async () => {

    };
    const editNote = async () => {
        
    };

    const handleAddNote = () => {
        if (!title) {
            setError('Title is required');
            return;
        }
        if (!content) {
            setError('Content is required');
            return;
        }   
        setError("");
        if (type === 'edit') {
            editNote();
        } else {
            addNote();
        }
    };
  return (
    <div className='relative'>
        <button className='w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-500' onClick={onClose}>
            <MdClose className='text=xl text-slate-400'/>
        </button>
        <div className="flex flex-col gap-2">
            <label className="input-label">TITLE</label>
            <input 
                type="text" 
                className="text-2xl text-slate-950 outline-none"
                placeholder="Go to gym at 5"
                value={title}
                onChange={({target})=>setTitle(target.value)}
            />
        </div>

        <div className="flex flex-col gap-2 mt-4">
            <label className="input-label">CONTENT</label>
            <textarea
                type="text"
                className="text-sm text-slate-950 outline-none bg-slate-100 p-2 rounded"
                placeholder="content"
                rows={10}
                value={content}
                onChange={({target})=>setContent(target.value)}
            />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button 
            className="btn-primary font-medium mt-5 p-3"
            onClick={handleAddNote}
        >Add</button>
    </div>
  )
}

export default AddEditNote