import React     from 'react';
import Reboot    from 'material-ui/Reboot';
import AppBar    from 'material-ui/AppBar';
import Toolbar   from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button    from 'material-ui/Button';
import Input     from 'material-ui/Input';
import './TodoApp.css';
import history from '../../history'

export default function TodoApp({ task, tasks, inputTask, addTask, deleteTask, deleteAllTask, redirectToError }) {
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
        <Input onChange={(e) => inputTask(e.target.value)} value={task}/>
        <Button raised color="primary" onClick={() => task && addTask(task)}>add</Button>
        <Button raised color="primary" onClick={() => deleteAllTask()}>deleteAll</Button>
        <ul>
            {
              tasks.map(function(item, i) {
                return (
                  <li key={i}>
                    <TodoList item={item} num={i} deleteTask={deleteTask}></TodoList>
                  </li>
                );
              })
            }
        </ul>
      </div>
      <button onClick={() => history.push('/')} >戻る</button>
      <button onClick={() => redirectToError()} >エラーページへ</button>
    </div>
  )
}

function TodoList(props) {
  console.log(props.deleteTask);
  return (
    <React.Fragment>
      <div>
        {props.item}
        <button onClick={() => history.push('/')} >更新</button>
        <button onClick={() => props.deleteTask(props.num)} >削除</button>
      </div>
    </React.Fragment>
  )
}