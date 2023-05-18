import React from 'react';
import Header from '../Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='relative'><Outlet></Outlet></div>
            <Footer></Footer>
           
        </div>
    );
};

export default Main;