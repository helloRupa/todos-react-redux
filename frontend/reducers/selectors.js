export const allTodos = ({ todos }) => {
  const keys = Object.keys(todos);

  return keys.reduce((arr, key) => {
    arr.push(todos[key]);
    return arr;
  }, []);
};

export const stepsByTodoId = ({steps}, {todoId}) => {
  let stepsArr = [];

  for (const stepId in steps) {
    if (steps[stepId].todoId === todoId) {
      stepsArr.push(steps[stepId]);
    }
  }

  return stepsArr;
};
