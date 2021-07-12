import { ARCHIVE_MEME_URL } from './types';

export const archiveMemeUrl = (url) => {
  return {
    type: ARCHIVE_MEME_URL,
    data: url
  }
}

