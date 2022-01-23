import React,{useState} from 'react';
import { Alert } from 'react-bootstrap';
import './MakeAdmin.css'
const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [adminSuccess, setAdminSuccess] = useState(false)
    const handleOnBlur = e =>{
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e =>{
        e.preventDefault()
        const user = {email}
        fetch('http://localhost:5000/users/admin',{
            method:"PUT",
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount === 1){
                setAdminSuccess(true)
            }
            
        })
    }
    return (
        <>
           <h3 className='text-center mt-5'>make admin</h3> 
           <div className="make-admin-input">
               <form onSubmit={handleAdminSubmit}>
                    <input type="text" onBlur={handleOnBlur} placeholder='Email'/>
                    <input type="submit" value="Make Admin" />
               </form>
           </div>
           {adminSuccess && <Alert className='w-50 m-auto' variant='success'> Made Admin Successfully</Alert>}
        </>
    );
};

export default MakeAdmin;