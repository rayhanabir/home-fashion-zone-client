import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {logInUser,googleSignIn, isLoading, user, authError} = useAuth();
    const history = useHistory();
    const location = useLocation()

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        console.log(newLoginData)
        setLoginData(newLoginData);
    }

    const handleLogin = e =>{
        e.preventDefault()
        logInUser(loginData.email, loginData.password, location, history)
    }

    const handleGoolgeSignIn = () =>{
        googleSignIn(history, location)
    }

    return (
        <>
          <div className="login-conatainer">
              <div className="login-content">
                  <h3>Login</h3>
                  <form onSubmit={handleLogin}>                  
                    <div className="input-field">
                        <input type="email" name='email' onBlur={handleOnBlur} placeholder='Your Email'/>
                        <label htmlFor="">Email</label>
                    </div>
                    <div className="input-field">
                        <input type="password" name='password' onBlur={handleOnBlur} placeholder='Password'/>
                        <label htmlFor="">Password</label>
                    </div> 
                    <input type="submit" value="Login" />                   
                  </form>
                    <p className='text-center'>New User? <Link to='/register'>create account</Link></p>

                    <div className='text-center mb-2'>------OR-------</div>
                    <button className='google-btn' onClick={handleGoolgeSignIn}>sign in using google</button>
              </div>
          </div>  
                {isLoading && <Spinner className='d-block m-auto' animation="border" />}
                {user?.email &&<Alert severity="success" style={{width:"50%", display:"block", margin:"auto"}}>User Login Succesfully</Alert>}
                {authError && <Alert style={{width:"50%", display:"block", margin:"auto"}} severity="error">{authError}</Alert>}
        </>
    );
};

export default Login;