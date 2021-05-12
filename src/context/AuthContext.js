import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
import { setUser } from '../redux/acctions'
import { userSelector } from '../redux/selectors/selectors'
import { useDispatch, useSelector } from 'react-redux';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    // const [currentUser, setCurrentUser] = useState("");
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const currentUser = useSelector(userSelector);

    const value = {
        currentUser,
        login,
        signup,
        logout,
    };

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);


    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    function logout() {
        return auth.signOut();
    }

    useEffect(() => {
        const newUser = auth.onAuthStateChanged(user => {
            if (user) {
                const { uid, email } = user;
                dispatch(setUser({ uid, email }));
            }

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