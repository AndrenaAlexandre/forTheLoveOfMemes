import React from "react";
// import { memeArchieve } "./MemeArchive";
// import Reducer from "../Reducers/memeReducer"
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './styles.module.css';

export const MemesArchived = () => {
  
  const memeArchive = useSelector(state => state.meme.memeArchive);

  const history = useHistory();
  return <>

  

  { memeArchive.map(memeImgUrl => {
    return (
      <div>
        <img src={memeImgUrl}></img>
      </div>
    )
  })}
    <button onClick={ () => history.push('/')} className={styles.home}>
      Make More Memes
    </button>
  </>;
};

