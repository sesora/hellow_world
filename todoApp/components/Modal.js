import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.newTask = "";
  }

  onChange(value) {
    this.newTask = value;
  }

  updateTask() {
    if(this.newTask) {
      this.props.updateTask(this.newTask);
      this.newTask = "";
    }
    this.props.onClose();
  }

  render() {
    if(!this.props.show) {
      return null;
    }

    return (
      <React.Fragment>
        <ModalElm>
          <div className="footer">
            <input onChange={(e) => this.onChange(e.target.value)}/>
            <button onClick={()=> this.updateTask()}>更新</button>
          </div>
        </ModalElm>
        <Backdrop onClick={()=> this.props.onClose()}></Backdrop>
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
`;

const ModalElm = styled.div`
  position: fixed;
  background-color: #fff;
  border-radius: 5px;
  width: 350px;
  height: 100px;
  margin: 30px;
  padding: 30px;
  z-index: 1;
  animation: ${fadeIn} 1s linear;
  /* visibility: hidden; */
`;

const fadeIn = keyframes`
  from {
    transform: scale(.25);
    opacity: 0;
  }
  to {
    visibility: visible;
    transform: scale(1);
    opacity: 1;
  }
`;

export default Modal;