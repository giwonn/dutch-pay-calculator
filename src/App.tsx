import { useState } from 'react'
import './App.css'
import Input from '@/components/atoms/Input';
import Chip from '@/components/atoms/Chip';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Input />
      <Chip text='inputName' />
    </div>
  )
}

export default App
