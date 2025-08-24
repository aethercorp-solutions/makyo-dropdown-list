import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MultiSelectDropdown from './components/MultiSelectDropdown';

const options = [
  'Option 1', 
  'Option with icon', 
  'Long Long Option 3', 
  'Long Long Long Option 4', 
  'Long Long Long Long Option 5',
  'Long Long Long Long Long Option 6'
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <MultiSelectDropdown options={options} 
        multiple={true} 
        outlined={false}
        optionLabel="Label"
        filtering={true}
        usePortal={true}
        />
    </div>
  )
}

export default App
