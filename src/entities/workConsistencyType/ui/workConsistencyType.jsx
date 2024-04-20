import React from 'react';
import PropTypes from 'prop-types';
import styles from 'entities/workConsistencyType/ui/workConsistencyType.module.scss';

export const WorkConsistencyType = ({ img, alt, text }) => {
  return (
    <div className={styles.grid}>
      <img
        className={styles.image}
        src={img}
        alt={alt}
      />
      <p className={styles.text}>{text}</p>
    </div>
  );
};

WorkConsistencyType.propTypes = {
  img: PropTypes.any.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
