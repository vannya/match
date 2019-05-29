import React from 'react';
import Button from '../common/Button';
import FilterBar from './FilterBar';
import styles from './MobileHeader.module.css';
import { ReactComponent as Menu } from '../../assets/menu.svg';
import { ReactComponent as Add } from '../../assets/add.svg';

const MobileHeader = ({ oauth, openAddModal, openSlideMenu }) => {
  return (
    <section className={styles.mobileHeader}>
      <Button type="button" className="mobile">
        <Menu onClick={openSlideMenu} />
      </Button>
      {!oauth ? (
        <div className={styles.right}>
          <Button type="button" link="/api/googleLogin" className="memeBtn">
            SignUp
          </Button>
          <Button type="button" link="/api/googleLogin" className="memeBtn">
            Login
          </Button>
        </div>
      ) : (
        <>
          <FilterBar />
          <div className={styles.right}>
            <Button type="button" className="mobile" onClick={openAddModal}>
              <Add />
            </Button>
          </div>
        </>
      )}
    </section>
  );
};

export default MobileHeader;
