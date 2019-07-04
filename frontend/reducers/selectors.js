export const allTodos = ({ todos }) => {
  const keys = Object.keys(todos);

  return keys.reduce((arr, key) => {
    arr.push(todos[key]);
    return arr;
  }, []);
};

export const stepsByTodoId = (state, todoId) => {
  let stepsArr = [];

  for (const stepId in state.steps) {
    if (state.steps[stepId].todoId === todoId) {
      const obj = {};
      obj[stepId] = state.steps[stepId];
      stepsArr.push(obj);
    }
  }

  return stepsArr;
};

window.allTodos = allTodos;
window.stepsByTodoId = stepsByTodoId;
