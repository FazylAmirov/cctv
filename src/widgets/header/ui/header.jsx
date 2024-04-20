import React from 'react';
import styles from 'widgets/header/ui/header.module.scss';
import logo from 'widgets/header/images/kandinskyConnect.png';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.logoImage}
        src={logo}
        alt="Логотип компании"
      />
      <h1 className={styles.headerTitle}>Установка систем видеонаблюдения в Липецке и Липецкой области</h1>
      <div className={styles.workContainer}>
        <p className={styles.hourWork}>Пн-Вс 10:00-21:00</p>
        <p className={styles.address}>г. Липецк, ул. Неделина, д. 6а</p>
      </div>
      <div className={styles.phNumberContainer}>
        <p className={styles.phNumber}>+7(920) 506 11 58</p>
        <p className={styles.phNumber}>+7(915) 550 77 82</p>
        <a
          href="#feedBack"
          className={styles.feedbackButton}
        >
          <button className={styles.feedbackButton}>Заказать звонок</button>
        </a>
      </div>
    </header>
  );
};
