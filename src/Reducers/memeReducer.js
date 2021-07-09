import { ADD_MEME_URL } from '../Actions/types';

const initialState = {
  memeUrl: ""
}

const memeReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_MEME_URL:
      return {
        ...state,
        memeUrl: action.data
      };
    default:
      return state;
  }
}

export default memeReducer;