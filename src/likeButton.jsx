import React, { useState } from 'react'
import Heart from 'react-heart'

function LikeButton() {
    const [active, setActive] = useState(false)
    return (
      <div className="likeButton" style={{ width: "2rem" }}>
        <Heart isActive={active} onClick={() => setActive(!active)}/>
      </div>
    );
  }

export default LikeButton