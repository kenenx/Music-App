import React, { useState } from 'react'
import { DGForm, Intro, Tracklist} from './components'
import trackdata from './trackdata.js'

import './App.css'


function App() {

  return (
    <>
      <Intro />
      <h2>My favourite songs</h2>
      <Tracklist trackdata={trackdata}/>

      <DGForm />
      <>
      </>
    </>
  )
}



export default App