import React, { useRef, useState } from 'react';
import styles from './StepsForm.module.css';

export const StepsForm = ({ toAddDistance }) => {
  const dateRef = useRef();
  const distRef = useRef();

  const handleAddDistance = (event) => {
    event.preventDefault();
    console.log(Date.parse(dateRef.current.value));
    if (isNaN(Date.parse(dateRef.current.value) && +distRef.current.value)) {
      alert('Неверный формат данных');
      return;
    }

    toAddDistance({
      date: Date.parse(dateRef.current.value),
      distance: +distRef.current.value,
    });
  };

  return (
    <div className={styles.wrapper}>
      <form
        name="addDistanse"
        onSubmit={(e) => handleAddDistance(e)}
        className={styles.form}
      >
        <div className={styles.inputInner}>
          <label htmlFor="date">Дата (ДД. ММ. ГГГГ)</label>
          <input
            name="date"
            ref={dateRef}
            className={styles.input}
            maxLength={10}
          ></input>
        </div>
        <div className={styles.inputInner}>
          <label htmlFor="distance">Пройдено, км</label>
          <input name="distance" ref={distRef} className={styles.input}></input>
        </div>

        <button className={styles.btn}>ok</button>
      </form>
    </div>
  );
};
