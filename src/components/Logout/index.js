import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { AiOutlineLogout } from "react-icons/ai";

import './styles.scss';

export default function Logout() {
    const { logout } = useAuth();
    const history = useHistory();

    async function handleLogout() {

        try {
            await logout();
            history.push('/')
        } catch (err) {
            console.log(`Logout error:${err.message}`)
        }

    }
    return (
        <>
            <div className='logout'>
                <button variant='link' onClick={handleLogout}> <AiOutlineLogout /> Logout</button>
            </div>
        </>
    )
}