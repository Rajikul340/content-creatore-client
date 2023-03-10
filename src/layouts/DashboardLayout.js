import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Component/NavBar';
import SideBar from './SideBar';

const DashboardLayout = () => {
    return (
       <div>
            <NavBar/>
          <div className=' flex gap-3  border '>
             <div className=' min-h-screen bg-[#ECF0F4] p-5'>
             <SideBar/>
             </div>
             <div className='flex-1'>
             <Outlet/>
             </div>
             
        </div>
       </div>
    );
};

export default DashboardLayout;