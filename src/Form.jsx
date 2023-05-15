import { useState } from 'react';

export default function DGForm() {
  const [selectedMember, setSelectedMember] = useState('bladee');
  return (
    <>
      <label>
        Pick your favourite Drain Gang member:
        <select
          value={selectedMember}
          onChange={e => setSelectedMember(e.target.value)}
        >
          <option value="bladee">Bladee</option>
          <option value="ecco2k">Ecoo2k</option>
          <option value="thaiboydigital">Thaiboy Digital</option>
        </select>
      </label>
      <hr />
      <p>Your favourite Drain Gang member: {selectedMember}</p>
    </>
  );
}