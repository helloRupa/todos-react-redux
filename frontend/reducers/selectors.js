const allTodos = ({ todos }) => {
  const keys = Object.keys(todos);

  return keys.reduce((arr, key) => {
    arr.push(todos[key]);
    return arr;
  }, []);
};

window.allTodos = allTodos;

export default allTodos;
