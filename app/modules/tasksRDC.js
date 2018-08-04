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
      const tasks = [...state.tasks]; 
      tasks.pop();
      return {
        ...state,
        tasks: tasks.concat()
      };
    default:
      return state;
  }
}