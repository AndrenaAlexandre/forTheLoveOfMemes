import { ADD_MEME_URL, ARCHIVE_MEME_URL } from '../Actions/types';

const initialState = {
  memeUrl: "",
  memeArchive: []
}



const memeReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_MEME_URL:
      return {
        ...state,
        memeUrl: action.data
      };

   case ARCHIVE_MEME_URL:
      return {
        ...state,
        memeArchive: [...state.memeArchive, action.data]
      };

    default:
      return state;
  }
}

export default memeReducer;