export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveTodos = (todosArr) => ({
  type: RECEIVE_TODOS,
  todos: todosArr
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todos: todo
});