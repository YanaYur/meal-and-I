import React from 'react';
import logo from '../../images/logo.2.png';
import'./styles.scss';

export default function Header() {
 
    return (
        <div className="header">
        <img className="photo" src={logo} alt="logo"/>
        </div>
    );
}