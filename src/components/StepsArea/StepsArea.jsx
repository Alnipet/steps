import React, { useState } from 'react';
import styles from './StepsArea.module.css';

export const StepsArea = ({ distanceArr, toRemoveDistance }) => {

  const sortedArr = distanceArr.sort((a, b) => {
    if (a.date > b.date)  return 1;
    if (a.date < b.date) return -1;
    return 0;
  })

  const stepsCards = sortedArr.map((item) => {
    const date = new Date(item.date).toLocaleDateString()
    return (
      <div key={item.date} className={styles.stepsCard}>
        <div className={styles.date}>{date}</div>
        <div className={styles.dist}>{item.distance}</div>
        <div className={styles.cross} onClick={() => toRemoveDistance(item.date)}>X</div>
      </div>
    );
  })

  return (
    <div className={styles.wrapper}>
      <div className={styles.stepsCard}>
        <div className={styles.date}>Дата (ДД. ММ. ГГГГ.)</div>
        <div className={styles.dist}>Пройдено, км</div>
        <div className={styles.delete}>Удалить</div>
      </div>
      <div className={styles.inner}>
        {stepsCards}
      </div>
    </div>
  );
};
