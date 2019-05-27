import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import * as actions from './actions';
import logo from './assets/logo.png';
import example from './assets/example.jpg';

import HeaderContainer from './components/Header/HeaderContainer';
import AddEditModalContainer from './components/AddEditModal/AddEditModalContainer';
import Landing from './components/Landing/Landing';
import MemeBoard from './components/MemeBoard/MemeBoard';
// import SEO from './components/Meta/SEO';
import SignUp from './components/SignUp/SignUp';
import styles from './App.module.css';

const App = props => {
  const [modalShowing, setModalShowing] = useState(false);
  const [modalType, setModalType] = useState('add');
  const [memeToEdit, setMemeToEdit] = useState('');
  const [theme, setTheme] = useState('main');

  useEffect(() => {
    return () => {
      props.fetchUser();
    };
  }, [props]);

  // Toggles the AddEditModal
  const toggleModal = (type, meme) => {
    setModalShowing(!modalShowing);
    setModalType(type);
    setMemeToEdit(meme || null);
  };

  return (
    <div className={`theme-${!!props.auth ? props.auth.theme : 'main'}`}>
      <div className={styles.app}>
        <HeaderContainer
          auth={props.auth}
          fetchMemes={props.fetchMemes}
          openAddModal={() => toggleModal('add', null)}
          closeAddModal={() => toggleModal(null, null)}
        />
        <div className={styles.appBody}>
          <Route
            exact
            path="/"
            render={() => <Landing logo={logo} example={example} />}
          />
          <Route
            exact
            path="/memeboard"
            render={() => (
              <MemeBoard
                toggleModal={() => toggleModal('edit', props.currentMeme)}
                memes={props.memes}
              />
            )}
          />
          <Route exact path="/signup" render={() => <SignUp logo={logo} />} />
        </div>
        {!!modalShowing ? (
          <AddEditModalContainer
            meme={memeToEdit}
            modalType={modalType}
            toggleModal={() => toggleModal(null, null)}
          />
        ) : null}
      </div>
      {/* <SEO url="default" /> */}
    </div>
  );
};

function mapStateToProps({ auth, memes, tags, currentMeme }) {
  return { auth, memes, tags, currentMeme };
}

export default withRouter(
  connect(
    mapStateToProps,
    actions
  )(App)
);
