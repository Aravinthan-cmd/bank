import React from 'react';
import './navbar.scss';
import logo from '../../assets/img/bank_logo.png';
import profilePhoto from '../../assets/img/profile-1.png';
import ThemeToggle from '../ThemeToggle';

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <img src={logo} className="logo" alt="logo" />
        {/* <div className="search-bar">
          <span className="material-icons-sharp">search</span>
          <input type="search" placeholder="Search" />
        </div> */}
        <div className="profile-area">
          <ThemeToggle />
          <div className="profile">
            <div className="profile-photo">
              <img src={profilePhoto} alt="profile" />
            </div>
            <h5>William</h5>
            <span className="material-icons-sharp">expand_more</span>
          </div>
          <button id="menu-btn">
            <span className="material-icons-sharp">menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
