import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components/';
import { viewFilter } from '../actions';

const NavDiv = styled.div`
  margin: 15px 0;
`;

const Button = styled.button`
  border-radius: 3px;
  padding: 5px 10px;
  margin: 0 1em;
  background: transparent;
  color: #000;
  border: 1px solid #d0d0d0;
  cursor: pointer;

  ${props => props.all && css`
    margin-left: 0;
  `}

  ${props => props.completed && css`
    background: #34ABCA;
    color: #fff;
    border: 1px solid #34ABCA;
  `}

  ${props => props.unCompleted && css`
    background: red;
    color: #fff;
    border: 1px solid red;
  `}
`;

const Hr = styled.hr`
  margin: 14px 0;
`;

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
