import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { AiOutlineLogout } from "react-icons/ai";

import './styles.scss';

export default function Logout() {
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    const history = useHistory();

    async function handleLogout() {
        setError('');
        try {
            await logout();
            history.push('/')
        } catch {
            setError('Failed to logout');
        }

    }
    return (
        <>
            <div className='logout'>
                <button variant='link' onClick={handleLogout}> <AiOutlineLogout/> Logout</button>
            </div>
        </>
    )
}