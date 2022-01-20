import React from 'react';
import { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Register.css';

const Register = () => {

    const [loginData, setLoginData] = useState({});
    const {registerUser, googleSignIn, isLoading, user, authError} = useAuth();
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

    const handleSignUp = e =>{
        e.preventDefault();
        if(loginData.password !== loginData.password2){
            alert('password did not match')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        console.log(loginData)

    }

    const handleGoolgeSignIn = () =>{
        googleSignIn(history, location)
    }
    return (
        <>
                
          <div className="register-conatainer">
              {!isLoading && <div className="register-content">
                  <h3>Register</h3>
                  <form onSubmit={handleSignUp}>

                    <div className="input-field">
                        <input type="text" name="name" onBlur={handleOnBlur} placeholder='Your Name'/>
                        <label htmlFor="">Name</label>
                    </div>
                    <div className="input-field">
                        <input type="email" name="email" onBlur={handleOnBlur} placeholder='Your Email'/>
                        <label htmlFor="">Email</label>
                    </div>
                    <div className="input-field">
                        <input type="password" name="password" onBlur={handleOnBlur} placeholder='Password'/>
                        <label htmlFor="">Password</label>
                    </div>
                    <div className="input-field">
                        <input type="password" name="password2" onBlur={handleOnBlur} placeholder='ReType Your Password'/>
                        <label htmlFor="">Password</label>
                    </div>
                        <input type="submit" value="Create Account" />
                  </form>
                    <p className='text-center'>Already have an Account ? <Link to='/login'>Login</Link></p>

                    <div className='text-center mb-2'>_____OR_____</div>
                    <button className='google-btn' onClick={handleGoolgeSignIn}>sign in using google</button>
              </div>}
                
          </div> 
                {isLoading && <Spinner className='d-block m-auto' animation="border" />}
                {user?.email &&<Alert severity="success" style={{width:"50%", display:"block", margin:"auto"}}>User Created Succesfully</Alert>}
                {authError && <Alert style={{width:"50%", display:"block", margin:"auto"}} severity="error">{authError}</Alert>}
        </>
    );
};

export default Register;