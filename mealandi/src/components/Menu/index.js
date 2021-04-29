import React from 'react';
import {Link} from 'react-router-dom';


import './styles.scss';

const Menu=()=>{
    return(
        <div className="menu-buttons">
            <button className="buttons"><i className="icon"></i><Link to="/"> Home</Link></button>
            <button className="buttons"><i className="icon"></i><Link to="/search"> Search</Link></button>
            <button className="buttons"><i className="icon"></i><Link to="/favorites">Favorites</Link></button>
            <button className="buttons"><i className="icon"></i><Link to="/profile"> Profile</Link></button>
        </div>
    )
}

export default Menu;