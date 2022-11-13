import React from 'react';
import MenuSection from './MenuSection';
import Navigation from './Navigation';

interface Props {
    text: string
}

const addSpan = (note: any) => {
  return [...note].map(letter =>
    <label className="transition ease-in-out hover:text-base delay-75 hover:text-green-300 duration-300" >{letter}</label>)
}

const AnimatedText = (props : Props) => {
      return (
        <>
	  {addSpan(props.text)}
        </>
      );
};

export default AnimatedText;
