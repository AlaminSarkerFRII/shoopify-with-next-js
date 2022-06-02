import React from 'react';
import Navbar from '../Components/Navbar/Navbar';

const home = () => {
    return (
        <div className='text-center'>
            <Navbar/>
            <h2 className='text-4xl text-indigo-600'>Welcome to my home next.js </h2>
        </div>
    );
};

export default home;