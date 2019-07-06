import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from '../actions/step_actions';
import merge from 'lodash/merge';

const initialState = {
  1: {id: 1, todoId: 1, title: 'Step 1', body: 'step one task one'}, 
  2: {id: 2, todoId: 1, title: 'Step 2', body: 'step two task one'}, 
  3: {id: 3, todoId: 2, title: 'Step 1', body: 'step one task two'}
};

const stepsReducer = (state = initialState, action) => {
  let newState = {};

  switch(action.type) {
    case RECEIVE_STEPS:
      return action.steps.reduce((obj, step) => {
        obj[step.id] = step;
        return obj;
      }, {});
    case RECEIVE_STEP:
      newState[action.step.id] = action.step;
      return merge({}, state, newState);
    case REMOVE_STEP:
      newState = merge({}, state);
      delete newState[action.step.id];
      return newState;
    default:
      return state;
  }
};

export default stepsReducer;
