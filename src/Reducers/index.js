import { combineReducers } from 'redux';
import memeReducer from './memeReducer';

const rootReducer = combineReducers({
  // state.template.(...)
  meme: memeReducer
});

export default rootReducer;