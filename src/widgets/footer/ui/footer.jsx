import React from 'react';
import styles from 'widgets/footer/ui/footer.module.scss';
import logo from 'widgets/footer/images/logo.jpeg';
import call from 'widgets/footer/images/call.svg';
import mail from 'widgets/footer/images/mail.svg';
import mesto from 'widgets/footer/images/mesto.svg';
import { Avatar } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';

export const Footer = () => {
  return (
    <section className={styles.footerContainer}>
      <div className={styles.contentContainer}>
        <img
          className={styles.logoImage}
          src={logo}
          alt="Логотип компании Visual Connect"
        />
        <iframe
          className={styles.map}
          src="https://yandex.ru/map-widget/v1/?ll=39.600918%2C52.596257&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjUwMDg0OBJD0KDQvtGB0YHQuNGPLCDQm9C40L_QtdGG0LosINGD0LvQuNGG0LAg0Jwu0JguINCd0LXQtNC10LvQuNC90LAsIDbQkCIKDVZnHkIVkWJSQg%2C%2C&z=16.88"
        ></iframe>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Контакты</h2>
          <div className={styles.contactContainer}>
            <img src={call} />
            <div>
              <p className={styles.text}>+7(920) 506 11 58</p>
              <p className={styles.text}>+7(915) 550 77 82</p>
            </div>
          </div>
          <div className={styles.contactContainer}>
            <img src={mail} />
            <p className={styles.text}>ponchic-09@mail.ru</p>
          </div>
          <div className={styles.contactContainer}>
            <img src={mesto} />
            <p className={styles.text}>Неделина 6а</p>
          </div>
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Обратная связь</h2>
          <div className={styles.socials}>
            <a
              className={styles.link}
              href="https://wa.me/79205061158"
              target="blank"
            >
              <Avatar>
                <WhatsAppIcon />
              </Avatar>
            </a>
            <a
              className={styles.link}
              href="https://t.me/andyshatzzz"
              target="blank"
            >
              <Avatar>
                <TelegramIcon />
              </Avatar>
            </a>
            <a
              className={styles.link}
              href="mailto:ponchic-09@mail.ru"
              target="blank"
            >
              <Avatar>
                <EmailIcon />
              </Avatar>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <p className={styles.bottomText}>Copyright ©2023</p>
        <p className={styles.bottomText}>Visual Connect - системы видеонаблюдения</p>
      </div>
    </section>
  );
};
