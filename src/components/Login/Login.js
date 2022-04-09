import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <button onClick={signInWithGoogle}>Login With Google</button>
            <form action="">
                
                <input type="email" placeholder='email'/><br/>
                <input type="password" placeholder='password'/><br/>
                <button >Login</button>
            </form>
        </div>
    );
};

export default Login;