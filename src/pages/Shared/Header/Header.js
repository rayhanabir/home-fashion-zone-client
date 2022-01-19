import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../images/hfz-logo.png"
import './Header.css';


const Header = () => {
    return (
        <>
         <header>
             <nav>
                 <div className="nav-container">
                     <div className="logo">
                        <img src={logo} alt="" />
                     </div>
                     <ul>
                         <li><Link to='/home'>Home</Link></li>
                         <li><Link to='/about'>About</Link></li>
                         <li><Link to='/products'>Products</Link></li>
                         <li><Link to='/blog'>Blog</Link></li>
                     </ul>
                     <div className="login-btn">
                         <button>Login</button>
                     </div>
                 </div>
             </nav>
         </header>
        </>
    );
};

export default Header;