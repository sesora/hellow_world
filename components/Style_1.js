import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

class Style_1 extends Component {
  constructor(){
    super();
    this.state = {
        count: 1,
        label: "ボタン"
    };
  }

  onClick(){
    this.setState({
      count: this.state.count+1,
      label: "ボタン" + this.state.count.toString()
    });
  }

  RenderButton() {
    let buttonList = [];
    for(let i=0; i < this.state.count; i++) {
      buttonList.push( <Button onClick={()=> this.onClick() }>{"ボタン" + (i+1)}</Button> );
    }
    return buttonList;  
  }

  render(){

    return (
    <div>
      {this.RenderButton()}
    </div>
    )
  }
}


const Button = styled.button`
  display: inline-block;
  cursor: pointer;
  width: 100px;
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  background-color: #20b2aa;
  box-shadow: 0 6px 0 #047c71, 0 12px 0 rgba(0,0,0,0.2);
  transition: color 0.3s, background-color 0.3s, box-shadow 0.3s, transform 0.3s;
  &:hover {
    background-color: #3cc4bd;
    box-shadow: 0 3px 0 #12978d, 0 6px 0px rgba(0,0,0,0.2);
    transform: translateY(3px);
  }
  &:active {
    color: #ddd;
    background-color: #12978d;
    box-shadow: 0 0 0 #047c71, 0 0 0px rgba(0,0,0,0.2);
    transform: translateY(6px);
    transition-duration: 0.1s;
  }
`;



export default Style_1;