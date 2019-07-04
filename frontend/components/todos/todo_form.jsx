import React from 'react';
import uniqueId from '../../util/uniqe_id';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initialState();
    this.submit = this.submit.bind(this);
    this.change = this.change.bind(this);
  }

  initialState() {
    return { id: '', title: '', body: '', done: false };
  }

  change(e) {
    switch(e.currentTarget.id) {
      case 'title':
        this.setState({ title: e.currentTarget.value });
        break;
      case 'body':
        this.setState({ body: e.currentTarget.value });
        break;
    }
  }

  submit(e) {
    e.preventDefault();

    const newTodo = { ...this.state, id: uniqueId() };

    store.dispatch(this.props.receiveTodo(newTodo));
    this.setState(this.initialState());
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <label htmlFor="title">Title</label>
        <input type="text" 
          id="title" 
          placeholder="Title" 
          onChange={this.change} 
          value={this.state.title}>
        </input>

        <label htmlFor="body">Body</label>
        <textarea 
          id="body" 
          placeholder="description" 
          onChange={this.change}
          value={this.state.body}>
          </textarea>

        <input type="submit" value="Submit" onClick={this.submit}></input>
      </form>
    );
  }
};
