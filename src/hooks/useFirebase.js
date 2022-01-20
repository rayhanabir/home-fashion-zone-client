import { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword,updateProfile ,signInWithPopup, onAuthStateChanged,GoogleAuthProvider,signOut,signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../pages/Login/Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
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

    const googleSignIn = (location, history) =>{
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
              const user = result.user;
              setUser(user)
              setAuthError('')
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




    return{
        user,
        registerUser,
        isLoading,
        logOut,
        authError,
        logInUser,
        googleSignIn
    }
}
export default useFirebase;


