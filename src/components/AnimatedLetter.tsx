import React, { useState } from 'react';

interface Props {
    letter: string
}

const AnimatedLetter = (props : Props) => {
      const styles =  "transition inline-block ease-in-out hover:text-base hover:text-green-300 duration-300"
      const [animated, setAnimated] = useState(false)

      return (
        <label
          onMouseEnter={() => setAnimated(()=> true)}
          onAnimationEnd={() => setAnimated(()=> false)}
          className={animated ? styles.concat(' animate-wiggle') : styles}>{props.letter}</label>
      );
};

export default AnimatedLetter;
