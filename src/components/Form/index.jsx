import React, { useState, useEffect } from 'react';

const colors = {
  Bladee: '#e7bce7',
  Ecco2k: '#b1b1b1',
  ThaiboyDigital: '#ebebeb',
}
const random = Math.floor(Math.random() * colors.length)
console.log(colors)
console.log(random)
console.log(colors[random])

export default function DGForm() {
  const [selectedMember, setSelectedMember] = useState('bladee')
  const [color, setColor] = useState(colors.Bladee);


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
      {/* <hr />
      <p>Your favourite Drain Gang member: {color}</p> */}
    </>
  );
}

{/* <option value="Bladee">Bladee</option>
<option value="Ecco2k">Ecco2k</option>
<option value="Thaiboydigital">Thaiboy Digital</option> */}