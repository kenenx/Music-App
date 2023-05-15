import { useState } from 'react'
import Intro from './Intro.jsx'
// import Song1 from "./Songs.jsx"

import './App.css'
import './Intro.css'

function Song1 () {
  return (
  <>
      <p>Be Nice 2 Me <br />
      Album : Icedancer <br />
      Artist : Bladee
      </p>
  </>
  );
}

function Song2 () {
  return (
  <>
      <p>Amygdala <br />
      Album : Single <br />
      Artist : Bladee and Ecco2k
      </p>
  </>
  )
}

function Song3 () {
  return (
  <>
      <p>True Love <br />
      Album : Back 2 Life <br />
      Artist : Thaiboy Digital and Yung Lean
      </p>
  </>
  )
}

function Song4 () {
  return (
  <>
      <p>Western Union <br />
      Album : Trash Island <br />
      Artist : Ecco2k ,Thaiboy Digital and Bladee
      </p>
  </>
  )
}

function App() {

  return (
    <>
      <Intro />
      <h2>My favourite songs</h2>
      <Song1 />
      <Song2 />
      <Song3 />
      <Song4 />
    </>
  )
}

export default App