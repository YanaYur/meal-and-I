import React, { useRef, useState } from 'react';
import { useAuth } from '../../context/AuthContext'
import { Link, useHistory } from 'react-router-dom';


import logo from '../../assets/images/logo.2.png';
import './styles.scss';


export default function Signup() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const nameRef = useRef();

    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();


    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not march');
        }
        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);

            history.push("/home")

        } catch {
            setError('Failed to sign in')
        }
        setLoading(false);
    }

    return (
        <div className="signup-form">
            <div className="logo">
                <img src={logo} alt="logo"></img>
            </div>
            <form className="signup-form-submit" onSubmit={handleSubmit}>
                {error && <p>error</p>}
                <div className="signup-form-submit-name" >

                    <input type="text" placeholder="enter your name" ref={nameRef} required></input>
                </div>
                <div className="signup-form-submit-email">

                    <input type="email" placeholder="email" ref={emailRef} required></input>
                </div>
                <div className="signup-form-submit-password">

                    <input type="password" placeholder="password" ref={passwordRef} required></input>
                </div>
                <div className="signup-form-submit-password-confirmation">

                    <input type="password" placeholder="password confirmation" ref={passwordConfirmRef} required></input>
                    <button disabled={loading} className="submit" type="submit"><strong>Sign Up</strong></button>
                </div>
                <div className="already-have">Already have an account? <Link to="/"><strong>Login</strong></Link> </div>
            </form>
        </div>
    )
}