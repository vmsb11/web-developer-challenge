import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';
import postStore from './posts/reducer';

const rootReducer = combineReducers({
  postStore,
  toastr: toastrReducer
});

export default rootReducer;
