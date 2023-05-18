import React from 'react'
import { Intro, DGForm, Tracklist } from '../../components'
import trackdata from '../../trackdata'

const Home = () => {
  return (
    <>
      <>
      <Intro />
      <h2>Drain Gang Popular Songs</h2>
      <Tracklist trackdata={trackdata}/>
      <DGForm />
      </>
    </>
  )
}

export default Home