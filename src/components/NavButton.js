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
    this.props.viewFilter(type);
  }
  render() {
    return (
      <NavDiv>
        <Button all onClick={ () => { this.chanckFilter('all') } }>全顯示</Button>
        <Button completed onClick={ () => { this.chanckFilter('completed') } }>顯示勾選</Button>
        <Button unCompleted onClick={ () => { this.chanckFilter('unCompleted') } }>顯示未勾選</Button>
        <Hr />
      </NavDiv>
    )
  }
}

const action = { viewFilter };

export default connect(null, action)(NavButton);
