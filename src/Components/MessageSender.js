import React from 'react'
import "./CSS/MessageSender.css"
import { Avatar } from '@mui/material'
import { InsertEmoticon, PhotoLibrary, Videocam } from '@mui/icons-material';
import { useState } from 'react';
import { useStateValue } from './StateProvider';
import db from '../firebase';
import { addDoc  } from 'firebase/firestore';
import { collection } from "firebase/firestore";

function MessageSender() {
  const [{user}, dispatch] = useStateValue();

    const [input, setInput] = useState('');
    const [imageURL, setImageURL] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addDoc(collection(db,"posts"),({
          message: input,
          timestamp: new Date(),
          profilePic: "" + user.photoURL,
          username: "" + user.displayName,
          image: imageURL,
        })) 
        setInput("");
        setImageURL("");
    };
  return (
    <div className='messageSender'>
      <div className ="messageSender__top">
        <Avatar src={user.photoURL}/>
        <form>
            <input value ={input} 
                onChange={(e) => setInput(e.target.value)}
                className = "messageSender__input"
                placeholder={"What are you looking for?"}/>
            <input value = {imageURL} 
                onChange = {(e) => setImageURL(e.target.value)}
                placeholder='image URL (Optional)'/>
            <button onClick={handleSubmit} type="submit">Hidden Submit</button>
        </form>
      </div>
      <div className='messageSender__bottom'>
        <div className='messageSender__option'>
            <Videocam style = {{color: "red"}} />
            <h3>Live Video</h3>
        </div>
        <div className='messageSender__option'>
            <PhotoLibrary style = {{color: "green"}} />
            <h3>Photo/Video</h3>
        </div>
        <div className='messageSender__option'>
            <InsertEmoticon style = {{color: "orange"}} />
            <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  )
}

export default MessageSender
