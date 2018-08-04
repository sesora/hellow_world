import React     from 'react';
import Reboot    from 'material-ui/Reboot';
import AppBar    from 'material-ui/AppBar';
import Toolbar   from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button    from 'material-ui/Button';
import Input     from 'material-ui/Input';
import List, { ListItem, ListItemText} from 'material-ui/List';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './TodoApp.css';
import history from '../../history'

export default function TodoApp({ task, tasks, inputTask, addTask, deleteTask, redirectToError }) {
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
        <Input onChange={(e) => inputTask(e.target.value)} />
        <Button raised color="primary" onClick={() => addTask(task)}>add</Button>
        <Button raised color="primary" onClick={() => deleteTask()}>delete</Button>
        <ul>
            {
              tasks.map(function(item, i) {
                return (
                  <li key={i}>
                    {item}
                  </li>
                );
              })
            }
        </ul>
      </div>
      <button onClick={() => redirectToError()} >エラーページへ</button>
      <button onClick={() => history.push('/PracticeStyle')} >style練習</button>
      <button onClick={() => history.push('/style1')} >style_1</button>
      <button onClick={() => history.push('/menu')} >menu練習</button>
    </div>
  )
}