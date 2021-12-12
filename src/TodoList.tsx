import * as React from 'react';

import { useTodo } from './TodoContext';
import TodoItem from './TodoItem';
import styles from './TodoList.module.css';

const TodoList: React.FC = () => {
  const { todos, amount } = useTodo();

  if (amount === 0) {
    return <p className={styles.p}>You're all settled up! 📝</p>;
  }

  return (
    <ul className={styles.ul}>
      {todos.map((todo) => (
        <article key={todo.id}>
          <TodoItem todo={todo} />
        </article>
      ))}
    </ul>
  );
};

export default TodoList;
