import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoListItem extends Component {
  render() {
    const { text } = this.props.data;
    return (
      <li>
        { text }
      </li>
    );
  }
}

export default connect(null)(TodoListItem);