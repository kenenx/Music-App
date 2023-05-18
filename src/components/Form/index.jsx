import React, { useState, useEffect } from 'react';

const colors = {
  Bladee: '#e7bce7',
  Ecco2k: '#c7fcf9',
  ThaiboyDigital: '#ebebeb',
}

export default function DGForm() {
  // const [selectedMember, setSelectedMember] = useState('bladee')
  const [color, setColor] = useState(colors.Bladee);

  function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

  console.log(getKeyByValue(colors, color))


  useEffect(() => { document.body.style.background = color
  },[color])

  return (
    <>
      <label>
        Pick your favourite Drain Gang member : 
        <select
          value={color}
          onChange={e => setColor(e.target.value)}
        > {Object.entries(colors).map(([name, value]) =>(
          <option key={`color--${name}`} value={value}>
            {name}
          </option>
        ))}
        </select>
      </label>
      <hr />
      <p>Your favourite Drain Gang member: {getKeyByValue(colors, color)}</p>
    </>
  );
}