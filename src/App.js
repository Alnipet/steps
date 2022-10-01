import { useState } from 'react';
import styles from './App.module.css';
import { StepsForm } from './components/StepsForm/StepsForm';
import { StepsArea } from './components/StepsArea/StepsArea';

function App() {
  const [distanceArr, setDistanceArr] = useState([]);

  const toAddDistance = (data) => {
    if (distanceArr.length === 0) {
      setDistanceArr([data]);
      return;
    }

    const existing = distanceArr.find((elem) => {
      return elem.date === data.date;
    });

    if (!existing) {
      setDistanceArr([...distanceArr, data]);
      return;
    }

    const filterArr = distanceArr.filter((elem) => {
      return elem.date !== data.date;
    });

    setDistanceArr([
      ...filterArr,
      { date: existing.date, distance: existing.distance + data.distance },
    ]);
  };

  const toRemoveDistance = (data) => {
    const arr = distanceArr.filter((elem) => elem.date !== data);
    setDistanceArr([...arr]);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <StepsForm toAddDistance={toAddDistance} />
        <StepsArea
          distanceArr={distanceArr}
          toRemoveDistance={toRemoveDistance}
        />
      </div>
    </div>
  );
}

export default App;
