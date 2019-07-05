import React from 'react';
import uniqueId from '../../util/uniqe_id';

export default class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initialState();
    this.submit = this.submit.bind(this);
    this.titleChange = this.titleChange.bind(this);
    this.bodyChange = this.bodyChange.bind(this);
  }

  initialState() {
    return { id: '', title: '', body: '', todoId: this.props.todoId };
  }

  titleChange(e) {
    this.setState({ title: e.currentTarget.value });
  }

  bodyChange(e) {
    this.setState({ body: e.currentTarget.value });
  }

  submit(e) {
    e.preventDefault();
    this.props.receiveStep({ ...this.state, id: uniqueId() });
    this.setState(this.initialState());
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <input 
          type="text" 
          placeholder="Title" 
          value={this.state.title}
          onChange={this.titleChange}>
        </input>

        <input 
          type="text" 
          placeholder="Body" 
          value={this.state.body}
          onChange={this.bodyChange}>
        </input>

        <input type="submit" value="Submit"></input>
      </form>
    );
  }
};