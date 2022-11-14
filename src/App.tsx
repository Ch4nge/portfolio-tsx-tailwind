import React from 'react';
import Menu from './components/Menu';
import AnimatedText from './components/AnimatedText';

function App() {
  return (
  <>
    <div className="flex">
    <Menu/>
    <div className="relative flex flex-col text-white bg-gradient-to-br from-gray-800 to-gray-900 w-full pl-40">
      <div className="h-screen flex flex-col justify-center" >
        <h1 className="font-bold text-8xl font-sans subpixel-antialiased">
          <AnimatedText text="Hi,"/>
          <br></br>
          <AnimatedText text="I'm"/>
	  <label> </label>
          <AnimatedText text="Ch4nge"/>
          <br></br>
          <AnimatedText text="Fullstack"/>
	  <label> </label>
          <AnimatedText text="developer"/>
        </h1>
        <h2 className="text-2xl text-gray-400 font-serif subpixel-antialiased">I code every day, to not lose 100€ to YaY!</h2>
      </div>
      <div className="h-screen flex flex-col " >
        <h2 className="font-bold text-4xl font-sans subpixel-antialiased bb-1" id="technologies">
	  Technologies
        </h2>
      </div>
    </div>
    </div>
   </>
  );
}

export default App;
