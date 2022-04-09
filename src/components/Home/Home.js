import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const { user } = useFirebase();
    return (
        <div>
          User Name:  {user ? user.displayName : ''}
        </div>
    );
};

export default Home;