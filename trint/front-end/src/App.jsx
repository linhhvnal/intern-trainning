import React from 'react';
import UserDetail from './features/Todo/Components/Todolist/Index';
const user = {
    name: 'Mr.Bean',
    avatarUrl: 'avatar.jpg',
    email: 'mrbean@example.com',
    address: 'HoaChau, Hoa Vang, DaNang, VietNam',
    status: 'Active',
};

const log = {
    createdat: '2024-07-02T14:43:00Z',
    updatedat: '2024-07-02T14:43:00Z',
    deletedat: '2024-07-03T12:12:00Z',
    deletestatus: false,
};

function App() {
    return (
        <div className='right'>
            <UserDetail author={user} date={log} />
        </div>

    );
}
export default App