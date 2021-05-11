import React from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Logout from '../../components/Logout';
import UserProfile from '../../components/UserProfile';
import { useAuth } from "../../context/AuthContext"


const Profile = () => {
    const { currentUser } = useAuth();
    
    return (
        <>
            <Header />
            <UserProfile data={currentUser}/>
            <Logout/>
            <Menu />
        </>

    );
}
export default Profile;