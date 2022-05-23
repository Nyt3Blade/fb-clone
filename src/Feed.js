import React from 'react';
import StoryReel from './StoryReel.js';
import MessageSender from './MessageSender.js';
import Post from "./Post.js";
import "./Feed.css"

function Feed() {
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />


      <Post 
        profilePic=""
        message="Hello There!"
        timestamp="Timestamp......."
        username="User1"
        image=""
      />
    </div>
  )
}

export default Feed;