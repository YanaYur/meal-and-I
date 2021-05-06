import React from 'react';
import {Link} from 'react-router-dom';
import { AiOutlineHome, AiOutlineSearch,AiFillStar, AiOutlineUser} from "react-icons/ai";


import './styles.scss';

const Menu=()=>{
    return(
        <div className="menu-buttons">
            <button className="buttons"><Link to="/"><AiOutlineHome /></Link></button>
            <button className="buttons"><Link to="/search"> <AiOutlineSearch/></Link></button>
            <button className="buttons"><Link to="/favorites"><AiFillStar/></Link></button>
            <button className="buttons"><Link to="/profile"><AiOutlineUser/></Link></button>
        </div>
    )
}

export default Menu;