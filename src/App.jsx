import React, { useState } from 'react'
// import Heart from 'react-heart'
import Intro from './Intro.jsx'
// import {Song1,Song2,Song3,Song4} from './Songs.jsx'
import LikeButton from './likeButton.jsx'
import DGForm from './Form.jsx'

import './App.css'
import './Intro.css'

function Song1 () {
  return (
  <>
    <img
  className="thumbnail"
  src=".\src\assets\images\icedancer.png"
  alt="Icedancer album art"
  />
  <LikeButton />
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
  <img
  className="thumbnail"
  src=".\src\assets\images\amygdala.jpg"
  alt="amygdala album art"
  />
  <LikeButton />
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
  <img
  className="thumbnail"
  src=".\src\assets\images\back 2 life.jpg"
  alt="back 2 life album art"
  />
  <LikeButton />
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
  <img
  className="thumbnail"
  src=".\src\assets\images\trashisland.jpg"
  alt="trashisland album art"
  />
  <LikeButton />
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
      <DGForm />
    </>
  )
}



export default App