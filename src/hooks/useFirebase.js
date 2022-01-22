import { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword,updateProfile ,signInWithPopup, onAuthStateChanged,GoogleAuthProvider,signOut,signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../pages/Login/Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [admin, setAdmin] = useState(false)
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    //new user 

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name , history) =>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential =>{
            setAuthError('')
            const newUser = {email, displayName:name}
            setUser(newUser)
            //save user to db
            saveUser(email, name, 'POST')

            //send name to firebase
            updateProfile(auth.currentUser, {
              displayName:name
            }).then(() => {
            
            }).catch((error) => {
          
            })
            history.push('/');
        })
        .catch(err=>{
            console.log(err.message);
            setAuthError(err.message)
        })
        .finally(()=>setIsLoading(false))
    }
    //existing user to login

    const logInUser = (email, password, location, history) =>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setAuthError('')
          const destination = location?.state?.from || '/'
          history.push(destination);
        })
        .catch((error) => {
         console.log(error.message);
         setAuthError(error.message)
        })
        .finally(()=>setIsLoading(false));
    }

    //google login

    const googleSignIn = ( history, location) =>{
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
              const user = result.user;
              setUser(user)
              setAuthError('')
              //save user to db
              saveUser(user.email, user.displayName, 'PUT')
              const destination = location?.state?.from || '/'
              history.push(destination);
            }).catch((error) => {
              console.log(error);
              setAuthError(error.message)
            })
            .finally(()=>setIsLoading(false));
            }

        //logOut usr
        
        const logOut = () =>{
            setIsLoading(true)
            signOut(auth).then(() => {
                setUser({});
              }).catch((error) => {
                console.log(error.message)
              })
              .finally(()=>setIsLoading(false));
        }

        //check email to user admin or not
        useEffect(()=>{
          fetch(`http://localhost:5000/users/${user.email}`)
          .then(res => res.json())
          .then(data => setAdmin(data.admin))
        },[user.email])

        //observer

    useEffect(()=>{
        const unsubscribed =  onAuthStateChanged(auth, (user) => {
             if (user) {
               setUser(user);
               
             } else {
               setUser({});
             }
             setIsLoading(false)
           });
           return ()=>unsubscribed;
     },[]);

     const saveUser = (email, displayName, method) =>{
        const user = {email, displayName}
        fetch('http://localhost:5000/users', {
          method:method,
          headers:{
            "Content-type": "application/json"
          },
          body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => console.log(data))
     }



    return{
        user,
        registerUser,
        isLoading,
        admin,
        logOut,
        authError,
        logInUser,
        googleSignIn
    }
}
export default useFirebase;


