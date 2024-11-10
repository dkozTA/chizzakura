import React from 'react';
import { FaAccessibleIcon } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import styles from '../styles/owner/header.module.css';
import logo from '../assets/Emu_02_st.ayaka.one.webp';

const Header = () => {

  // Handle logout, add logic later based on the backend
  const handleLogout = () => {
    // Log out the user
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <nav className={styles.nav}>
        <NavLink to="/admin/mm_o_editmenu" className={({ isActive }) => (isActive ? styles.activeLink : '')}>Menu</NavLink>
        <NavLink to="/admin/tm_o_table" className={({ isActive }) => (isActive ? styles.activeLink : '')}>Table</NavLink>
        <NavLink to="/admin/um_o_editeinfo" className={({ isActive }) => (isActive ? styles.activeLink : '')}>Employee Info</NavLink>
        <NavLink to="/admin/dm_o_discount" className={({ isActive }) => (isActive ? styles.activeLink : '')}>Discount</NavLink>
        <NavLink to="/admin/br_o_report" className={({ isActive }) => (isActive ? styles.activeLink : '')}>Report</NavLink>
      </nav>
      <div className={styles.actions}>
        {/* đây là thanh search, chưa cần thiết lắm nên để đó
        <div className={styles.search}>
          <input type="text" placeholder="Search" className={styles.searchInput} />
          <FaSearch className={styles.icon} />
        </div> */}

        {/* Bỏ link to profile vì có thể không cân, cần thì thêm lại */}
        {/* <NavLink to="/admin/um_o_profile" className={({ isActive }) => (isActive ? styles.activeLink : '')}>
          <FaUserCircle className={styles.userIcon} />
        </NavLink> */}

        <button className={styles.logoutButton} onClick={handleLogout}>
            <FaAccessibleIcon className={styles.logoutIcon} />
        </button>
      </div>
    </header>
  );
};

export default Header;
