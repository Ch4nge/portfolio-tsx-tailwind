import React from 'react';
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
