import * as React from 'react';

import { useTodo } from './TodoContext';
import styles from './AddTodo.module.css';

const AddTodo: React.FC = () => {
  const { add } = useTodo();
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleSubmit = () => {
    add({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
    >
      <input
        type="text"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
        placeholder="Description"
        required
      />
      <button className={styles.button} type="submit">
        Add
      </button>
    </form>
  );
};

export default AddTodo;
