import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    console.log(this.props);

    return (
      <table>
        <thead>
          <tr>
            <th>Todo</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <TodoItem />
        </tbody>
      </table>
    );
  }
}

export default TodoList;
