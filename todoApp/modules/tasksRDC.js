const initialState = {
  task: '',
  tasks: [],
  isModalOpen: false
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
        isModalOpen: !state.isModalOpen
      };
    case 'Update_Task':
      const tasks = [...state.tasks];
      tasks[action.payload.listNum] = action.payload.task
      return {
        ...state,
        isModalOpen: !state.isModalOpen
      };
    default:
      return state;
  }
}