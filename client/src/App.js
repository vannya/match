import React, { useEffect } from 'react';
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
  const { fetchUser } = props;

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <>
      <div className={styles.app}>
        <HeaderContainer
          auth={props.auth}
          fetchMemes={props.fetchMemes}
          openAddModal={() => props.toggleModal('add', null)}
          closeAddModal={() => props.toggleModal(null, null)}
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
                toggleEditModal={props.toggleModal}
                memes={props.memes}
              />
            )}
          />
          <Route exact path="/signup" render={() => <SignUp logo={logo} />} />
        </div>
        {!!props.page.modalShowing ? (
          <AddEditModal
            meme={props.page.memeToEdit}
            modalType={props.page.modalType}
            toggleModal={() => props.toggleModal(null, null)}
            addMeme={props.addMeme}
            deleteMeme={props.deleteMeme}
            fetchTags={props.fetchTags}
            fetchMemes={props.fetchMemes}
          />
        ) : null}
      </div>
      {/* <SEO url="default" /> */}
    </>
  );
};

function mapStateToProps({ auth, memes, tags, page }) {
  return { auth, memes, tags, page };
}

export default withRouter(
  connect(
    mapStateToProps,
    actions
  )(App)
);
