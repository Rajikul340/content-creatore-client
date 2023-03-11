import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Component/NavBar';

const Layout = () => {

    return (
        <div className='w-11/12 mx-auto'>
            <NavBar/>
             <hr/>
            <Outlet />
        </div>
    );
};

export default Layout;