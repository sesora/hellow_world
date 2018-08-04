import { connect }            from 'react-redux';
import { push }               from 'react-router-redux';
import TodoApp                from '../components/TodoApp';
import { inputTask, addTask, deleteTask } from '../modules/tasksACT';

function mapStateToProps({ tasks }) {
  return {
    task: tasks.task,
    tasks: tasks.tasks
  };
}

function mapDispaatchToProps(dispatch) {
  return {
    addTask(task) {
      dispatch(addTask(task));
    },
    inputTask(task) {
      dispatch(inputTask(task))
    },
    deleteTask() {
      dispatch(deleteTask())
    },
    redirectToError() {
      dispatch(push('/error'));
    }
  };
}

export default connect(mapStateToProps, mapDispaatchToProps)(TodoApp);