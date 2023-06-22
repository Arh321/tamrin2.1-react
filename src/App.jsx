import { useState } from 'react'
import Box from './components/box'
import List from './components/list'
function App() {
  const [color,setColor] = useState('red')
  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
    { label: 'Purple', value: 'purple' },
    { label: 'Yellow', value: 'yellow' },
  ];
  const change = (e) => {
    console.log(e)
    setColor(e)
  }

  return (
  
      <div className='container'>
        <Box color={color}/>
        <List 
        change={change}
        options={options}
        />
      </div>
        
    
  )
}

export default App
