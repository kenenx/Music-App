import React from 'react'
import Track from '../Track'

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