import * as React from 'react';

import { useTodo } from './TodoContext';
import styles from './Controls.module.css';

const Controls: React.FC = () => {
  const { reset, amount, amountCompleted } = useTodo();

  if (amount === 0) {
    return null;
  }

  return (
    <div className={styles.div}>
      <span className={styles.span}>
        {amountCompleted}/{amount} completed
      </span>
      <button className={styles.button} onClick={reset}>Reset</button>
    </div>
  );
};

export default Controls;
