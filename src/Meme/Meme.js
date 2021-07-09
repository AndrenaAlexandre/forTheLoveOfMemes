import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addMemeUrl} from '../Actions/addMeme';

export const Meme = () => {
    // places states here //
    const [memes, setMemes] = useState([]); //this state is set to an empty array
    const [memeIndex, setMemeIndex] = useState(0); //this state is set with an inital value of 0
    const [captions, setCaptions] = useState([]); //this state is set to an empty array
    // end of states //
    
    // more hooks but not state hooks go below //
    const dispatch = useDispatch();
    const history = useHistory();
    // end of additional hooks //

    // place functions here //
    // Below is the function written so that once we have the empty string equal to the box count of the meme 
    // we should be able to save the text written in those strings. Pretty much when we are on  index of the input  of the same index we are looping through
    // we will return the text that we've written(e). Otherwise we will return what is already there 
    const updateCaption = (e, index) => {
        const text = e.target.value || '';
        setCaptions(
            captions.map((c, i) => {
                if(index === i) {
                    return text;
                } 
                else {return c;
                }
            })
        );
    };

    // Below is a function to generate the memes. The api used needs form data to render the text on to the picture
    const generateMeme = () => {
        const currentMeme = memes[memeIndex];
        const formData = new FormData();

        formData.append('username', 'andicane');
        formData.append('password', 'andicane');
        formData.append('template_id', currentMeme.id);
        captions.forEach((c, index) => formData.append(`boxes[${index}][text]`, c)); 
        //this is pretty much saying to loop through the captions and forEach on im going to append to the form data the boxes index and 
        //then pass in c which stands for the captions. 

        fetch('https://api.imgflip.com/caption_image', {
            method: 'POST',
            body: formData
        }).then(res => {
            res.json().then(res => {
                dispatch(addMemeUrl(res.data.url));
                history.push(`/generated?=url=${res.data.url}`); //this line of code is so cool!
            });
        });

    };

    // Below is a shuffle function curtesy of google
    const shuffleMemes = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * i);
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      };
    // end of functions //

    // Below I am using useEffect function to first fetch my API data, then put it into json data, then take the data, find data.memes and set that to the
    // const memes. Then once i have the data I am going to run my shuffle function on memes to shuffle the 100 memes in the api. after that I am using
    // setMemes to set the state and rerender the memes
    useEffect(()  => {
        fetch('https://api.imgflip.com/get_memes').then(res => {
            res.json().then(res => {
                const _memes = res.data.memes;
                shuffleMemes(_memes)
                setMemes(_memes);
            });
        });
    }, []);


    // Below I am using the Array constructor. memes[memeIndex] is the meme we are on and we are going to find the box count of that meme (in api data)
    // then we are going to set that box count to the number of arrays to create. then I use the .fill() to file those arrays now with empty strings!
    // once I setCaptions equal to that I will have a piece of state with an array of empty strings, equal to the length number of box-count of the meme
    useEffect(() => {
        if(memes.length){
            setCaptions(Array(memes[memeIndex].box_count).fill(''));
        }
    }, [memeIndex, memes])

    return(

        //Below is the stuff that gets rendered on to the page. Need to finish logic to generate meme with caption attached

        memes.length ? 
        <div className={styles.container}>
            <button className={styles.generate} onClick={generateMeme}>Generate</button> 
            <button className={styles.skip} onClick={() => {setMemeIndex(memeIndex + 1)}}>Skip</button>
            {
                captions.map((c, index) => (
                    <input onChange={(e) => updateCaption(e, index)} key={index}/>
                ))
            }
            <img alt='meme' src={memes[memeIndex].url}/>
        </div> : 
        <></>
        
    );
};