import React, { useState } from 'react';
import './Register.css';
import { FaUser, FaLock, FaRegAddressCard, FaImage } from "react-icons/fa";

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [address, setAddress] = useState('');
    const [avatar, setAvatar] = useState(null);

    const handleAvatarChange = (e) => {
        setAvatar(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();cd
        console.log('Submitted:', { username, email, password, address, avatar });

    };

    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <FaLock className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    <FaLock className='icon' />
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} required />
                    <FaRegAddressCard className='icon' />
                </div>
                <div className="input-box">
                    <input type="file" onChange={handleAvatarChange} accept="image/*" />
                    <FaImage className='icon' />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
