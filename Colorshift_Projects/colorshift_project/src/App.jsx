import React, { useState } from 'react';
import './App.css';
import Colorbar from './components/colorbar';

function App() {
  const [color, setColor] = useState('olive');

  return (
    <>
    <h1 className="text-2xl font-light text-center my-4">Basic Color Changer Project</h1>
    <div
      className="flex flex-wrap w-full min-h-screen flex justify-center items-center duration-200"
      style={{ backgroundColor: color }}
    >
      <Colorbar setColor={setColor} />
    </div>
    </>
  );
}

export default App;