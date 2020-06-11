import { combineReducers } from 'redux';
import reducer from '../pages/Main/reducer';

const rootReducer = combineReducers({ card: reducer });

export default rootReducer;