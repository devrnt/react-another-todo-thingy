import * as React from 'react';

import TodoProvider from './TodoContext';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Controls from './Controls';
import styles from './TodoContainer.module.css';

const TodoContainer: React.FC = () => {
  return (
    <TodoProvider>
      <section className={styles.section}>
        <TodoList />
        <Controls />
        <AddTodo />
      </section>
    </TodoProvider>
  );
};

export default TodoContainer;
