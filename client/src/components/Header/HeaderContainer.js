import React, { useState, useEffect } from 'react';
import Header from './Header';
import MobileHeader from './MobileHeader';
import SlideMenu from './SlideMenu';

const HeaderContainer = props => {
  const [isSlideVisible, setIsSlideVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {}, []);

  const openSlideMenu = () => {
    setIsSlideVisible(true);
    setCurrentSlide(1);
  };

  const closeSlideMenu = async () => {
    await setIsSlideVisible(false);
    await setCurrentSlide(1);
    await props.fetchMemes();
  };

  return (
    <>
      <Header
        oauth={props.auth}
        openAddModal={props.openAddModal}
        closeAddModal={props.closeAddModal}
        openSlideMenu={() => openSlideMenu()}
      />
      <MobileHeader
        oauth={props.auth}
        openAddModal={props.openAddModal}
        closeAddModal={props.closeAddModal}
        openSlideMenu={() => openSlideMenu()}
      />
      <SlideMenu
        profile={props.auth}
        updateUser={props.updateUser}
        isSlideVisible={isSlideVisible}
        currentSlide={currentSlide}
        openSlideMenu={() => openSlideMenu()}
        closeSlideMenu={() => closeSlideMenu()}
        openMenu2={() => setCurrentSlide(2)}
      />
    </>
  );
};

export default HeaderContainer;
