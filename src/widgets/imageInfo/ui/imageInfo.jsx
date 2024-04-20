import React from 'react';
import styles from 'widgets/imageInfo/ui/ImageInfo.module.scss';

export const ImageInfo = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.wrapper}>
        <h3 className={styles.subtitle}>Проектирование, установка, обслуживание</h3>
        <h2 className={styles.title}>Систем видеонаблюдения</h2>
        <p className={styles.text}>
          Комплексный подход к установке систем видеонаблюдения, построения локальной внутренней сети под ключ
        </p>
        <a
          href="#feedBack"
          className={styles.feedbackLink}
        >
          <button className={styles.feedbackButton}>Получить консультацию</button>
        </a>
      </div>
    </div>
  );
};
