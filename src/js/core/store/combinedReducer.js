import { combineReducers } from 'redux';
import mapReducer from '../features/MapSelection/reducer';

const rootReducer = combineReducers({ map: mapReducer });
export default rootReducer;