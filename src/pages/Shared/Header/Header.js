import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link,} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';


const Header = () => {
    const {user, logOut} = useAuth();
    const history = useHistory()
    const handleClick = () =>{
        history.push('/login')
    }
    return (
        <>
         <header>
             <nav>
                 <div className='nav-container'>
                 <div className="logo">
                        BEST CAMERA
                     </div>
                   
                     <ul>
                         <li><Link to='/home'>Home</Link></li>
                         <li><Link to='/products'>Products</Link></li>
                         <li><Link to='/dashboard'>Dashboard</Link></li>
                     </ul>
                     <div className="login-btn">
                         {user.email?
                         <button onClick={logOut}>Logout</button>
                         :
                         <button onClick={handleClick}>Login</button>}
                     </div>
                 </div>
             </nav>
         </header>
        </>
    );
};

export default Header;