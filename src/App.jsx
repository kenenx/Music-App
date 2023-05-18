import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {NavBar} from './layout'
// import { DGForm, Intro, Tracklist} from './components'
// import trackdata from './trackdata.js'
import { Home, Songs,TrackInfo } from './pages'
import './index.css'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<NavBar/>}>
          <Route index element={<Home /> }/>

          <Route path="/songs">
            <Route index element={<Songs />}/>/
            <Route path="/songs/:name" element={<TrackInfo/>}/>
          </Route>

        </Route>
      </Routes>
    </div>
  )
}



export default App

// function App() {

//   return (
//     <>
//       <Intro />
//       <h2>Drain Gang Popular Songs</h2>
//       <Tracklist trackdata={trackdata}/>

//       <DGForm />
//     </>
//   )
// }