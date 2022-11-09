import React, { useState } from 'react'

const Chip = ({text}: { text: string}) => {
  const [name, setName] = useState('')

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  return (
    <div style={{ outline: '1px solid black'}}>
      <span>{ text }</span>
      <button>x</button>
    </div>
  )
}

export default Chip
