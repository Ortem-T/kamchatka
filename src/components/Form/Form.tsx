import React from 'react';
// import { useForm } from 'react-hook-form';
import styles from './Form.module.css';

function Form() {
  return (
    <form className={styles.form} noValidate>
      <div className={styles.form_data}>
        <div className={styles.form_name}>
          <label className={styles.label}>Имя участника</label>
          <input
            className={styles.input}
            placeholder='Имя'
            type='text'
            id='name'
          />
        </div>
        <div className={styles.form_name}>
          <label className={styles.label}>Количество человек</label>
          <input
            className={styles.input}
            placeholder='1'
            type='number'
            id='peoples'
          />
        </div>
      </div>
      <div className={styles.form_rate}>
        <p className={styles.label}>Тариф</p>
        <ul className={styles.price_list}>
          <li className={styles.price_item}>
            <div>
              <input
                className={styles.input_checkbox}
                type='radio'
                id='base'
                value='base'
                name='rate'
              />
              <label className={styles.price_text} htmlFor='base'>Базовый (для камчадал)</label>
            </div>
            <p className={styles.price_cost}>79 000 руб</p>
          </li>
          <li className={styles.price_item}>
            <div>
              <input
                className={styles.input_checkbox}
                type='radio'
                id='base+'
                value='base+'
                name='rate'
              />
              <label className={styles.price_text} htmlFor='base+'>Базовый + проживание</label>
            </div>
            <p className={styles.price_cost}>99 000 руб</p>
          </li>
          <li className={styles.price_item}>
            <div>
            <input
              className={styles.input_checkbox}
              type='radio'
              id='base++'
              value='base++'
              name='rate'
            />
            <label className={styles.price_text} htmlFor='base++'>Базовый + проживание + долина гейзеров</label>
            </div>
            <p className={styles.price_cost}>179 000 руб</p>
          </li>
        </ul>
      </div>
      <div className={styles.form_date}>
        <label className={styles.label}>Даты тура</label>
        <input
          className={styles.input}
          placeholder='23.06 - 04.07'
          type='date'
          id='name'
        />
      </div>
      <div className={styles.form_comment}>
        <label className={styles.label}>Комментарий</label>
        <textarea
          className={`${styles.input} ${styles.input_comment}`}
          placeholder='Напишите ваш комментарий здесь'
          id='name'
          rows={1}
        />
      </div>
      <button
        className={styles.button}
        type='submit'
      >
        Отправить заявку
      </button>
    </form>
  );
}

export default Form;
