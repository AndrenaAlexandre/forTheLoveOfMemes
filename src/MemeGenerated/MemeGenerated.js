import React, {useState} from 'react';
import styles from './styles.module.css';
import { useHistory } from 'react-router-dom';
import { useClipboard } from 'use-clipboard-copy';
import { useDispatch, useSelector } from 'react-redux';
// import { Meme } from '../Meme/Meme';


export const MemeGenerated = () => {
    
    const [copied, setCopied] = useState(false); //setting the state for copying the meme
    
    const clipboard = useClipboard();
    const history = useHistory();
    const dispatch = useDispatch();
    // const location= useLocation();

    const imgUrl = useSelector(state => state.meme.memeUrl);
    
    //now we need to grab the query string. We are going to use URLSearchParams which is used in the API
    //const url = new URLSearchParams(location.search).get('url');
    

        //now we are going to enable the ability for our user to save the meme to thier clipboard so that they can share it
    const copyLink = () => {
        clipboard.copy(imgUrl);
        setCopied(true);
        // dispatch(archiveMemeUrl(imgUrl));
    };
    console.log(imgUrl)

    return(
        <div className={styles.container}>
            <h3>You Delivered Your Meme Baby!</h3>
            <button onClick={ () => history.push('/')} className={styles.home}>
                Make More Memes
            </button>
            { imgUrl && <img alt='meme' src={imgUrl} /> }
            <button onClick={copyLink} className={styles.copy}>
                { copied ? 'Link Copied!' : 'Copy link'}
            </button>
        </div>
        )
    // what the above is saying is that if url exist the proceed with rendering the new image
    // then in the copy button feature we are using a terinary statement that pretty much says if
};