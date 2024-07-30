import React from 'react';
import './mainlayout.scss';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';

const MainLayout = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="main_content">
        <div className="sidebar">
            <Sidebar />
        </div>
        <div className="outlet">
            <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
