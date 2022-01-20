import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <>
          <div className="login-conatainer">
              <div className="login-content">
                  <h3>Login</h3>
                  <form>                  
                    <div className="input-field">
                        <input type="email" placeholder='Your Email'/>
                        <label htmlFor="">Email</label>
                    </div>
                    <div className="input-field">
                        <input type="password" placeholder='Password'/>
                        <label htmlFor="">Password</label>
                    </div>                    
                  </form>
                    <p className='text-center'>New User? <Link to='/register'>create account</Link></p>

                    <div className='text-center mb-2'>------OR-------</div>
                    <button className='google-btn'>sign in using google</button>
              </div>
          </div>  
        </>
    );
};

export default Login;