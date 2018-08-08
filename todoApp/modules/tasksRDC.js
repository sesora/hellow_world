const initialState = {
  task: '',
  tasks: [],
  isModalOpen: false,
  modalNum: -1
};
  
export default function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case 'INPUT_TASK':
      return {
        ...state,
        task: action.payload.task
      };
    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat([action.payload.task])
      };
    case 'DELETE_TASK': 
    {
      const tasks = [...state.tasks]; 
      tasks.splice(action.payload.listNum, 1);
      return {
        ...state,
        tasks: tasks.concat()
      };
    }
    case 'DELETE_All_TASK':
      return {
        ...state,
        tasks: []
      };
    case 'Toggle_Modal':
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
        modalNum: action.payload.listNum
      };
    case 'Update_Task':
      const tasks = [...state.tasks];
      console.log(state.modalNum);
      console.log(action.payload.task);
      tasks[state.modalNum] = action.payload.task
      return {
        ...state,
        tasks: tasks
      };
    default:
      return state;
  }
}