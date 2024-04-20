import React from 'react';
import styles from 'widgets/customerReviews/ui/customerReviews.module.scss';
import photo from 'widgets/customerReviews/images/Photo.svg';

export const CustomerReviews = () => {
  return (
    <section className={styles.mainContainer}>
      <h2 className={styles.title}>Отзывы</h2>
      <div className={styles.container}>
        <div className={styles.feedBackContainer}>
          <img
            className={styles.image}
            src={photo}
            alt="Фото пользователя"
          />
          <div className={styles.textContainer}>
            <h3 className={styles.subtitle}>Вадим</h3>
            <p className={styles.text}>
              В частный дом необходимо было установить комплексное решение для слежением за домом по периметру, а также
              наладить удаленный доступ с телефона. Ребята все организовали в кратчайшие сроки. Теперь я спокоен за свой
              дом.
            </p>
          </div>
        </div>
        <div className={styles.feedBackContainer}>
          <img
            className={styles.image}
            src={photo}
            alt="Фото пользователя"
          />
          <div className={styles.textContainer}>
            <h3 className={styles.subtitle}>Ангелина</h3>
            <p className={styles.text}>
              В офисе необходимо было построить внутреннюю локальную сеть, настроить бесшовное Wi-Fi соединение и
              установить несколько камер. Все было сделано в лучшем виде. Работа заняла один день, сразу видно работают
              профессионалы.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
