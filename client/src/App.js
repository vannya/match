import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import * as actions from './actions';
import logo from './assets/logo.png';
import example from './assets/example.jpg';

import HeaderContainer from './components/Header/HeaderContainer';
import AddEditModal from './components/AddEditModal/AddEditModal';
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
    <section className={`theme-${!!props.auth ? props.auth.theme : 'main'}`}>
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
                toggleModal={() => toggleModal('edit', props.page.currentMeme)}
                memes={props.memes}
              />
            )}
          />
          <Route exact path="/signup" render={() => <SignUp logo={logo} />} />
        </div>
        {!!modalShowing ? (
          <AddEditModal
            meme={memeToEdit}
            modalType={modalType}
            toggleModal={() => toggleModal(null, null)}
            addMeme={props.addMeme}
            deleteMeme={props.deleteMeme}
            fetchTags={props.fetchTags}
            fetchMemes={props.fetchMemes}
          />
        ) : null}
      </div>
      {/* <SEO url="default" /> */}
    </section>
  );
};

function mapStateToProps({ auth, memes, tags, currentMeme, page }) {
  return { auth, memes, tags, currentMeme, page };
}

export default withRouter(
  connect(
    mapStateToProps,
    actions
  )(App)
);
