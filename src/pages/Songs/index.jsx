import React, {useState, useEffect } from 'react'
import { DGForm } from '../../components'
import { Link } from 'react-router-dom'
import './style.css'
import trackdata from '../../trackdata'

const Songs = () => {

  return (
    <>
      <h2>Popular Drain Gang Songs</h2>
      <div className='songs'>
        {
          trackdata.map((song) => (
            <div key={song.id}>
              <Link to={`/songs/${song.name}`}><div className="item">{song.name}</div></Link>
            </div>
          ))
        }
      </div>
      <DGForm />
    </>
  )
}

export default Songs