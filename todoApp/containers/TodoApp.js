import { connect }            from 'react-redux';
import { push }               from 'react-router-redux';
import TodoApp                from '../components/TodoApp';
import { inputTask, addTask, deleteTask, deleteAllTask, toggleModal, updateTask } from '../modules/tasksACT';

function mapStateToProps({ tasks }) {
  return {
    task: tasks.task,
    tasks: tasks.tasks,
    isModalOpen: tasks.isModalOpen
  };
}

function mapDispaatchToProps(dispatch) {
  return {
    addTask(task) {
      dispatch(addTask(task));
    },
    inputTask(task) {
      dispatch(inputTask(task));
    },
    deleteTask(listNum) {
      dispatch(deleteTask(listNum));
    },
    deleteAllTask() {
      dispatch(deleteAllTask());
    },
    redirectToError() {
      dispatch(push('/error'));
    },
    toggleModal(listNum = -1) {
      dispatch(toggleModal(listNum));
    },
    updateTask(task) {
      dispatch(updateTask(task));
    }
  };
}

export default connect(mapStateToProps, mapDispaatchToProps)(TodoApp);