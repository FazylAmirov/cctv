import React from 'react';
import PropTypes from 'prop-types';
import styles from 'entities/whyMeType/ui/whyMeType.module.scss';

export const WhyMeType = ({ img, title, alt }) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={img}
        alt={alt}
      />
      <h2 className={styles.text}>{title}</h2>
    </div>
  );
};

WhyMeType.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.any.isRequired,
  alt: PropTypes.string.isRequired
};
