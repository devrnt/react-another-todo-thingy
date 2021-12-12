import * as React from 'react';
import { v4 as uuid } from '@lukeed/uuid';

export type Todo = {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
};

export type AddTodo = Omit<Todo, 'id' | 'isCompleted'>;

type TodoContextValue = {
  todos: Todo[];
  add: (todo: AddTodo) => void;
  remove: (id: string) => void;
  reset: () => void;
  amount: number;
  toggle: (id: string) => void;
  amountCompleted: number;
};

const TodoContext = React.createContext<TodoContextValue | null>(null);

const LOCAL_STORAGE_KEY = 'te-doen';

const getInitialTodos = () => {
  const raw = localStorage.getItem(LOCAL_STORAGE_KEY);

  return raw ? JSON.parse(raw) : [];
};

const TodoProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = React.useState<Todo[]>(() => getInitialTodos());

  React.useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        add: (todo) => {
          setTodos((todos) => [
            ...todos,
            { id: uuid(), isCompleted: false, ...todo },
          ]);
        },
        amount: todos.length,
        amountCompleted: todos.filter((todo) => todo.isCompleted).length,
        remove: (id) => {
          setTodos((todos) => todos.filter((todo) => todo.id !== id));
        },
        reset: () => setTodos([]),
        toggle: (id) => {
          setTodos((todos) => {
            return todos.map((todo) => {
              if (todo.id === id) {
                return {
                  ...todo,
                  isCompleted: !todo.isCompleted,
                };
              }

              return todo;
            });
          });
        },
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = React.useContext(TodoContext);

  if (context === null) {
    throw new Error('Wrap inside TodoProvider');
  }

  return context;
};

export default TodoProvider;
