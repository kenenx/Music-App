import React, { useState } from 'react'
import Heart from 'react-heart'
import './style.css'

function LikeButton() {
    const [active, setActive] = useState(false)
    return (
      <div className="likeButton">
        <Heart isActive={active} onClick={() => setActive(!active)}/>
      </div>
    );
  }

export default LikeButton