import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './CommonPage/Navbar';
import Footer from './CommonPage/Footer';

const MainPageLayout = () => {
    return (
        <div>
            
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default MainPageLayout;
