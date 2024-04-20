import styles from 'widgets/feedback/ui/feedback.module.scss';
import { Box, Button, Snackbar, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
// import { SnackbarAlert } from 'shared/snackbarAlert/ui/snackbarAlert';

export const Feedback = () => {
  const [postMessage, setPostMessage] = useState('');
  const [isSuccessPost, setIsSuccessPost] = useState(false);

  const form = useForm({
    mode: 'onChange'
  });
  const { register, formState } = form;
  const { errors, isSubmitting, isDirty, isValid } = formState;

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_pibp90b', 'template_0rq9l6m', e.target || '', 'EtuIb7Ig5UkGSVB_B').then(
      () => {
        form.reset();
        setPostMessage('Контактные данные успешно отправлены, наш специалист в ближайшее время свяжется с Вами');
        setIsSuccessPost(true);
      },
      error => {
        // eslint-disable-next-line no-console
        console.log(error.text);
      }
    );
  }

  return (
    <section
      id="feedBack"
      className={styles.feedBackContainer}
    >
      <h2 className={styles.feedBackTitle}>Свяжитесь с нами по телефону: +7(920) 506 11 58</h2>

      <div className={styles.feedBackWrapper}>
        <h2 className={styles.feedBackSubtitle}>Или оставьте свои данные, и мы перезвоним Вам сами</h2>
        <Box
          className={styles.formContainer}
          component="form"
          method="POST"
          onSubmit={sendEmail}
          // sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', ml: 4, mr: 4, mb: 8, mt: 4 }}
        >
          <TextField
            className={styles.textInput}
            fullWidth
            label="Имя"
            {...register('fromName', {
              required: {
                value: true,
                message: 'Данное поле является обязательным'
              },
              pattern: {
                value: /[a-zA-Zа-яА-ЯЁё -]+$/,
                message: 'Имя может содержать только латиницу, кириллицу, пробел и дефис'
              }
            })}
            inputProps={{
              style: {
                height: '15px'
              }
            }}
            helperText={errors.fromName?.message}
          />
          <TextField
            className={styles.textInput}
            label="Номер телефона"
            {...register('phoneNumber', {
              required: {
                value: true,
                message: 'Данное поле является обязательным'
              },
              pattern: {
                value: /^7\d{10}$/,
                message: 'Поле номер телефона должен начинаться с 7 и содержать 11 цифр'
              }
            })}
            // sx={{ width: '270px' }}
            inputProps={{
              style: {
                height: '15px'
              }
            }}
            helperText={errors.phoneNumber?.message}
          />

          <Button
            // sx={{ width: '270px' }}
            className={styles.textInput}
            type="submit"
            variant="contained"
            disabled={isSubmitting || !isDirty || !isValid}
          >
            Отправить
          </Button>
        </Box>
      </div>
      <Snackbar
        message={postMessage}
        autoHideDuration={2000}
        open={isSuccessPost}
        onClose={() => setIsSuccessPost(state => !state)}
      />
    </section>
  );
};
