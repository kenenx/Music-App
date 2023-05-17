import React from 'react'
import Track from '../Track'
import './style.css'

const Tracklist = ({trackdata}) => {
  return (
    <div>
      {
        trackdata.map((trackdata, index) => {
          return(
            <Track trackdata={trackdata} key={index}/>
          )
        })
      }
      
    </div>
  )
}

export default Tracklist