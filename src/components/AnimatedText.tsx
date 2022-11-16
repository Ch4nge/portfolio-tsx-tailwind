import React from 'react';
import MenuSection from './MenuSection';
import Navigation from './Navigation';
import AnimatedLetter from './AnimatedLetter';

interface Props {
    text: string
}

const addSpan = (note: any) => {
  return [...note].map(letter =>
      <AnimatedLetter letter={letter}/>)
}

const AnimatedText = (props : Props) => {
      return (
        <>
	  {addSpan(props.text)}
        </>
      );
};

export default AnimatedText;
