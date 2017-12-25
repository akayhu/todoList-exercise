import React, { Component } from 'react';
import { connect } from 'react-redux';
import { viewFilter } from '../actions';
import { NavDiv, Button, Hr } from './styled';

class NavButton extends Component {
  constructor(props) {
    super(props);
    this.chanckFilter = this.chanckFilter.bind(this);
  }
  chanckFilter(type) {
    const { viewFilter } = this.props;
    viewFilter(type);
  }
  render() {
    return (
      <NavDiv>
        <Button all onClick={ () => { this.chanckFilter('all') } }>全顯示</Button>
        <Button completed onClick={ () => { this.chanckFilter('completed') } }>顯示完成</Button>
        <Button unCompleted onClick={ () => { this.chanckFilter('unCompleted') } }>顯示未完成</Button>
        <Hr />
      </NavDiv>
    )
  }
}

const action = { viewFilter };

export default connect(null, action)(NavButton);
