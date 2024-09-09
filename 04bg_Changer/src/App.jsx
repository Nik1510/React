import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState("olive");

  const getRandomColor = () => {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);
    return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
  };

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          
          
          <button 
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{background:"red"}}
          onClick={() =>setColor("red")}
          > red</button>


          <button 
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{background:"green"}}
          onClick={() =>setColor("green")}
          > green
          </button>
          
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{background:"blue"}}
           onClick={() =>setColor("blue")}>
             blue
             </button>


          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{background:"yellow"}}
          onClick={() =>setColor("yellow")}
          > yellow
          </button>
          
          <button 
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{background:"brown"}}
          onClick={() =>setColor("brown")}>
             brown
             </button>
          
          <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ background: getRandomColor() }}
            onClick={() => setColor(getRandomColor())}
            
          >
            random
          </button>
        </div>
      </div>
    </div>
   
  );
}

export default App;
