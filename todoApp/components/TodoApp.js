import React, { Component } from 'react';
import Reboot    from 'material-ui/Reboot';
import AppBar    from 'material-ui/AppBar';
import Toolbar   from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button    from 'material-ui/Button';
import Input     from 'material-ui/Input';
import './TodoApp.css';
import Modal   from './Modal.js';
import history from '../../history';
import styled from 'styled-components';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.taskListElem = [];
  }

  TodoList2 = ()=> {
    this.taskListElem = [];
    for( let i=0; i < this.props.tasks.length + 1; i++ ) {
      let list = (
        <TaskList key={i}>
          <input type="text" readOnly ref={"task"+i}></input>
          <button onClick={() => this.props.toggleModal(i)} >変更</button>
          <button onClick={(e) => this.deleteTask(e,i)} >削除</button>
        </TaskList> 
      );
      this.taskListElem.push(list);
    }
    return (
      <ul ref="taskList">
        {this.taskListElem}
      </ul>
    );
  }

  deleteTask = (e, i)=> {
    e.target.parentNode.animate({opacity: [1, 0], marginLeft: ["0px", "-80px"]}, 300).onfinish = ()=>{
      this.props.deleteTask(i);
    };
  };

  addTask = ()=> {
    if( this.props.task ) {
      this.refs["task" + this.props.tasks.length].value = this.props.task;
      console.log(this.refs["task" + this.props.tasks.length] );
      this.props.addTask(this.props.task);
    }
  }
//() => this.props.task && this.props.addTask(this.props.task)
  render() {
    return (
      <div>
        <Reboot />
        <AppBar position="static">
          <Toolbar>
            <Typography type="title" color="inherit">
              TodoApp
            </Typography>
          </Toolbar>
        </AppBar>
        <div style={{ padding:'16px' }}>
          <Input onChange={(e) => this.props.inputTask(e.target.value)} value={this.props.task}/>
          <Button raised color="primary" onClick={this.addTask}>add</Button>
          <Button raised color="primary" onClick={() => this.props.deleteAllTask()}>deleteAll</Button>
          <TodoList tasks={this.props.tasks} openModal={this.props.toggleModal} deleteTask={this.props.deleteTask}></TodoList>
          {this.TodoList2()}
          <TodoList3 tasks={this.props.tasks} openModal={this.props.toggleModal} deleteTask={this.props.deleteTask}></TodoList3>
        </div>
        <Modal isShow={this.props.isModalOpen} onClose={this.props.toggleModal} updateTask={this.props.updateTask}></Modal>
        <button onClick={() => history.push('/')} >戻る</button>
        <button onClick={() => this.props.redirectToError()} >エラーページへ</button>
      </div>
    )
  }
}

function TodoList(props) {
  const deleteTask = (e, i)=> {
    e.target.parentNode.animate({opacity: [1, 0], marginLeft: ["0px", "-80px"]}, 300).onfinish = ()=>{
      props.deleteTask(i);
    };
  };

  return (
    <ul>
      {
        props.tasks.map(function(item, i) {
          return (
            <li key={i}>
              {item}
              <button onClick={() => props.openModal(i)} >変更</button>
              <button onClick={(e) => deleteTask(e,i)} >削除</button>
            </li>
          );
        })
      }
    </ul>
  )
}

class TodoList3 extends Component {
  constructor(props) {
    super(props);
    this.taskListElem = [];
  }
  
  deleteTask = (e, i)=> {
    e.target.parentNode.animate({opacity: [1, 0], marginLeft: ["0px", "-80px"]}, 300).onfinish = ()=>{
      this.props.deleteTask(i);
    };
  };
   
  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.props.openModal(0)} >変更</button>
      <ul>
        {
          this.props.tasks.map(function(item, i) {
            return (
              <li key={i}>
                {item}
                <button onClick={() => this.props.openModal(i)} >変更</button>
                <button onClick={(e) => this.deleteTask(e,i)} >削除</button>
              </li>
            );
          })
        }
      </ul>
      </React.Fragment>
    )
  }
}

const TaskList = styled.li`
  // visibility: ${props => props.value ? "visible" : "hidden"};
  // opacity: ${props => props.value ? 1 : 0};
  // transition: opacity 0.1s ease-out;
`;

export default TodoApp;