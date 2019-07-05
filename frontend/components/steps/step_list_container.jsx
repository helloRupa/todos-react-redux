import { connect } from 'react-redux';
import StepList from './step_list';
import { stepsByTodoId } from '../../reducers/selectors';
import { receiveStep } from '../../actions/step_actions';

const mapStateToProps = (state, todoId) => ({
  steps: stepsByTodoId(state, todoId)
});

const mapDispatchToProps = (dispatch) => ({
  receiveStep: (step) => dispatch(receiveStep(step))
});

export const StepListContainer = connect(mapStateToProps, mapDispatchToProps)(StepList);
