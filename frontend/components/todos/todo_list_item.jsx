import React from 'react';
// import TodoDetailView from './todo_detail_view';
import TodoDetailViewContainer from './todo_detail_view_container';

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {done: this.props.todo.done, detail: false};
    this.updateTodo = this.updateTodo.bind(this);
    this.updateDeleteText = this.updateDeleteText.bind(this);
    this.toggleDetail = this.toggleDetail.bind(this);
  }

  updateTodo(e) {
    this.setState({done: !this.props.todo.done}, () => {
      this.props.receiveTodo({...this.props.todo, done: this.state.done});
    });
  }

  updateDeleteText() {
    return this.state.done ? 'Undo' : 'Done';
  }

  toggleDetail() {
    this.setState({detail: !this.state.detail});
  }

  showDetails() {
    if (this.state.detail) {
      return <TodoDetailViewContainer todo = {this.props.todo} />
      // return <TodoDetailView todo = {this.props.todo} removeTodo = {this.props.removeTodo} />;
    } else {
      return '';
    }
  }

  render() {
    return(
      <div>
        <li onClick={this.toggleDetail}>{this.props.todo.title}</li>
        <button onClick={this.updateTodo}>
          {this.updateDeleteText()}
        </button>
        {this.showDetails()}
      </div>
    );
  }
};
