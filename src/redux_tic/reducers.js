import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import turnReducer from './turnReducer';
import movesReducer from './movesReducer';

const GlobalState = combineReducers({
	turn: turnReducer,
	values: gameReducer,
	moves: movesReducer,
   });

export default GlobalState;
