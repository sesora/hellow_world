const initialState = {
  task: '',
  tasks: []
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
    default:
      return state;
  }
}