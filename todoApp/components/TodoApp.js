import React, { Component } from 'react';
import Reboot    from 'material-ui/Reboot';
import AppBar    from 'material-ui/AppBar';
import Toolbar   from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button    from 'material-ui/Button';
import Input     from 'material-ui/Input';
import './TodoApp.css';
import Modal   from './Modal.js';
import history from '../../history'

class TodoApp extends Component {
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
          <Button raised color="primary" onClick={() => this.props.task && this.props.addTask(this.props.task)}>add</Button>
          <Button raised color="primary" onClick={() => this.props.deleteAllTask()}>deleteAll</Button>
          <TodoList tasks={this.props.tasks} openModal={this.props.toggleModal} deleteTask={this.props.deleteTask}></TodoList>
        </div>
        <Modal show={this.props.isModalOpen} onClose={this.props.toggleModal} updateTask={this.props.updateTask}></Modal>
        <button onClick={() => history.push('/')} >戻る</button>
        <button onClick={() => this.props.redirectToError()} >エラーページへ</button>
      </div>
    )
  }
}

function TodoList(props) {
  return (
    <ul>
      {
        props.tasks.map(function(item, i) {
          return (
            <li key={i}>
              {item}
              <button onClick={() => props.openModal(i)} >変更</button>
              <button onClick={() => props.deleteTask(i)} >削除</button>
            </li>
          );
        })
      }
    </ul>
  )
}

export default TodoApp;