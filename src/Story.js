import React from 'react'
import "./Story.css"
import { Avatar } from '@mui/material';

function Story({ image, profileSrc, title}) {
  return (
    <div style={{ backgroundImage: `url(${image})`}} className="story">
        <Avatar className="story__avatar" src={profileSrc} />
        <h4>{title}</h4>
        <img src={image} alt="Story Thumbnail" />

    </div>
  )
}

export default Story