import React, { useState } from 'react'
import LikeButton from '../LikeButton'
import './style.css'



function Track ({trackdata}) {

  return(
  <div className='songcard'>
    <img
  className="thumbnail"
  src={trackdata.album_art}
  alt={`${trackdata.name} image`}
  />
  <LikeButton />
        <p>{trackdata.name} <br />
        Album : {trackdata.album} <br />
        Artist : {trackdata.artist}
        </p>
  </div>

  )
}


export default Track