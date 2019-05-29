import React, { useState, useEffect } from 'react';
import Button from '../common/Button';
import styles from './AddEditModal.module.css';

const AddEditModal = ({
  meme,
  modalType,
  toggleModal,
  addMeme,
  deleteMeme,
  fetchTags,
  fetchMemes
}) => {
  const [link, setLink] = useState(null);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (meme) {
      setLink(meme.link);
      setTags(meme.tags);
    }

    return () => {
      fetchMemes();
    };
  }, [fetchMemes, meme]);

  // Turns a comma separated string list into an array
  const tagsIntoArray = tagStr => {
    let tagArr = tagStr.split(',').map(tag => tag.trim());
    return tagArr;
  };

  // Handles form submission.
  const handleOnSubmit = async e => {
    e.preventDefault();
    // If there is a link, addMeme.
    if (!!link) {
      await addMeme({
        link: link,
        tags: tags
      });
    }
    // Refetch the tag list
    await fetchTags();
    // Close the modal
    await toggleModal();
  };

  // Deletes a meme and refetches memes and tags.
  const handleDelete = async imageId => {
    // Delete meme.
    await deleteMeme(imageId);
    // After delete, refetch memes and tags.
    await fetchMemes();
    await fetchTags();
    // Close Modal.
    await toggleModal(null);
  };

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.overlay} onClick={toggleModal} />
      <div className={styles.addImageModal}>
        <h2>
          {modalType === 'add' ? 'Add Your Favorite Memes!' : 'Edit Your Meme!'}
        </h2>
        <form onSubmit={handleOnSubmit}>
          {modalType === 'add' ? (
            <input
              type="url"
              name="link"
              placeholder="Link to Image"
              onChange={e => setLink(e.target.value)}
            />
          ) : (
            <p className={styles.modalLinkDisplay}>{meme.link}</p>
          )}
          <input
            type="text"
            name="tags"
            placeholder="Keywords separated by commas"
            onChange={e => setTags(tagsIntoArray(e.target.value))}
            value={tags}
          />
          {modalType === 'add' ? (
            <Button type="submit" className="memeDisplayBtn">
              Submit
            </Button>
          ) : (
            <div className={styles.modalEditButtons}>
              <Button
                type="button"
                className="redBtn"
                onClick={() => handleDelete(meme.linkId)}
              >
                Delete
              </Button>
              <Button type="submit" className="memeDisplayBtn">
                Submit
              </Button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddEditModal;
