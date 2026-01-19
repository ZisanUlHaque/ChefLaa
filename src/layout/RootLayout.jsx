import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import MouseFollower from '../components/MouseFollower';

const RootLayout = () => {
    return (
        <div className=''>
            <MouseFollower></MouseFollower>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;