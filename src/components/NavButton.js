import React, { Component } from 'react';
import { connect } from 'react-redux';
import { viewFilter } from '../actions';

class NavButton extends Component {
  // constructor(props) {
  //   super(props);
  //   this.chanckFilter = this.chanckFilter.bind(this);
  // }
  chanckFilter(type) {
    const { viewFilter } = this.props;
    viewFilter(type);
  }
  render() {
    return (
      <div>
        <button onClick={ this.chanckFilter.bind(this, 'all') }>全顯示</button>
        <button onClick={ this.chanckFilter.bind(this, 'completed') }>顯示完成</button>
        <button onClick={ this.chanckFilter.bind(this, 'unCompleted') }>顯示未完成</button>
      </div>
    )
  }
}

const action = { viewFilter };

export default connect(null, action)(NavButton);
