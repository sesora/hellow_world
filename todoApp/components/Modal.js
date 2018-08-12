import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.newTask = "";
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  componentDidUpdate() {
    this.newTask = "";
    if( this.props.isShow ) {
      document.addEventListener("keydown", this.onKeyDown);
      this.refs.firstFocus.focus();
      this.refs.firstFocus.value = "";
    }
    else {
      document.removeEventListener("keydown", this.onKeyDown);
    }
  }

  onChange(value) {
    this.newTask = value;
  }

  onKeyDown(e) {
    if( e.shiftKey && e.key === "Tab" ) {
      if( document.activeElement === this.refs.firstFocus ) {
        this.refs.lastFocus.focus();
        e.preventDefault();
      }
    }else if ( e.key === "Tab" ) {
      if( document.activeElement === this.refs.lastFocus ) {
        this.refs.firstFocus.focus();
        e.preventDefault();
      }
    }else if (e.key === "Enter") {
      this.updateTask();
    }
  }

  updateTask = ()=> {
    if(this.newTask) {
      this.props.updateTask(this.newTask);
    }
    this.props.onClose();
  }

  render() {
    // if(!this.props.isShow) {
    //   return null;
    // }

    return (
      <React.Fragment>
        <ModalElm isShow={this.props.isShow}>
          <input onChange={(e) => this.onChange(e.target.value)} ref="firstFocus"/>
          <button id="lastFocus" onClick={this.updateTask} ref="lastFocus">更新</button>
        </ModalElm>
        <Backdrop onClick={()=> this.props.onClose()} isShow={this.props.isShow}></Backdrop>
      </React.Fragment>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.3);
  visibility: ${props => props.isShow ? "visible" : "hidden"};
`;

const ModalElm = styled.div`
  position: fixed;
  background-color: #fff;
  border-radius: 5px;
  width: 350px;
  height: 100px;
  margin-left: 30px;
  padding: 30px;
  z-index: 1;
  visibility: ${props => props.isShow ? "visible" : "hidden"};
  opacity: ${props => props.isShow ? 1 : 0};
  transform: scale(${props => props.isShow ? 1 : .95});
  transition: opacity 0.1s ease-out, transform 0.1s ease-out;
`;

export default Modal;