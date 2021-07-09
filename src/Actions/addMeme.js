import { ADD_MEME_URL } from './types';

export const addMemeUrl = (url) => {
  return {
    type: ADD_MEME_URL,
    data: url
  }
}