import * as React from 'react';

import TodoContainer from './TodoContainer';
import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Te doen</h1>
      <TodoContainer />
    </main>
  );
};

export default App;
