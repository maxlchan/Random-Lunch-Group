import { combineReducers } from 'redux';
import lunch from './lunch/lunch.reducer';

const rootReducer = combineReducers({ lunch });

export default rootReducer;
