import React, {Component} from 'react';
import styled from 'styled-components';
import history from '../../history'

class Style_1 extends Component {
  constructor(){
    super();
    this.state = {
        buttonNum: 0
    };
  }

  AddButton() {
    this.setState({
      buttonNum: this.state.buttonNum + 1,
    });
  }

  Deletebutton() {
    if( 0 < this.state.buttonNum ) {
      this.setState({
        buttonNum: this.state.buttonNum - 1,
      });
    }
  }

  RenderButton() {
    let buttonList = [];
    for(let i=0; i < this.state.buttonNum; i++) {
      buttonList.push( <Button key={i.toString()} onClick={()=> this.AddButton() }>{"ボタン" + (i+1)}</Button> );
    }
    return buttonList;  
  }

  render(){
    return (
      <React.Fragment>
        <Button　onClick={()=> history.push('/') }>戻る</Button>
        <Button　onClick={()=> this.AddButton() }>追加</Button>
        <Button　onClick={()=> this.Deletebutton() }>削除</Button>
        <div>
          {this.RenderButton()}
        </div>
      </React.Fragment>
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