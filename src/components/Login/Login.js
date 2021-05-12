import React, { useRef, useState } from 'react';
import { useAuth } from '../../context/AuthContext'
import { Link, useHistory } from 'react-router-dom';



import logo from '../../assets/images/logo.2.png';
import './styles.scss';


export default function Login() {

    const emailRef = useRef();
    const passwordRef = useRef();

    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);

            history.push("/home")

        } catch {
            setError('Failed to create an account')
        }
        setLoading(false);
    }

    return (
        <div className="login-form">
            <div className="logo">
                <img src={logo} alt="logo"></img>
            </div>
            <form className="login-form-submit" onSubmit={handleSubmit}>
                {error && <p>Error</p>}
                <div className="login-form-submit-email">
                    <input type="email" placeholder="Email" ref={emailRef} required></input>
                </div>
                <div className="login-form-submit-password">
                    <input type="password" placeholder="Password" ref={passwordRef} required></input>
                </div>
                <button disabled={loading} className="submit" type="submit">Log In</button>
                <div className="create-account"> Don't have an account ? <Link to="/signup"><strong>Sign Up</strong></Link> </div>
            </form>
        </div>
    )
}
