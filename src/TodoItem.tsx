import * as React from 'react';
import clsx from 'clsx';

import { Todo, useTodo } from './TodoContext';
import styles from './TodoItem.module.css';

type Props = {
  todo: Todo;
};

const TodoItem: React.FC<Props> = ({ todo }) => {
  const { remove, toggle } = useTodo();

  const handleToggle = () => {
    toggle(todo.id);
  };

  const handleRemove = () => {
    remove(todo.id);
  };

  return (
    <li
      onClick={handleToggle}
      className={clsx(styles.li, { [styles.completed]: todo.isCompleted })}
    >
      <div className={styles.content}>
        <h3 className={styles.heading}>{todo.title}</h3>
        <p className={styles.p}>{todo.description}</p>
      </div>
      <button
        className={clsx(styles.button, 'danger', 'icon')}
        onClick={handleRemove}
        type="button"
      >
        X
      </button>
    </li>
  );
};

export default TodoItem;
