import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
        {this.props.todos.map((todo) => (
          <TodoListItem 
            todo={todo} 
            key={todo.id} 
            removeTodo={this.props.removeTodo} 
            receiveTodo={this.props.receiveTodo} />
        ))}
        </ul>
        <TodoForm receiveTodo={this.props.receiveTodo} />
      </div>
    );
  }
};
