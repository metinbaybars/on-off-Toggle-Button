
import logo from './logo.svg';
import './App.css';
import Switch from './components/Switch';
import React ,{useState} from 'react';
import ToggleButton from './components/Change';

function App() {
  {}
  const [value ,setValue] =useState(false);


  return (
    <div className="App">
      <Switch 
        isOn={value}
        handleToggle ={() =>setValue(!value)}
        />
        <ToggleButton />
      
      
    </div>
  );
}

export default App;
