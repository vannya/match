import React from 'react';
import { connect } from 'react-redux';
import MemeDisplay from '../MemeDisplay';
import placeholder from '../../assets/website.png';
import * as actions from '../../actions';
import styles from './MemeBoard.module.css';

const MemeBoard = props => {
  // Verifies that link is an image, else will render a placeholder image.
  const isImage = link => {
    // Turns link into array to verify file type
    const linkArr = link.split('.');
    const linkEnding = linkArr[linkArr.length - 1];
    if (
      linkEnding === 'jpg' ||
      linkEnding === 'jpeg' ||
      linkEnding === 'png' ||
      linkEnding === 'gif'
    ) {
      return true;
    } else {
      return false;
    }
  };

  const renderMemes = memes => {
    if (!!memes) {
      return memes.map((meme, i) => {
        return (
          <MemeDisplay
            key={i}
            imgSrc={isImage(meme.link) ? meme.link : placeholder}
            link={meme.link}
            linkId={meme._id}
            tags={meme.tags}
            toggleModal={() => props.toggleEditModal('edit', meme)}
          />
        );
      });
    }
  };
  return <div className={styles.memeList}>{renderMemes(props.memes)}</div>;
};

export default connect(
  null,
  actions
)(MemeBoard);
