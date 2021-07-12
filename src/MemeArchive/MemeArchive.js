import React from "react";
// import { memeArchieve } "./MemeArchive";
import { useSelector } from 'react-redux';

export const MemesArchived = () => {
  
  const memeArchive = useSelector(state => state.meme.memeArchive);

  return <>

  Meme Gallery

  { memeArchive.map(memeImgUrl => {
    return (
      <div>
        <img src={memeImgUrl}></img>
      </div>
    )
  })}
    This is where I want to put memes that have been posted
  </>;
};

