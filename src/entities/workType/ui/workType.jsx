import React from 'react';
import PropTypes from 'prop-types';
import styles from 'entities/workType/ui/workType.module.scss';

export const WorkType = ({ title, img, price }) => {
  return (
    <div className={styles.workContainer}>
      <img
        className={styles.workImage}
        src={img}
      />
      <p className={styles.subtext}>{title}</p>
      <p className={styles.priceText}>{price}</p>
    </div>
  );
};

WorkType.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.any.isRequired,
  price: PropTypes.string.isRequired
};
