import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-xs.png';
import Button from '../common/Button';
import FilterBar from './FilterBar';
import styles from './Header.module.css';

const Header = ({ oauth, openAddModal, openSlideMenu }) => {
  return (
    <header className="header">
      <section className={styles.desktopHeader}>
        <div className={styles.headerLeft}>
          <Link to={!oauth ? '/' : '/memeboard'}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        {!oauth ? (
          <div className={styles.headerRight}>
            <Button type="button" link="/signup" className="memeBtn">
              SignUp
            </Button>
            <Button type="button" link="/api/googleLogin" className="memeBtn">
              Login
            </Button>
          </div>
        ) : (
          <div className={styles.headerRight}>
            <FilterBar />
            <Button type="button" className="memeBtn" onClick={openAddModal}>
              Add Memes!
            </Button>
            <Button type="button" className="memeBtn" onClick={openSlideMenu}>
              Settings
            </Button>
          </div>
        )}
      </section>
    </header>
  );
};

export default Header;
