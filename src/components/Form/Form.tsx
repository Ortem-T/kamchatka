import React from 'react';
// import { useForm } from 'react-hook-form';
import styles from './Form.module.css';

function Form() {
  return (
    <form className={styles.form} noValidate>
      <div>
        <label className='login__label'>Имя участника</label>
        <input
          className='login__input'
          placeholder='Имя'
          type='text'
          id='name'
        />
        <label className='login__label'>Количество человек</label>
        <input
          className='login__input'
          placeholder='1'
          type='text'
          id='peoples'
        />
      </div>
      <div>
        <input
          className='checkbox__input'
          type='checkbox'
          id='checkbox'
          name='checkbox'
          aria-label='Найти короткометражки'
        />
        <label className='checkbox__label' htmlFor='checkbox'>
          Короткометражки
        </label>
      </div>
      <div>
      <label className='login__label'>Имя участника</label>
        <input
          className='login__input'
          placeholder='Имя'
          type='date'
          id='name'
        />
      </div>
      <div>
      <label className='login__label'>Имя участника</label>
        <textarea
          className='login__input'
          placeholder='Имя'
          id='name'
        />
      </div>
      <button
        className='login__button'
        type='submit'
      >
        Отправить заявку
      </button>
    </form>
  );
}

export default Form;
