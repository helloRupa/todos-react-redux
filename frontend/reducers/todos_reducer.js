import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_TODOS:
      return action.todos.reduce((obj, todoObj) => {
        obj[todoObj.id] = todoObj;
        return obj;
      }, {});
    case RECEIVE_TODO:
      const obj = {};

      obj[action.todo.id] = action.todo;
      return merge({}, state, obj);
    default: 
      return state;
  }
};

export default todosReducer;