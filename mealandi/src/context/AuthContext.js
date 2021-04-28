import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    const value = {
        currentUser,
        signup,
        login
    };

    function signup (email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function login (email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    useEffect(() => {
        const newUser = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        })
        return newUser;
    }, []);

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}