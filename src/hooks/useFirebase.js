import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.init";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
    const [user, setUser] = useState([]);

    const signInWithGoogle = () => {
        console.log('google sign in');
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user; 
                console.log(user)
                setUser(user);
            })
            .catch(error => {
                console.error(error);
        })
    }

    const handleSignOut = () => {
        signOut(auth)
        .then(()=>{})
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    },[])

    return {user,signInWithGoogle,handleSignOut}
}
export default useFirebase;