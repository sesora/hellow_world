import { connect }            from 'react-redux';
import { push }               from 'react-router-redux';
import TodoApp                from '../components/TodoApp';
import { inputTask, addTask, deleteTask, deleteAllTask } from '../modules/tasksACT';

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
    deleteTask(listNum) {
      dispatch(deleteTask(listNum))
    },
    deleteAllTask() {
      dispatch(deleteAllTask())
    },
    redirectToError() {
      dispatch(push('/error'));
    }
  };
}

export default connect(mapStateToProps, mapDispaatchToProps)(TodoApp);