import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineHome, AiFillHome, AiOutlineStar, AiOutlineSearch, AiFillStar, AiOutlineUser } from "react-icons/ai";
import { FaSearch, FaUserAlt } from "react-icons/fa";


import './styles.scss';

const Menu = () => {
    let location = useLocation();
    const path = location.pathname;
    
    return (
        <div className="menu-buttons">

            <button value="click" className="menu-buttons__buttons">
                {path === "/home" ?
                    (<Link to="/home"><AiFillHome /></Link>) :
                    (<Link to="/home"><AiOutlineHome /></Link>)
                }
            </button>

            <button value="click" className="menu-buttons__buttons">
                {path === "/search" || path==="/detail" ?
                    <Link to="/search"> <FaSearch /></Link> :
                    <Link to="/search"> <AiOutlineSearch /></Link>
                }
            </button>
            <button value="click" className="menu-buttons__buttons">
                {path === "/favorites" ?
                    <Link to="/favorites"><AiFillStar /></Link> :
                    <Link to="/favorites"> <AiOutlineStar /></Link>
                }
            </button>
            <button value="click" className="menu-buttons__buttons">
                {path === "/profile" ?
                    <Link to="/profile"><FaUserAlt /></Link> :
                    <Link to="/profile"><AiOutlineUser /></Link>

                }
            </button>
        </div>

    )
}

export default Menu;