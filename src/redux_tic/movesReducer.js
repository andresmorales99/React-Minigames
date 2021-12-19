function movesReducer(state = 0, action) {
    switch (action.type) {
    case 'PLAY_POSITION':
    return state + 1;
    case 'RESET':
    return 0;
    default:
    return state;
    }
   }
   export default movesReducer;