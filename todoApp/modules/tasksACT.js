export const inputTask = (task) => ({
  type: 'INPUT_TASK',
  payload: {
    task
  }
});

export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {
    task
  }
});

export const deleteTask = (listNum) => ({
  type: 'DELETE_TASK',
  payload: {
    listNum
  }
});

export const deleteAllTask = () => ({
  type: 'DELETE_All_TASK'
});

export const toggleModal = () => ({
  type: 'Toggle_Modal'
});

export const updateTask = (task, listNum) => ({
  type: 'Update_Task',
  payload: {
    task: task,
    listNum: listNum
  }
});