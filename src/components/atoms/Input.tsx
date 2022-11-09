import React, { useState } from 'react'

const Input = () => {
  const [name, setName] = useState('')

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  return (
    <input onChange={changeName} />
  )
}

export default Input
