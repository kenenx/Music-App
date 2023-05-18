import React, { useState, useEffect } from 'react'
import {useParams, useNavigate } from 'react-router-dom'
import './style.css'
import { Track, DGForm } from '../../components'
import trackdata from '../../trackdata'

const Trackinfo = ({}) => {
  const songInfo = trackdata
  const { name } = useParams()
  const navigate = useNavigate()

  let songFinder = songInfo.find(e => e.name === name)

  return (
    <>
      <>
      <button onClick={() => navigate('/songs')}>Back to Songs</button>
      <Track trackdata={songFinder} />
      <DGForm />
      </>
    </>
  )
}

export default Trackinfo