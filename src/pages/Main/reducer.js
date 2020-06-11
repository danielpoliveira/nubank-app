const INITIAL_STATE = {
  opened: false,
}

export default (state=INITIAL_STATE, action) => {
  switch(action.type){
    case 'OPENED': 
      return {
        ...state,
        opened: !state.opened,
      }
    default: return state;
  }
}