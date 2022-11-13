import React from 'react';
import Menu from './components/Menu';
import AnimatedText from './components/AnimatedText';

function App() {
  return (
    <div className="flex flex-col h-full text-white bg-gradient-to-br from-gray-800 to-gray-900 pl-40">
    <div className="h-screen flex flex-col justify-center" >
      <h1 className="font-bold text-6xl font-sans subpixel-antialiased">
        <AnimatedText text="Hi,"/>
        <br></br>
        <AnimatedText text="I'm Ch4nge,"/>
        <br></br>
        <AnimatedText text="Fullstack developer"/>
      </h1>
      <h2 className="text-2xl text-gray-400 font-serif subpixel-antialiased">Fullstack developer</h2>
    </div>
    <Menu/>
    </div>
  );
}

export default App;
