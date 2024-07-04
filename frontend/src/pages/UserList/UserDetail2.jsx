import React from 'react';
import './Style.css'


function Avatar(props) {
    return (

        <img className='avatar rounded-full mt-3'
            src={props.user.avatarUrl}
            alt={props.user.name}
            width='100px'
        />
    );
}


function UserInfo(props) {
    return (
        <form className='ml-3'>
            <div className='grid grid-rows-3 grid-flow-col'>
                <label className='block text-gray-700 text-sm font-bold ' htmlFor='fullname'>Full Name</label>
                <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    type="text"
                    placeholder={props.user.name}
                    readOnly />
            </div>

            <div className='grid grid-rows-3 grid-flow-col'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>Email</label>
                <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    type='email'
                    placeholder={props.user.email}
                    readOnly />
            </div>

            <div className='grid grid-rows-3 grid-flow-col'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='address'>Address</label>
                <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    type='text'
                    placeholder={props.user.address}
                    readOnly />
            </div>

            <div className='grid grid-rows-3 grid-flow-col'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='status'>Status</label>
                <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    type='text'
                    placeholder={props.user.status}
                    readOnly />
            </div>

            <div className='grid grid-rows-3 grid-flow-col'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='createdat'>CreatedAt</label>
                <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    placeholder={new Date(props.log.createdat).toLocaleString()}
                    readOnly />
            </div>

            <div className='grid grid-rows-3 grid-flow-col'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='updatedat'>UpdatedAt</label>
                <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    placeholder={new Date(props.log.updatedat).toLocaleString()}
                    readOnly />
            </div>

            <div className='grid grid-rows-3 grid-flow-col'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='deletedat'>DeletedAt</label>
                <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    placeholder={props.log.deletestatus ? new Date(props.log.deletedat).toLocaleString() : 'Not deleted'}
                    readOnly />
            </div>
        </form>
    );
}

function UserDetail2(props) {
    return (
        <div className="card max-w-sm rounded overflow-y-scroll shadow-lg" style={{ width: '30rem', height: '38rem' }}>
            <div className='useravatar'>
                <Avatar user={props.author} /></div>
            <div >
                <UserInfo log={props.date} user={props.author} /></div>
        </div>
    );
}
export default UserDetail2